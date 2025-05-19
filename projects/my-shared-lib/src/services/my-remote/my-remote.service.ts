import { Injectable } from '@angular/core'
import { ModMySharedLibService } from '../../other/my-shared-lib.other'

@Injectable({ providedIn: 'root' })
export class MyRemoteService implements ModMySharedLibService {
  // noinspection JSUnusedGlobalSymbols
  hello() {
    console.log('hello MySharedLibService')
  }
}
