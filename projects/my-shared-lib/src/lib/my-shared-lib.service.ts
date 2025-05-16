import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class MySharedLibService {
  // noinspection JSUnusedGlobalSymbols
  hello() {
    console.log('hello MySharedLibService')
  }
}
