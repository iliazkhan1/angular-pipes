import { Component } from '@angular/core';
import { AchildComponent } from '../achild/achild.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aparent',
  standalone: true,
  imports: [AchildComponent, CommonModule],
  template: `
    <div class="parent-container">
      <h1>Parent Component</h1>
      <p>Current Count from Child: {{ currentCount }}</p>
      <app-achild 
        [users]="userList" 
        (counterUpdate)="handleCounterUpdate($event)">
      </app-achild>
    </div>
  `,
  styleUrls: ['./aparent.component.css']
})
export class AparentComponent {
  userList = [
    { id: 1, name: 'Iliaz', email: 'iliaz@example.com' },
    { id: 2, name: 'Roy', email: 'roy@example.com' },
    { id: 3, name: 'John', email: 'jhon@example.com' }
  ];
  currentCount = 0;

  handleCounterUpdate(newValue: number) {
    this.currentCount = newValue;
  }
}