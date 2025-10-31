import * as header from './header.js';
import * as footer from './footer.js';
import './form.js';
import './accessibility.js';
import './videos.js';
import { handleModal } from './modal.js';
import hljs from 'highlight.js/lib/common';

// Exports ---------------------
export const sitemapHandler = footer.resolvePageHierarchy;
export const breadcrumbHandler = footer.renderBreadcrumbs;
export const headerDesktopQuery = header.headerDesktopQuery;

// Event Handlers ---------------------
const onReadyHandler = () => {
  header.init();
  footer.init();
  handleModal();
  hljs.highlightAll();
};
const resizeHandler = () => {};
const loadHandler = () => {};

// Assign handlers --------------------
$(onReadyHandler);
$(window).on('load', loadHandler);
$(window).on('resize', resizeHandler);
