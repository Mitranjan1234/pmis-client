// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-stepper',
//   templateUrl: './stepper.component.html',
//   styleUrls: ['./stepper.component.css']
// })
// export class StepperComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers:[{provide:CdkStepper,useExisting:StepperComponent}]
})
export class StepperComponent extends CdkStepper {
  @Input() linearModeSelected = true;

  onClick(index:number){
    this.selectedIndex = index;
  }

}