import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalSubmissionComponent } from './proposal-submission.component';

describe('ProposalSubmissionComponent', () => {
  let component: ProposalSubmissionComponent;
  let fixture: ComponentFixture<ProposalSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
