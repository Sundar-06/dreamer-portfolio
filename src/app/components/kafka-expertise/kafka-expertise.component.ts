import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kafka-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Kafka & Event-Driven Architecture
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Expertise in building scalable, event-driven systems using Apache Kafka and modern architectural patterns.
          </p>
        </div>

        <!-- Key Areas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-indigo-600 dark:text-indigo-400 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Event Streaming</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Design and implementation of real-time event streaming solutions using Apache Kafka for high-throughput data pipelines.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-indigo-600 dark:text-indigo-400 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Brokering</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Implementation of reliable message delivery patterns, ensuring data consistency and fault tolerance.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div class="text-indigo-600 dark:text-indigo-400 mb-4">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Distributed Systems</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Building resilient distributed systems with event sourcing and CQRS patterns.
            </p>
          </div>
        </div>

        <!-- Event Flow Visualization -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-16">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Event-Driven Workflow
          </h2>
          <div class="relative">
            <!-- Event flow diagram -->
            <div class="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              <div class="flex-1 text-center">
                <div class="w-24 h-24 mx-auto bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                  <svg class="w-12 h-12 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Event Production</h3>
              </div>

              <div class="flex-1 text-center">
                <div class="w-24 h-24 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <svg class="w-12 h-12 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Event Processing</h3>
              </div>

              <div class="flex-1 text-center">
                <div class="w-24 h-24 mx-auto bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
                  <svg class="w-12 h-12 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Event Consumption</h3>
              </div>
            </div>

            <!-- Connecting lines -->
            <div class="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2"></div>
          </div>
        </div>

        <!-- Additional Expertise -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Apache Kafka</li>
              <li>• Event Sourcing</li>
              <li>• CQRS Pattern</li>
              <li>• Distributed Systems</li>
              <li>• Message Brokering</li>
              <li>• Real-time Processing</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h3>
            <ul class="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Designed and implemented high-throughput event streaming systems</li>
              <li>• Optimized message delivery patterns for better performance</li>
              <li>• Built resilient distributed systems with fault tolerance</li>
              <li>• Implemented real-time data processing pipelines</li>
              <li>• Developed event-driven microservices architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class KafkaExpertiseComponent {} 