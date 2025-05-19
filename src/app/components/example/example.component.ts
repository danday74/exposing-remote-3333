import { Component } from '@angular/core'
import { MyRemoteComponent } from 'my-shared-lib'

@Component({
  selector: 'app-example',
  imports: [MyRemoteComponent],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {}
