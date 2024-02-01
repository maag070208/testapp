import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectServerFormComponent } from './select-server-form.component';

describe('SelectServerFormComponent', () => {
  let component: SelectServerFormComponent;
  let fixture: ComponentFixture<SelectServerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectServerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectServerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
