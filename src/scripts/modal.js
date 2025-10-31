export const handleModal = () => {
  let modal = $('.modal');
  let btn = $('[data-toggle="modal"]');
  let closeBtn = $('.close');
  let dialog = $('.modal__dialog');
  const urlParams = new URLSearchParams(window.location.search);

  // When the user click// s the button, replace title text content and open the modal
  btn.on('click', (e) => {
    let targetModal = $(e.target).attr('data-target');

    $('.modal__title').text($(e.target).attr('data-title'));
    $(`#${targetModal}`).show();
  });

  // When the user clicks on the close button (x), close the modal
  closeBtn.on('click', () => modal.hide());

  // When the user clicks anywhere outside of the modal content, close the modal
  $(window).on('click', (event) => {
    if ($(event.target).is(dialog)) {
      modal.hide();
    }
  });

  // opens modal if the urls contains the subscribe keyword
  if (urlParams.has('subscribe')) {
    if ($('.modal__title').attr('data-title') == '') {
      $('.modal__title').text('Subscription Preferences');
    }

    $('#subscribe-modal').show();
  }

  // Close modal 5 seconds after form submission
  document.addEventListener('submit', function (e) {
    if ($(e.target).parent('.modal')) {
      setTimeout(function () {
        modal.hide();
      }, 5000);
    }
  });
};
