import { sitemapHandler, breadcrumbHandler } from '../../scripts/core';
import { demoPages } from './sitemap';

// Event Handlers ---------------------
const onReadyHandler = () => {
  sitemapHandler(location.pathname, demoPages);
  breadcrumbHandler();
};

const loadHandler = () => {};

// Assign handlers --------------------
$(document).ready(onReadyHandler);
// $(window).on('load', loadHandler);
