import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MyRemote3333Component } from './my-remote-3333.component'

describe('MyRemote3333Component', () => {
  let component: MyRemote3333Component
  let fixture: ComponentFixture<MyRemote3333Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRemote3333Component],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MyRemote3333Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
