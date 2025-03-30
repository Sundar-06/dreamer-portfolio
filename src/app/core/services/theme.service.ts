import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'user-theme';
  
  setTheme(theme: string) {
    localStorage.setItem(this.themeKey, theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }

  getTheme(): string {
    return localStorage.getItem(this.themeKey) || 'light';
  }
}
