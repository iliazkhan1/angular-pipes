import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AparentComponent } from './aparent/aparent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AparentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '6';
}
