import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResource1Component } from './add-resource1.component';

describe('AddResource1Component', () => {
  let component: AddResource1Component;
  let fixture: ComponentFixture<AddResource1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResource1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResource1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
