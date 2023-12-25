import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-proposal-submission',
  templateUrl: './proposal-submission.component.html',
  styleUrls: ['./proposal-submission.component.css']
})
export class ProposalSubmissionComponent implements OnInit {

  constructor() { }

  formData = {
    month: '',
    origin: '',
    destination: ''
  };

  onSubmit() {
    console.log("Form Submitted: ", this.formData);
    //this.service.predictTargetAudience(this.formData).subscribe(r => {
      //alert('Saved');
  //  });
  }

  resetForm() {
    this.formData = {
      month: '',
      origin: '',
      destination: ''
    };
  }

  myControl = new FormControl('');
  options: string[] = ["A","B","C"];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
