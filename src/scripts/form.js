$(".form__field").bind("focus change blur", function (e) {
  $(this).parent("div").addClass("form__field-wrapper--active");
});
$(".form__field").bind("change blur", function (e) {
  if (!$(this).val()) {
    $(this).parent("div").removeClass("form__field-wrapper--active");
  }
});

export const hubspotForms = {
  init: function () {
    document
      .querySelectorAll(".hs-form input, .hs-form select, .hs-form textarea")
      .forEach((field) => {
        if (field.value.length > 0) {
          field.parentElement.classList.add("npt");
        }
      });

    $(".hs-form input, .hs-form select, .hs-form textarea").bind(
      "focus change blur",
      function (e) {
        // Add npt if user selects an option with a value
        if ($(this).val() && e.type == "change") {
          $(this).parent("div").addClass("npt");
        }
        // Add npt if user puts fucus on a field
        if (!$(this).val() && e.type == "focus") {
          $(this).parent("div").addClass("npt");
        }
        // Remove npt when there is no value after change or blur events
        if (!$(this).val() && e.type != "focus") {
          $(this).parent("div").removeClass("npt");
        }
      }
    );

    // Remove disabled option text so it doesn't overlap with the label
    $(".hs-form option:disabled").each((i, option) => {
      option.innerHTML = "";
    });
  },
};

window.hubspotForms = hubspotForms;
