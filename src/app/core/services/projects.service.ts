import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getProjects() {
    return [
      { title: 'Portfolio Site', tech: ['Angular', 'Tailwind'], link: '#' },
      { title: 'E-commerce App', tech: ['Angular', '.NET'], link: '#' }
    ];
  }
}
