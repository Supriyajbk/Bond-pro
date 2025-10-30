class Formidable {
  constructor() {
    throw new Error('Form data is not found');
  }
  error() {}
}
export const formidable = new Formidable();
