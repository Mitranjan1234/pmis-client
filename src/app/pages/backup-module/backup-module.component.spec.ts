import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackupModuleComponent } from './backup-module.component';

describe('BackupModuleComponent', () => {
  let component: BackupModuleComponent;
  let fixture: ComponentFixture<BackupModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackupModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackupModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
