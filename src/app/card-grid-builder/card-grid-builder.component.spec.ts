import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridBuilderComponent } from './card-grid-builder.component';

describe('CardGridBuilderComponent', () => {
  let component: CardGridBuilderComponent;
  let fixture: ComponentFixture<CardGridBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGridBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGridBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
