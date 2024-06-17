export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;


  // optional
  phoneNumber?: string;
  subscribe?: boolean;
}
