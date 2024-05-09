import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoPrincipalInvestigatorInfoComponent } from './co-principal-investigator-info.component';

describe('CoPrincipalInvestigatorInfoComponent', () => {
  let component: CoPrincipalInvestigatorInfoComponent;
  let fixture: ComponentFixture<CoPrincipalInvestigatorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoPrincipalInvestigatorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoPrincipalInvestigatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
