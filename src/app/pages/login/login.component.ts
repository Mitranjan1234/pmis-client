import { Component, OnInit } from '@angular/core';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
