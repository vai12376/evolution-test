/** @format */

import { ThisReceiver } from "@angular/compiler";
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
} from "@angular/core";
import * as EventEmitter from "events";
import { IProduct } from "src/app/core/model/interfaces";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() productData: IProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: "",
    color: "",
    lotsize: "",
    description: "",
  };
  soldData: IProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: "",
    color: "",
    lotsize: "",
    description: "",
  };
  productList: any = [];
  @Output() purchaseEvent = new EventEmitter<object>();
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.productData);
    this.productList.push(this.productData);
  }
  purchaseAll(idx: number) {
    this.soldData = this.productList[idx];
    this.soldData.quantity = "0";
    this.productList[idx] = this.soldData;
    this.purchaseEvent.emit(this.soldData);
  }
  singlePurchase(idx: number) {
    this.soldData = this.productList[idx];
    let q = parseInt(this.soldData.quantity);

    if (q > 0) {
      q = q - 1;
      this.soldData.quantity = q.toString();
      this.productList[idx] = this.soldData;
    } else {
      alert("no more products available");
    }
  }
  purchaseLot(idx: number) {
    this.soldData = this.productList[idx];
    let q = parseInt(this.soldData.quantity);
    let l = parseInt(this.soldData.lotsize);
    let a = q - l;
    this.soldData.quantity = a.toString();
    this.productList[idx] = this.soldData;
  }
}
