import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class MySharedLibService {
  constructor() {
    console.log('hello MySharedLibService')
  }
}
