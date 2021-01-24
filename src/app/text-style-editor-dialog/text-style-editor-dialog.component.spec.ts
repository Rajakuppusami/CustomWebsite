import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStyleEditorDialogComponent } from './text-style-editor-dialog.component';

describe('TextStyleEditorDialogComponent', () => {
  let component: TextStyleEditorDialogComponent;
  let fixture: ComponentFixture<TextStyleEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextStyleEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextStyleEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
