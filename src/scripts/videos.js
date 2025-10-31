// Vidyard Videos ---------------------
window.onVidyardAPI = (vidyardEmbed) => {
  function openVideoModal(currentUUID) {
    let currentPlayer = vidyardEmbed.api.getPlayersByUUID(currentUUID);

    if (currentPlayer.length > 0) {
      currentPlayer[0].showLightbox();
    }
  }

  $('.video__container').on('click', (event) => {
    let currentUUID =
      $(event.target)[0]?.dataset.uuid ||
      $(event.target)[0].offsetParent.dataset.uuid;

    openVideoModal(currentUUID);
  });

  vidyardEmbed.api.addReadyListener(function (_, player) {
    var video_embed_url = window.location.href; // defines url where video is embedded
    var uuid = player.uuid;
    var video_url = 'https://play.vidyard.com/' + uuid;
    let video_title = player.element.offsetParent?.dataset.title;
    window.player = player;

    vidyardEmbed.api.progressEvents(
      function (result) {
        var video_duration =
          result.player.metadata.chapters_attributes[result.chapter]
            .video_attributes.length_in_seconds;
        var video_title =
          result.player.metadata.chapters_attributes[result.chapter]
            .video_attributes.name;

        // Function for sending milestone data to GA
        // the data we send is the same for start, complete, and progress, but with a different event name for each
        function sendProgressToGA(name) {
          window.dataLayer.push({
            event: name,
            video_current_time: (result.event / 100) * video_duration,
            video_duration: video_duration,
            video_percent: result.event, // this will be 0 for video_start, and 100 for video_complete
            video_provider: 'Vidyard',
            video_title: video_title,
            video_url: video_url,
            video_embed_url: video_embed_url,
          });
        }
        if (result.event === 0) {
          sendProgressToGA('video_start');
        } else if (result.event === 100) {
          sendProgressToGA('video_complete');
        } else {
          // video has reached another milestone (ie. 25%, 50%, etc.)
          sendProgressToGA('video_progress');
        }
      },
      // milestones at which events fire
      [0, 10, 25, 50, 75, 95, 100]
    );

    // ****** PLAY ******
    player.on('play', function () {
      $('h1.video__title').remove();

      $('#vidyard-popbox').prepend([
        `<h1 class="video__title">${video_title}</h1>`,
        // $('.vidyard-close-container')[0]?.outerHTML,
      ]);

      $('.vidyard-close-container')?.appendTo('#vidyard-popbox');
    });
  });
};

// replace Vidyard's thumbnail image for a custom image for this site.
let currentPlayer = document.querySelector('.video__container');
let thumbnailsToReplace = [];

const video_observer = new MutationObserver(() => {
  thumbnailsToReplace?.forEach((obj) => {
    $(
      `.vidyard-player-container[uuid="${obj.uuid}"] img.vidyard-lightbox-image`
    ).attr('src', `${obj.imgURL}`);
  });
});

if (currentPlayer) {
  video_observer.observe(currentPlayer, {
    subtree: true,
    childList: true,
  });
}
