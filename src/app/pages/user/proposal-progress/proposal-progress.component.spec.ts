import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalProgressComponent } from './proposal-progress.component';

describe('ProposalProgressComponent', () => {
  let component: ProposalProgressComponent;
  let fixture: ComponentFixture<ProposalProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
