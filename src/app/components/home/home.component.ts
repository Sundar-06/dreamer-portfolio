import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <!-- Animated background -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 dark:opacity-20"></div>
      <div class="absolute inset-0">
        <div class="relative h-full w-full">
          <svg class="absolute animate-blob opacity-70 top-0 -left-4 w-72 h-72 fill-current text-purple-300 dark:text-purple-800" viewBox="0 0 200 200">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,44.7,77.4C31.8,84.2,15.9,84.4,0.4,83.7C-15,83,-30,81.5,-43.7,74.9C-57.4,68.3,-69.7,56.6,-77.4,42.4C-85.1,28.2,-88.1,14.1,-87.3,0.5C-86.5,-13.2,-81.8,-26.3,-74.7,-38.1C-67.6,-49.9,-58,-60.3,-45.8,-68.4C-33.6,-76.5,-16.8,-82.3,-0.2,-82C16.4,-81.7,32.7,-75.3,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <svg class="absolute animate-blob animation-delay-2000 opacity-70 top-0 -right-4 w-72 h-72 fill-current text-indigo-300 dark:text-indigo-800" viewBox="0 0 200 200">
            <path d="M45.3,-78.6C58.9,-71.3,70.3,-59.5,77.9,-45.3C85.5,-31,89.4,-15.5,88.6,-0.5C87.8,14.6,82.3,29.2,74.1,42.1C65.9,55,55,66.2,41.6,74.3C28.2,82.4,14.1,87.4,-0.6,88.4C-15.2,89.4,-30.5,86.3,-44.3,79.1C-58.1,71.9,-70.5,60.6,-79.4,46.4C-88.4,32.2,-93.9,16.1,-92.5,0.8C-91.1,-14.5,-82.8,-29,-73.1,-41.8C-63.5,-54.6,-52.4,-65.8,-39.4,-73.4C-26.3,-81,-13.2,-85,1.8,-87.9C16.7,-90.8,33.5,-92.6,45.3,-78.6Z" transform="translate(100 100)" />
          </svg>
          <svg class="absolute animate-blob animation-delay-4000 opacity-70 bottom-0 left-20 w-72 h-72 fill-current text-pink-300 dark:text-pink-800" viewBox="0 0 200 200">
            <path d="M42.7,-73.4C56.8,-67.3,70.8,-58.5,79.1,-45.6C87.4,-32.7,90,-16.3,89.3,-0.4C88.6,15.5,84.7,31,77.3,44.9C69.9,58.8,59,71.1,45,78.3C31,85.5,15.5,87.7,0.2,87.4C-15.1,87.1,-30.2,84.3,-44.2,77.4C-58.2,70.5,-71.1,59.4,-79.3,45.2C-87.5,31,-91,15.5,-90.1,0.5C-89.2,-14.5,-83.9,-29,-76.1,-42.3C-68.3,-55.7,-58,-67.8,-44.6,-74.2C-31.2,-80.5,-15.6,-81,0.3,-81.6C16.2,-82.1,32.5,-82.6,42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <span class="block text-gray-900 dark:text-white mb-4">Hi, I'm Sundara Perumal</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Full Stack Developer
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Specializing in Angular, .NET, Kafka, and Event-Driven Architecture. Building scalable, performant applications with modern technologies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              routerLink="/projects"
              class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              View My Work
              <svg class="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              routerLink="/contact"
              class="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          <!-- Social Links -->
          <div class="mt-20">
            <p class="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">Connect with me</p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center opacity-75">
              <a href="https://github.com/sundaraperumal" target="_blank" rel="noopener noreferrer" 
                 class="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                 title="GitHub Profile">
                <svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sundaraperumal" target="_blank" rel="noopener noreferrer"
                 class="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                 title="LinkedIn Profile">
                <svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.06-1.601-1-1.601-1 0-1.16.781-1.16 1.601v5.604h-2v-11h3v1.765c.517-.8 1.683-1.02 2.653-1.02 1.532 0 3.136.867 3.136 3.727v6.528z"/>
                </svg>
              </a>
              <a href="https://www.hackerrank.com/sundaraperumal" target="_blank" rel="noopener noreferrer"
                 class="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                 title="HackerRank Profile">
                <svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.492 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="https://stackoverflow.com/users/sundaraperumal" target="_blank" rel="noopener noreferrer"
                 class="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                 title="Stack Overflow Profile">
                <svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.986 21.865v-6.432h2.134V24H1.844v-8.567h2.13v6.432h15.012zM6.111 19.11h11.95v-2.137H6.111v2.137zm0-4.275h11.95v-2.137H6.111v2.137zm0-4.274h11.95V8.426H6.111v2.135zM24 14.588l-7.853 1.676v-2.155l5.343-1.138V4.858l-5.343 1.138V3.72L24 4.858v9.73z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Tech stack preview -->
        <div class="mt-20">
          <p class="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">Technologies I work with</p>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center opacity-75">
            <img src="assets/icons/angular.svg" alt="Angular" class="h-12 w-12" />
            <img src="assets/icons/dotnet.svg" alt=".NET" class="h-12 w-12" />
            <img src="assets/icons/kafka.svg" alt="Kafka" class="h-12 w-12" />
            <img src="assets/icons/azure.svg" alt="Azure" class="h-12 w-12" />
            <img src="assets/icons/typescript.svg" alt="TypeScript" class="h-12 w-12" />
            <img src="assets/icons/shopify.svg" alt="Shopify" class="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-blob {
      animation: blob 7s infinite;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    @keyframes blob {
      0% {
        transform: translate(0px, 0px) scale(1);
      }
      33% {
        transform: translate(30px, -50px) scale(1.1);
      }
      66% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(1);
      }
    }
  `],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Initialize any data if needed
  }

  ngAfterViewInit() {
    // Animate elements using GSAP
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from(this.el.nativeElement.querySelector('h1'), {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2
    })
    .from(this.el.nativeElement.querySelector('p'), {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')
    .from(this.el.nativeElement.querySelectorAll('a'), {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    }, '-=0.3')
    .from(this.el.nativeElement.querySelector('.grid'), {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.2');
  }
} 