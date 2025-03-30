import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.getTheme();
    this.themeService.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
}
