import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            A selection of my recent work
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- HopsConnect -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/projects/placeholder.svg"
                alt="HopsConnect"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                HopsConnect
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                A full-stack application for managing brewery operations, built with Angular and .NET.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Angular
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  .NET
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  SQL Server
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="https://github.com/yourusername/hopsconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  View Code
                </a>
                <a
                  href="https://hopsconnect.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <!-- SEO Optimization -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/projects/placeholder.svg"
                alt="SEO Optimization"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                SEO Optimization
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Implemented comprehensive SEO strategies and optimizations for multiple e-commerce websites.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  SEO
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Analytics
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Content Strategy
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>

          <!-- Shopify A/B Testing -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/projects/placeholder.svg"
                alt="Shopify A/B Testing"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Shopify A/B Testing
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Developed and implemented A/B testing framework for e-commerce optimization.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Shopify
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  A/B Testing
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Conversion
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  View Results
                </a>
              </div>
            </div>
          </div>

          <!-- Tax Exempt Form -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/projects/placeholder.svg"
                alt="Tax Exempt Form"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Tax Exempt Form
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Created a streamlined tax exemption form system with automated validation and processing.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Angular
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  .NET
                </span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Azure
                </span>
              </div>
              <div class="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {}
