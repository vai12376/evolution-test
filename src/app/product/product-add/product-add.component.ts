import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @ViewChild('productName') productName:ElementRef | undefined;
  @ViewChild('productRate') productRate:ElementRef | undefined;
  @ViewChild('productQuantity') productQuantity:ElementRef | undefined;
  @ViewChild('productLotSize') productLotSize:ElementRef | undefined;
  @ViewChild('productDescription') productDescription:ElementRef | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    let name=this.productName?.nativeElement.value;
    let rate=this.productRate?.nativeElement.value;
    let quantity=this.productQuantity?.nativeElement.value;
    let lotSize=this.productLotSize?.nativeElement.value;
    let description=this.productDescription?.nativeElement.value; 
    let error:string[]=[];
    

    if(name==''){
      error.push('name should not be empty');
    }
    if(rate<0 || rate==null){
      error.push('negative rate or null value is not allowed');
    }
    if(quantity<1 || quantity>999){
      error.push('product quantity should be between 1 to 999');
    }
  

}
