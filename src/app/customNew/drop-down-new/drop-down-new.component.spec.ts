import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownNewComponent } from './drop-down-new.component';

describe('DropDownNewComponent', () => {
  let component: DropDownNewComponent;
  let fixture: ComponentFixture<DropDownNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
