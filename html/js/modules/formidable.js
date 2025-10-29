class Formidable {
  constructor() {}
  error() {
    document
      .querySelectorAll(
        '.frm_form_field.vertical_radio input[type="radio"], .frm_form_field.vertical_radio input[type="checkbox"]'
      )
      .forEach(function (input) {
        input.addEventListener('change', function () {
          document
            .querySelectorAll(
              '.frm_form_field.vertical_radio input[type="radio"], .frm_form_field.vertical_radio input[type="checkbox"]'
            )
            .forEach(function (r) {
              var label = r.parentElement;
              label.style.color = '';
            });

          const label = this.parentElement;
          if (this.checked) {
            label.style.color = '#FFF';
          }
        });
      });
  }
}
export const formidable = new Formidable();
