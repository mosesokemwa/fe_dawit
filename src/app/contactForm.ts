export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  privacyPolicy: boolean;

  // optional
  phoneNumber?: string;
  subscribe?: boolean;
  company?: string;
}
