import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
})
export class BadgesComponent {
  nimi = "me";

  badges = [
    { name: 'Bug Hunter', icon: 'bug_report', color: 'blue-dark', isGray: false },
    { name: 'Code Master', icon: 'code', color: 'green-dark', isGray: false },
    { name: 'Solver', icon: 'help_outline', color: 'yellow', isGray: false },
    { name: 'Debugger', icon: 'search_off', color: 'red', isGray: false },
    { name: 'Guru', icon: 'computer', color: 'teal', isGray: false },
    { name: 'Team Player', icon: 'group', color: 'orange', isGray: false },
    { name: 'Ninja', icon: 'sports_kabaddi', color: 'purple', isGray: false },
    { name: 'Optimizer', icon: 'track_changes', color: 'green', isGray: false },
    { name: 'Git Master', icon: 'cloud', color: 'blue', isGray: false },
    { name: 'Performer', icon: 'speed', color: 'pink', isGray: false },
    { name: 'Developer', icon: 'apps', color: 'gold', isGray: false },
    { name: 'Reviewer', icon: 'rate_review', color: 'silver', isGray: false }
];

  newBadge = { name: '', icon: '', color: '' };
  availableIcons: string[] = [];
  availableColors: string[] = [];

  constructor() {
    // Populate availableIcons dynamically from badges
    this.availableIcons = Array.from(new Set(this.badges.map((badge) => badge.icon)));
    this.availableColors = Array.from(new Set(this.badges.map((badge) => badge.color)));
  }

  toggleGray(badge: any) {
    if (badge.isGray) {
      badge.color = badge.originalColor;
    } else {
      badge.originalColor = badge.color;
      badge.color = 'gray';
    }
    badge.isGray = !badge.isGray;
  }

  addBadge() {
    if (this.newBadge.name && this.newBadge.icon && this.newBadge.color) {
      this.badges.push({ ...this.newBadge, isGray: false });
      this.newBadge = { name: '', icon: '', color: '' };
    }
  }
}

