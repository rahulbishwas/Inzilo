import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  department: Department[] = [
    {  name: "5812RESTAURANT" },
    {  name: "345SHOP" },
    {   name: "456MOVIE"  },
    { name: "5812RESTAURANT"  }
  ]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      amexFee: ['', Validators.required],
      currentFee:['', Validators.required],
      currentRate:['', Validators.required],
      avgTicket:['', Validators.required],
      transation:['', Validators.required],
      volume:['', Validators.required]

    })

}

get fval() {
  return this.registerForm.controls;
  }

  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
  

    }


  
  







}


export class Department {
 
 
  name:string;
 

}


  



