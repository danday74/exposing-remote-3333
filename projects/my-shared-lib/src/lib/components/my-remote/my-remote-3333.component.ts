import { Component } from '@angular/core'
import { MyRemoteChild3333Component } from './my-remote-child/my-remote-child-3333.component'

@Component({
  selector: 'lib-my-remote-3333',
  imports: [MyRemoteChild3333Component],
  templateUrl: './my-remote-3333.component.html',
  styleUrl: './my-remote-3333.component.scss',
})
export class MyRemote3333Component {}
