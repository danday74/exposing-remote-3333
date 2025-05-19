import { Component } from '@angular/core'
import { ExampleComponent } from '@app/components/example/example.component'

@Component({
  selector: 'app-root',
  imports: [ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
