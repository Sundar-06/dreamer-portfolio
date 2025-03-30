import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { GsapService } from './services/gsap.service';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <main class="min-h-screen pt-16">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class AppComponent implements OnInit {
  constructor(
    private gsapService: GsapService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Handle GitHub Pages routing
      const path = window.location.pathname;
      if (path !== '/portfolio/' && !path.endsWith('.html')) {
        const newPath = '/portfolio' + path;
        window.history.replaceState({}, '', newPath);
      }

      // Subscribe to router events to handle navigation
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        // Initialize GSAP animations after navigation
        this.gsapService.initScrollAnimations();
      });
      
      // Initial GSAP animations
      await this.gsapService.initScrollAnimations();
    }
  }
}
