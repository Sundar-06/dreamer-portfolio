import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  template: `
    <div class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Let's discuss your next project
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  [class.border-red-500]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                />
                <div *ngIf="contactForm.get('name')?.invalid && contactForm.get('name')?.touched" class="text-red-500 text-sm mt-1">
                  Name is required
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  [class.border-red-500]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                />
                <div *ngIf="contactForm.get('email')?.invalid && contactForm.get('email')?.touched" class="text-red-500 text-sm mt-1">
                  Please enter a valid email address
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  formControlName="message"
                  rows="4"
                  class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  [class.border-red-500]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                ></textarea>
                <div *ngIf="contactForm.get('message')?.invalid && contactForm.get('message')?.touched" class="text-red-500 text-sm mt-1">
                  Message is required
                </div>
              </div>

              <button
                type="submit"
                [disabled]="contactForm.invalid"
                class="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-gray-600 dark:text-gray-400">
                    Email: sundaraperumal132&#64;gmail.com
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-gray-600 dark:text-gray-400">
                    Location: Chennai, India
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-gray-600 dark:text-gray-400">
                    Phone: +91 (XXX) XXX-XXXX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log(this.contactForm.value);
      // Reset form
      this.contactForm.reset();
    }
  }
}
