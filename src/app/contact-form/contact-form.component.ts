import { Component, inject } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApiService } from '@/app/api.service'
import { ContactForm } from '@/app/contactForm';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatCheckboxModule,
  ]
})
export class ContactFormComponent {
  title = 'Contact us';
  color: ThemePalette = 'accent';
  subscribeChecked = true;
  privacyPolicyChecked = false;
  privacyTooltipValue = 'Your data is safe with us';
  formServerResponse: any;
  submitting = false;

  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: '',
    message: ['', Validators.required],
    phoneNumber: '',
    subscribe: [this.subscribeChecked, Validators.required],
    privacyPolicy: [this.privacyPolicyChecked, Validators.required],
  });


  onSubmit(): void {
    const { value: formValue } = this.contactForm;
    if (!formValue.privacyPolicy) {
      this.contactForm.get('privacyPolicy')?.setErrors({ required: true });
      return;
    }
    if (this.contactForm.invalid) {
      return;
    }
    console.log('Form submitted:', formValue);

    this.submitting = true;
    this.formServerResponse = 'Sending message...';
    this.openSnackBar();
    this.apiService.postContactForm(formValue as Partial<ContactForm>).subscribe({
      next: (response) => {
        console.log('Form response:', response);
        this.formServerResponse = 'Thanks for your message!';
        this.openSnackBar();
      },
      error: (error) => {
        console.error('Form error:', error);
        this.formServerResponse = 'An error occurred. Please try again later.';
        this.openSnackBar();

      },
      complete: () => {
        console.log('Form submission completed');
        this.openSnackBar();

        setTimeout(() => {
          this.onReset();
        }, 2000);
      }
    });
  }

  openSnackBar(message: string = this.formServerResponse) {
    this._snackBar.open(this.formServerResponse, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-primary']
    })

  }

  onReset(): void {
    this.contactForm.reset();
  }

  onSubscribeChange(): void {
    this.subscribeChecked = !this.subscribeChecked;
    console.log('Subscribe checked:', this.subscribeChecked);
  }

}
