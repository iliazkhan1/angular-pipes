import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-achild',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="user-list">
        <h2>User List</h2>
        <ul>
          @for (user of users; track user.id) {
            <li>
              <span class="user-name">{{ user.name }}</span>
              <span class="user-email">{{ user.email }}</span>
            </li>
          }
        </ul>
      </div>

      <div class="counter">
        <button (click)="decrement()">-</button>
        <span class="count">{{ count }}</span>
        <button (click)="increment()">+</button>
      </div>
    </div>
  `,
})
export class AchildComponent {
  @Input() users: any[] = [];
  count = 0;
  @Output() counterUpdate = new EventEmitter<number>();

  increment() {
    this.count++;
    this.counterUpdate.emit(this.count);
  }

  decrement() {
    this.count--;
    this.counterUpdate.emit(this.count);
  }
}