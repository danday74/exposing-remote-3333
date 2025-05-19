import { TestBed } from '@angular/core/testing'
import { MyRemoteService } from './my-remote.service'

describe('MyRemoteService', () => {
  let service: MyRemoteService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MyRemoteService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
