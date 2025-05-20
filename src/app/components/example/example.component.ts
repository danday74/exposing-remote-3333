import { Component } from '@angular/core'
import { MyRemote3333Component } from 'my-shared-lib-3333'

@Component({
  selector: 'app-example',
  imports: [MyRemote3333Component],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
})
export class ExampleComponent {}
