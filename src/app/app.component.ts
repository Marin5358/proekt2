import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
//popraven routing
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'google-photos-app';
}
