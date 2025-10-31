// HoverIntent - plain vanilla JS version based on the jQuery plugin:
// Used for better mouse hover detection and to keep the same feel from Core 1.x.
import hoverIntent from 'hoverintent';

/**
 * Initializes the header's events and handlers.
 *
 * @returns {void}
 * @example
 */
export function init() {
  // Set mobile drawer height handler
  initMobileDrawerSizeHandler();

  // Set mobile nav item click handlers
  initMobileNavItemHandlers();

  // Set mobile nav button interactions
  initMobileDrawerButtonHandler();

  // Set header nav hover events
  initDesktopHoverHandlers();

  // Set header scroll observer for sticky header glass effect
  headerScrollObserver();

  // Set drawer close on resize
  setDrawerCloseOnResize();
}

/**
 * Extends the drawer's height to match the size of the page and also make
 * the drawer scroll with the content. This will only be set up if the header
 * is not sticky and only executes when the drawer is transitioning (opening).
 */
function initMobileDrawerSizeHandler() {
  if ($('.header').hasClass('header--sticky')) {
    return;
  }

  // Elements to resize
  const mobileDrawer = $('.mobile-drawer');
  const bodyHitbox = $('.body-hitbox');

  // Start of the drawer's transition (when it starts opening or closing)
  mobileDrawer.on('transitionstart', () => {
    if ($('body').hasClass('open')) {
      // Drawer starts opening
      mobileDrawer.css('height', $('body').css('height'));
      bodyHitbox.css('height', $('body').css('height'));
    } else {
      // Drawer starts closing
      mobileDrawer.css('position', '');
    }
  });

  // End of the drawer's transition (when it finishes opening or closing)
  mobileDrawer.on('transitionend', () => {
    if (!$('body').hasClass('open')) {
      // Drawer finished closing
      mobileDrawer.css('height', 'unset');
      bodyHitbox.css('height', 'unset');
    } else {
      // Drawer finished opening
      mobileDrawer.css('position', 'absolute');
    }
  });
}

/**
 * Sets the mobile drawer button event and behavior.
 */
function initMobileDrawerButtonHandler() {
  // Get element references
  const drawerButton = $('.header__nav-button');
  const bodyElement = $('body');
  const bodyHitbox = $('.body-hitbox');

  // Click handler function
  function clickHandler(e) {
    bodyElement.toggleClass('open');

    if (drawerButton.hasClass('open')) {
      drawerButton.removeClass('open');

      // Close any open nav items
      collapseNavItems();
    } else {
      drawerButton.addClass('open');
    }
  }

  // Set click event for menu button and body hitbox
  drawerButton.on('click', clickHandler);
  bodyHitbox.on('click', clickHandler);
}

/**
 * Sets the mobile nav item click events and behavior.
 */
function initMobileNavItemHandlers() {
  // Add click event to all main nav items
  $('.mobile-nav-item:has(.dropdown-wrapper)').on('click', (e) => {
    // Get submenu list references
    const targetNav = $(e.target).parent('.mobile-nav-item');
    const allNavs = $('.mobile-nav-item');

    if (targetNav.hasClass('open')) {
      targetNav.removeClass('open');
      targetNav.children('.dropdown-wrapper').slideUp(400);
    } else {
      allNavs.removeClass('open').children('.dropdown-wrapper').slideUp(400);
      targetNav.addClass('open').children('.dropdown-wrapper').slideDown(400);
    }
  });

  // Close drawer on submenu item link click
  $('.mobile-submenu-item__link').each((index, link) => {
    // Get nav button reference
    const drawerButton = $('.header__nav-button');

    $(link).on('click', () => {
      drawerButton.trigger('click');
    });
  });
}

/**
 * Closes and collapses all the nav items in mobile mode.
 */
function collapseNavItems() {
  // Remove open class from submenus and collapse
  $('.mobile-nav-item').each((index, navItem) => {
    $(navItem).removeClass('open').children('.dropdown-wrapper').slideUp(400);
  });
}

/**
 * Sets each header nav item that contains a list to dropdown its
 * menu with jQuery's slideDown animation using hoverIntent plugin.
 */
function initDesktopHoverHandlers() {
  $('.header-nav-item').each(function () {
    if ($(this).children('.dropdown-wrapper').length) {
      hoverIntent(
        $(this).get(0),
        // Mouse enter event
        function () {
          // Get menu width, window width, and menu offset (measurement from
          // the left edge of the window to the left edge of the menu).
          const menuWidth = $(this).children('.dropdown-wrapper').width();
          const windowWidth = $(window).width();
          const menuOffset = $(this).offset().left;

          // Check if dropdown menu is overflowing the window and add a class
          // to anchor the menu to the right side of the nav item.
          if (menuWidth + menuOffset > windowWidth) {
            $(this).children('.dropdown-wrapper').addClass('lefty');
          }

          $(this).children('.dropdown-wrapper').slideDown(200);
        },
        // Mouse leave event
        function () {
          $(this).children('.dropdown-wrapper').slideUp(200);
        }
      );
    }
  });
}

/**
 * Initializes the header's observer to detect when the header is scrolled
 * and applies the class 'scrolled' for the glass effect.
 */
function headerScrollObserver() {
  if (!$('.header').hasClass('header--sticky')) {
    return;
  }

  $('body').prepend('<div id="header-scroll-detector"></div>');

  function observerCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $('.header').removeClass('scrolled');
      } else {
        $('.header').addClass('scrolled');
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback);
  observer.observe(document.getElementById('header-scroll-detector'));
}

/**
 * Sets the drawer to close when the window is resized to a different breakpoint.
 */
function setDrawerCloseOnResize() {
  // Get element references
  const bodyElement = $('body');
  const drawerButton = $('.header__nav-button');
  const screenSizes = ['sm', 'md', 'lg', 'xl', 'xxl'];

  // Get breakpoint values from root from screenSizes array
  const breakpoints = screenSizes.map((size) => {
    return getComputedStyle(document.documentElement).getPropertyValue(
      `--bs-breakpoint-${size}`
    );
  });

  // Create media query list for each breakpoint
  const mediaQueries = breakpoints.map((breakpoint) => {
    return window.matchMedia(`(max-width: ${breakpoint})`);
  });

  // Add event listener to each media query
  mediaQueries.forEach((mediaQuery) => {
    mediaQuery.addEventListener('change', () => {
      // Close drawer if ANY media query detects a change and the drawer is open
      if (bodyElement.hasClass('open')) {
        bodyElement.removeClass('open');
        drawerButton.removeClass('open');
        collapseNavItems();
      }
    });
  });
}
