import { Injectable } from '@angular/core'
import { ModMyRemote3333Service } from '../../other/my-shared-lib.other'

@Injectable({ providedIn: 'root' })
export class MyRemote3333Service implements ModMyRemote3333Service {
  // noinspection JSUnusedGlobalSymbols
  hello() {
    console.log('hello MyRemote3333Service')
  }
}
