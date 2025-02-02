import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToasterComponent } from '../shared/components/toaster/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning';
}
