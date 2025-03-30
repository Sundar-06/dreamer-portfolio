import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { GsapService } from './services/gsap.service';
import { isPlatformBrowser } from '@angular/common';

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
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Handle GitHub Pages routing
      const path = window.location.pathname;
      if (path !== '/portfolio/' && !path.endsWith('.html')) {
        window.history.replaceState({}, '', '/portfolio' + path);
      }
      
      // Initialize GSAP animations
      await this.gsapService.initScrollAnimations();
    }
  }
}
