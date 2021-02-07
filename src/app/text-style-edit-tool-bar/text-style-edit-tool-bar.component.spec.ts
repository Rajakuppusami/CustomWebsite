import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStyleEditToolBarComponent } from './text-style-edit-tool-bar.component';

describe('TextStyleEditToolBarComponent', () => {
  let component: TextStyleEditToolBarComponent;
  let fixture: ComponentFixture<TextStyleEditToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextStyleEditToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStyleEditToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
