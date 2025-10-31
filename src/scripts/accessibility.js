// Adds sr-only class to links that open in a new tab/window
$('a[target="_blank"]').each(function () {
  if ($(this).children('.sr-only').length < 1) {
    $(this).append("<span class='sr-only'>(opens in a new tab/window)</span>");
  }
});