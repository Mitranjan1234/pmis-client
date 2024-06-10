import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackProposalComponent } from './track-proposal.component';

describe('TrackProposalComponent', () => {
  let component: TrackProposalComponent;
  let fixture: ComponentFixture<TrackProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
