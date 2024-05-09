import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInvestigatorInfoComponent } from './principal-investigator-info.component';

describe('PrincipalInvestigatorInfoComponent', () => {
  let component: PrincipalInvestigatorInfoComponent;
  let fixture: ComponentFixture<PrincipalInvestigatorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalInvestigatorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalInvestigatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
