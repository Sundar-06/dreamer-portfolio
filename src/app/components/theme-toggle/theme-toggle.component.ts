import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="relative inline-flex items-center justify-center w-12 h-12 rounded-full text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none transition-colors duration-200"
      [attr.aria-label]="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <!-- Sun icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute transform transition-transform duration-500"
        [class.translate-y-full]="isDarkMode"
        [class.opacity-0]="isDarkMode"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      <!-- Moon icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute transform transition-transform duration-500"
        [class.-translate-y-full]="!isDarkMode"
        [class.opacity-0]="!isDarkMode"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = localStorage.getItem('theme') === 'dark' || 
                        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      this.applyTheme();
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    }
  }
} 