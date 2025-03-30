import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Check if user has a theme preference in localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.darkMode.next(savedTheme === 'dark');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.darkMode.next(prefersDark);
      }
    }
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const currentTheme = this.darkMode.value;
      this.darkMode.next(!currentTheme);
      localStorage.setItem('theme', !currentTheme ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  getDarkMode() {
    return this.darkMode.asObservable();
  }
} 