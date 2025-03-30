import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Full Stack Developer specializing in Angular and .NET
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- About Content -->
          <div class="space-y-6">
            <p class="text-gray-600 dark:text-gray-400">
              I am a passionate Full Stack Developer with expertise in building modern web applications using Angular and .NET. My experience spans across various technologies and domains, allowing me to create robust and scalable solutions.
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              With a strong foundation in both frontend and backend development, I specialize in:
            </p>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Angular and .NET development for enterprise applications</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">Shopify theme development and customization</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">SQL Azure and database optimization</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">RESTful API development and integration</span>
              </li>
              <li class="flex items-start">
                <svg class="h-6 w-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-gray-600 dark:text-gray-400">SEO optimization and performance tuning</span>
              </li>
            </ul>
          </div>

          <!-- Experience Timeline -->
          <div class="space-y-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            <div class="space-y-6">
              <div class="relative pl-8 border-l-2 border-indigo-500">
                <div class="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <div class="mb-4">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer</h4>
                  <p class="text-gray-600 dark:text-gray-400">HopsConnect</p>
                  <p class="text-sm text-gray-500">2020 - Present</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400">
                  Led the development of a full-stack application using Angular and .NET, implementing modern features and optimizing performance.
                </p>
              </div>

              <div class="relative pl-8 border-l-2 border-indigo-500">
                <div class="absolute -left-2 top-0 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <div class="mb-4">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Shopify Developer</h4>
                  <p class="text-gray-600 dark:text-gray-400">E-commerce Projects</p>
                  <p class="text-sm text-gray-500">2018 - 2020</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400">
                  Developed and customized Shopify themes, implementing A/B testing and optimizing conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}
