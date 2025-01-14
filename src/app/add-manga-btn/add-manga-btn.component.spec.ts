import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMangaBtnComponent } from './add-manga-btn.component';

describe('AddMangaBtnComponent', () => {
  let component: AddMangaBtnComponent;
  let fixture: ComponentFixture<AddMangaBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMangaBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMangaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
