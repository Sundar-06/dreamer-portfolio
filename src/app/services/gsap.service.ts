import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  private gsapLoaded = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async initScrollAnimations() {
    if (isPlatformBrowser(this.platformId) && !this.gsapLoaded) {
      try {
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
        
        gsap.registerPlugin(ScrollTrigger);
        this.gsapLoaded = true;

        // Add any scroll-based animations here
        gsap.from('.fade-in', {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.fade-in',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      } catch (error) {
        console.error('Failed to load GSAP:', error);
      }
    }
  }
} 