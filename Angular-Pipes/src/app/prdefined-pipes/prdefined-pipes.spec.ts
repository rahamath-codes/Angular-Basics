import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdefinedPipes } from './prdefined-pipes';

describe('PrdefinedPipes', () => {
  let component: PrdefinedPipes;
  let fixture: ComponentFixture<PrdefinedPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrdefinedPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdefinedPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
