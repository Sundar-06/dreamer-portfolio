import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and achievements
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <!-- Experience Items -->
          <div class="space-y-12">
            <div
              *ngFor="let exp of experiences; let i = index"
              class="relative"
              [@fadeIn]
              [@fadeInDelay]="i * 200"
            >
              <!-- Timeline Dot -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full"
              ></div>

              <!-- Content -->
              <div
                class="ml-0 md:ml-1/2 pl-8 md:pl-12"
                [class.md:ml-0]="i % 2 === 0"
                [class.md:pl-0]="i % 2 === 0"
                [class.md:pr-12]="i % 2 === 0"
              >
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                        {{ exp.position }}
                      </h3>
                      <p class="text-indigo-600 dark:text-indigo-400">
                        {{ exp.company }}
                      </p>
                    </div>
                    <div class="mt-2 md:mt-0">
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ exp.period }}
                      </p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">
                        {{ exp.location }}
                      </p>
                    </div>
                  </div>

                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ exp.description }}
                  </p>

                  <div class="mb-4">
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul class="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li *ngFor="let achievement of exp.achievements">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span
                      *ngFor="let tech of exp.technologies"
                      class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="mt-20">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              [@fadeInLeft]
            >
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <p class="text-indigo-600 dark:text-indigo-400 mb-2">
                University Name
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                2018 - 2022
              </p>
            </div>
            <div
              class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              [@fadeInRight]
            >
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Master of Science in Software Engineering
              </h4>
              <p class="text-indigo-600 dark:text-indigo-400 mb-2">
                University Name
              </p>
              <p class="text-gray-500 dark:text-gray-400">
                2022 - 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInDelay', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [
    {
      id: 1,
      company: 'Tech Company Inc.',
      position: 'Senior Full Stack Developer',
      period: 'January 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading the development of enterprise-level web applications and mentoring junior developers.',
      achievements: [
        'Led a team of 5 developers in successfully delivering a major client project ahead of schedule',
        'Implemented new CI/CD pipeline reducing deployment time by 40%',
        'Architected and developed a scalable microservices architecture'
      ],
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'AWS']
    },
    {
      id: 2,
      company: 'StartupX',
      position: 'Full Stack Developer',
      period: 'June 2021 - December 2022',
      location: 'Remote',
      description: 'Developed and maintained multiple client-facing web applications using modern technologies.',
      achievements: [
        'Built a responsive e-commerce platform serving 10,000+ daily users',
        'Optimized application performance resulting in 50% faster load times',
        'Implemented automated testing increasing code coverage to 85%'
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'Redis', 'Jest']
    },
    {
      id: 3,
      company: 'Digital Agency',
      position: 'Frontend Developer',
      period: 'January 2020 - May 2021',
      location: 'New York, NY',
      description: 'Created responsive and interactive user interfaces for various client projects.',
      achievements: [
        'Developed 10+ responsive websites for clients across different industries',
        'Implemented accessibility features meeting WCAG 2.1 standards',
        'Created reusable component library reducing development time by 30%'
      ],
      technologies: ['Vue.js', 'SCSS', 'Webpack', 'Jest', 'Storybook']
    }
  ];

  constructor() {}

  ngOnInit(): void {}
} 