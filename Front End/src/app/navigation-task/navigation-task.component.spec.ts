import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTaskComponent } from './navigation-task.component';

describe('NavigationTaskComponent', () => {
  let component: NavigationTaskComponent;
  let fixture: ComponentFixture<NavigationTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
