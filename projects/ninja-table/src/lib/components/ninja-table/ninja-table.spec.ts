import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaTable } from './ninja-table';

describe('NinjaTable', () => {
  let component: NinjaTable;
  let fixture: ComponentFixture<NinjaTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NinjaTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NinjaTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
