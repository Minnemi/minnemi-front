export const formErrors = {
  required: () => 'errors.forms.requiredField',
  minLength: (name) => `errors.forms.${name}.length.min`,
  maxLength: (name) => `errors.forms.${name}.length.max`,
  pattern: (name) => `errors.forms.${name}.pattern`,
  equals: (name) => `errors.forms.${name}.equals`,
};
