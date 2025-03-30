import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            My technical skills and areas of expertise
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend Development -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" [@fadeInUp]>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h3>
            <div class="space-y-4">
              <div *ngFor="let skill of frontendSkills">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-indigo-600 h-2 rounded-full"
                    [style.width.%]="skill.level"
                    [@progressBar]="skill.level"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend Development -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" [@fadeInUp]>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h3>
            <div class="space-y-4">
              <div *ngFor="let skill of backendSkills">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-indigo-600 h-2 rounded-full"
                    [style.width.%]="skill.level"
                    [@progressBar]="skill.level"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6" [@fadeInUp]>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tools & Others
            </h3>
            <div class="space-y-4">
              <div *ngFor="let skill of otherSkills">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    class="bg-indigo-600 h-2 rounded-full"
                    [style.width.%]="skill.level"
                    [@progressBar]="skill.level"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Skills -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Skills
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              *ngFor="let skill of additionalSkills"
              class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center"
              [@fadeInUp]
            >
              <img [src]="'assets/icons/' + skill.icon" [alt]="skill.name" class="w-12 h-12 mx-auto mb-2">
              <div class="text-gray-700 dark:text-gray-300">{{ skill.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('progressBar', [
      transition(':enter', [
        style({ width: '0%' }),
        animate('1s ease-out', style({ width: '*' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'HTML5 & CSS3', level: 95, category: 'frontend', icon: 'html5.svg' },
    { name: 'JavaScript', level: 90, category: 'frontend', icon: 'javascript.svg' },
    { name: 'Angular', level: 90, category: 'frontend', icon: 'angular.svg' },
    { name: 'React', level: 85, category: 'frontend', icon: 'react.svg' },
    { name: 'TypeScript', level: 88, category: 'frontend', icon: 'typescript.svg' }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 85, category: 'backend', icon: 'nodejs.svg' },
    { name: 'Python', level: 80, category: 'backend', icon: 'python.svg' },
    { name: 'Java', level: 75, category: 'backend', icon: 'java.svg' },
    { name: 'SQL', level: 85, category: 'backend', icon: 'sql.svg' },
    { name: 'MongoDB', level: 80, category: 'backend', icon: 'mongodb.svg' }
  ];

  otherSkills: Skill[] = [
    { name: 'Git', level: 90, category: 'other', icon: 'git.svg' },
    { name: 'Docker', level: 75, category: 'other', icon: 'docker.svg' },
    { name: 'AWS', level: 70, category: 'other', icon: 'aws.svg' },
    { name: 'CI/CD', level: 80, category: 'other', icon: 'cicd.svg' },
    { name: 'Agile', level: 85, category: 'other', icon: 'agile.svg' }
  ];

  additionalSkills: Skill[] = [
    { name: 'UI/UX Design', level: 75, category: 'additional', icon: 'uiux.svg' },
    { name: 'Mobile Development', level: 70, category: 'additional', icon: 'mobile.svg' },
    { name: 'Testing', level: 80, category: 'additional', icon: 'testing.svg' },
    { name: 'DevOps', level: 75, category: 'additional', icon: 'devops.svg' }
  ];
} 