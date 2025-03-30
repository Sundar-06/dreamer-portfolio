import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, ThemeToggleComponent],
  template: `
    <nav [class.scrolled]="isScrolled" class="fixed w-full z-50 transition-all duration-300 ease-in-out">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a routerLink="/" class="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              SP
            </a>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <div class="flex items-baseline space-x-4">
              <a *ngFor="let item of navItems"
                 [routerLink]="item.route"
                 routerLinkActive="text-indigo-500 dark:text-indigo-400"
                 class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200">
                {{ item.label }}
              </a>
            </div>
          </div>

          <!-- Theme Toggle -->
          <app-theme-toggle></app-theme-toggle>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none">
              <svg class="h-6 w-6" [class.hidden]="isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg class="h-6 w-6" [class.hidden]="!isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a *ngFor="let item of navItems"
               [routerLink]="item.route"
               routerLinkActive="text-indigo-500 dark:text-indigo-400"
               class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
               (click)="toggleMobileMenu()">
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.8);
    }
    
    nav.scrolled {
      @apply shadow-lg;
      background-color: rgba(255, 255, 255, 0.95);
    }
    
    :host-context(.dark) nav {
      background-color: rgba(17, 24, 39, 0.8);
    }
    
    :host-context(.dark) nav.scrolled {
      background-color: rgba(17, 24, 39, 0.95);
    }
  `],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class NavComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Experience', route: '/experience' },
    { label: 'Projects', route: '/projects' },
    { label: 'Kafka', route: '/kafka' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
} 