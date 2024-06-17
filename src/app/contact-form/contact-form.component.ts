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
import { MatTooltipModule } from '@angular/material/tooltip'
import {CdkScrollable} from '@angular/cdk/scrolling';

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
    CdkScrollable,
  ]
})
export class ContactFormComponent {
  title = 'Reach out to us';
  color: ThemePalette = 'accent';
  subscribeChecked = false;
  privacyPolicyChecked = false;
  progressBarValue = 0;
  privacyTooltipValue = 'Your data is safe with us';



  private fb = inject(FormBuilder);
  contactForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    company: null,
    message: [null, Validators.required],
    phoneNumber: null,
    subscribe: [this.subscribeChecked, Validators.required],
    privacyPolicy: [this.privacyPolicyChecked, Validators.required],
  });



  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  onReset(): void {
    this.contactForm.reset();
  }

  onSubscribeChange(): void {
    this.subscribeChecked = !this.subscribeChecked;
  }

}
