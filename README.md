# Angular Form with Validation

This project showcases a simple Angular contact form with validation. The form has the following fields:

Required fields:
- Name(first and last name)
- Email
- Message
- Privacy Policy checkbox

Optional fields:
- Phone Number
- Subscribe to newsletter

The form has the following validation rules:
- Name: Required, minimum length of 3 characters
- Email: Required, valid email format
- Message: Required, minimum length of 10 characters
- Privacy Policy: Required
- Phone Number: Optional, valid phone number format
- Subscribe to newsletter: Optional, default is true


## Setup Instructions
1. Clone the repository `git clone https://github.com/mosesokemwa/fe_dawit.git`
2. Run `npm install` to install the dependencies
3. Run `ng serve` to start the application on `http://localhost:4200/`

## Technologies Used
- Angular 11
- Angular Material
- Angular Flex Layout
- Angular Reactive Forms
- Angular Animations


## Future Enhancements
- Use X-SRF-TOKEN for CSRF protection
- Dockerize the application
- Add smart tests
- Add to and simplify documentation

