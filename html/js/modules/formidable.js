class Formidable {
  constructor(selector) {
    this.eles = document.querySelectorAll(selector);
  }
  init() {
    if (this.eles.length === 0) return;
    console.log('test form');
    function errorHide(e) {
      let errorDiv = e.target
        .closest('.frm_blank_field')
        .querySelector('.frm_error');
      if (!errorDiv) return;
      let value = e.target.value;
      value.length > 0
        ? (errorDiv.style.opacity = '0')
        : (errorDiv.style.opacity = '1');
    }
    this.eles.forEach((input) => {
      if (input.value.trim().length > 0) {
        let errorDiv = input
          .closest('.frm_blank_field')
          ?.querySelector('.frm_error');
        if (errorDiv) {
          errorDiv.style.opacity = '0';
        }
      }

      input.addEventListener('input', errorHide);
    });
  }
}
export const formidable = new Formidable(
  '.frm_forms .frm_form_fields .frm_form_field input, .frm_forms .frm_form_fields .frm_form_field textarea'
);
