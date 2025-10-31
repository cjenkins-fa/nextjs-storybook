// Breadcrumb Builder -------------------------------
const pagesHierarchy = [];

export function resolvePageHierarchy(path, sitemap) {
  if (!path) return;

  // Update replace value with desired sitemap import
  let currentPage = sitemap ? sitemap[path] : null;

  // Exit if path doesn't exist
  if (!currentPage) {
    console.warn(path + ' does not exist in pages map');
    return;
  } else {
    currentPage.url = path;
    pagesHierarchy.unshift(currentPage);
  }

  // Keep finding parent pages
  resolvePageHierarchy(currentPage.parent, sitemap);
}

// Render Breadcrumbs
export function renderBreadcrumbs() {
  $('.breadcrumb').empty();

  pagesHierarchy.map((page, index) => {
    const isLastPage = index === pagesHierarchy.length - 1;

    if (isLastPage) {
      return $('.breadcrumb').append(
        `<li id="${index}" ><a href="${page.url}" aria-current="page">${page.title}</a></li>`
      );
    } else {
      return $('.breadcrumb').append(
        `<li id="${index}">
          <a href="${page.url}">
            ${page.title} 
          </a>
        </li>`
      );
    }
  });
}

// Update Copyright Year ---------------------------------
function updateCopyrightYear() {
  let copyrightYear = document.querySelectorAll('.copyright__year');

  copyrightYear.forEach((element) => {
    element.innerHTML = new Date().getFullYear();
  });
}

function backToTopHandler() {
  $('.btn--back-to-top').on('click', () => {
    $(window).scrollTop(0);
  });
}

// Setup footer link events for desktop or mobile mode
function footerDrawer(isDesktop) {
  const footerLinksArray = $('.footer__links');

  if (isDesktop) {
    footerLinksArray.each(function () {
      $(this).off('click');
      // Remove display property set by jQuery's .toggle() function
      $(this).children('.footer__links-drawer').css('display', '');
    });
  } else {
    footerLinksArray.each(function () {
      // Check for default open drawers
      if ($(this).hasClass('open')) {
        $(this).children('.footer__links-drawer').show();
      }

      $(this).on('click', () => {
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
          $(this).children('.footer__links-drawer').slideDown(400);
        } else {
          $(this).children('.footer__links-drawer').slideUp(400);
        }
      });
    });
  }
}

// Setup media query for the footer's desktop or mobile mode
function footerMediaQueryInit() {
  // Get breakpoint value from root css custom property
  const mdBreakpoint = $(':root').css('--bs-breakpoint-lg');
  // Create media query
  const footerMediaQuery = window.matchMedia(`(min-width: ${mdBreakpoint})`);

  // Add event listener for when that media query is matching or not
  footerMediaQuery.addEventListener('change', (e) => {
    footerDrawer(e.matches);
  });

  // Execute the handler once for intialization
  footerDrawer(footerMediaQuery.matches);
}

/**
 * Initializes the footer's events and handlers.
 *
 * @returns {void}
 */
export function init() {
  updateCopyrightYear();
  backToTopHandler();
  footerMediaQueryInit();
}
