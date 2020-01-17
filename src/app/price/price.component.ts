import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  prices: Price[] = [
    {name:"Interchange + .10% and $0.10", saving:133133,residuals:261.49,rate:2.29},
    {name:"Interchange + .20% and $0.10", saving:123133,residuals:287.51,rate:1.32},
    {name:"Interchange + .30% and $0.10", saving:120345,residuals:564,rate:5.36},
    {name:"Interchange + .40% and $0.10", saving:11097,residuals:564,rate:6.36},
    {name:"Interchange + .50% and $0.10", saving:10036,residuals:564,rate:6.89},
    {name:"2.50 flat", saving:9870,residuals:445,rate:1.10},
    {name:"2.60 flat", saving:8897,residuals:345,rate:4.36},
    {name:"2.75 flat", saving:7768,residuals:234,rate:3.36},
    {name:"6 Tiered w/Reg Debit", saving:6750,residuals:120,rate:5.36},
    {name:"6 Tiered w/Reg Debit", saving:5643,residuals:498,rate:1.36},


  ]
  valeues:any
  saving:any;
 arr:any[];
  funSave(selectedItem: any){

    if("undefined"){
      console.log(this.prices.length)
      for(var i=0;i<=this.prices.length;i++){
        console.log(this.prices[i].saving);
      
   
      }

      // this.prices[i].saving.sort((a,b)=>b.localeCompare(a))
     

   
    }
 

  }



}


export class Price {
 
 
  name:string;
  saving:number;
  residuals:number
  rate:number
 

}
