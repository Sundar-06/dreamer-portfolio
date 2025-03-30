import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Insights and updates from my development journey
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Post 1 -->
          <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/blog/placeholder.svg"
                alt="Angular Performance Optimization"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>March 15, 2024</span>
                <span class="mx-2">•</span>
                <span>Angular</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Optimizing Angular Applications for Better Performance
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Learn about the best practices and techniques for improving the performance of your Angular applications.
              </p>
              <a
                href="#"
                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium"
              >
                Read More →
              </a>
            </div>
          </article>

          <!-- Blog Post 2 -->
          <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/blog/placeholder.svg"
                alt="Shopify A/B Testing"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>March 10, 2024</span>
                <span class="mx-2">•</span>
                <span>Shopify</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Implementing A/B Testing in Shopify: A Case Study
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Discover how we improved conversion rates through strategic A/B testing on a Shopify store.
              </p>
              <a
                href="#"
                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium"
              >
                Read More →
              </a>
            </div>
          </article>

          <!-- Blog Post 3 -->
          <article class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <img
                src="assets/blog/placeholder.svg"
                alt="SEO Optimization"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-gray-500 mb-4">
                <span>March 5, 2024</span>
                <span class="mx-2">•</span>
                <span>SEO</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                SEO Best Practices for E-commerce Websites
              </h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">
                Essential SEO strategies to improve visibility and drive organic traffic to your e-commerce site.
              </p>
              <a
                href="#"
                class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 font-medium"
              >
                Read More →
              </a>
            </div>
          </article>
        </div>

        <!-- Newsletter Signup -->
        <div class="mt-16 bg-indigo-50 dark:bg-indigo-900 rounded-lg p-8">
          <div class="max-w-2xl mx-auto text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to my newsletter for the latest insights and updates.
            </p>
            <form class="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <button
                type="submit"
                class="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BlogComponent {} 