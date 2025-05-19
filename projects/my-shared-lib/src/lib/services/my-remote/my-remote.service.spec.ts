import { TestBed } from '@angular/core/testing'
import { MyRemote3333Service } from './my-remote-3333.service'

describe('MyRemote3333Service', () => {
  let service: MyRemote3333Service

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MyRemote3333Service)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
