import { Injectable } from '@angular/core'
import { ModMyRemote3333Service } from '../../other/my-shared-lib-3333.other'

@Injectable({ providedIn: 'root' })
export class MyRemote3333Service implements ModMyRemote3333Service {
  hello(msg: string | null = null) {
    if (msg) {
      console.log('hello MyRemote3333Service', msg)
    } else {
      console.log('hello MyRemote3333Service')
    }
  }
}
