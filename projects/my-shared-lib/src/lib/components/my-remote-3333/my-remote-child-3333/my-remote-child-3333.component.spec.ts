import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyRemoteChild3333Component } from './my-remote-child-3333.component'

describe('MyRemoteChild3333Component', () => {
  let component: MyRemoteChild3333Component
  let fixture: ComponentFixture<MyRemoteChild3333Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRemoteChild3333Component],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyRemoteChild3333Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
