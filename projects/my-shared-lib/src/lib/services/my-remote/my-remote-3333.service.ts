import { Injectable } from '@angular/core'
import { ModMyRemote3333Service } from '../../other/my-shared-lib.other'

@Injectable({ providedIn: 'root' })
export class MyRemoteService implements ModMyRemote3333Service {
  // noinspection JSUnusedGlobalSymbols
  hello() {
    console.log('hello MyRemoteService')
  }
}
