/** @format */

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UUID } from "angular2-uuid";
import { IProduct } from "src/app/core/model/interfaces";
@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  showErrorBox = true;
  error: string[] = [];
  productColor = "";
  productData: IProduct = {
    id: "",
    name: "",
    rate: "",
    quantity: "",
    color: "",
    lotsize: "",
    description: "",
  };

  @ViewChild("productName") productName: ElementRef | undefined;
  @ViewChild("productRate") productRate: ElementRef | undefined;
  @ViewChild("productQuantity") productQuantity: ElementRef | undefined;
  @ViewChild("productLotSize") productLotSize: ElementRef | undefined;
  @ViewChild("productDescription") productDescription: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  setColor(e: HTMLInputElement) {
    this.productColor = e.value;
  }
  validate(e: Event) {
    e.preventDefault();
    this.error = [];
    let name = this.productName?.nativeElement.value;
    let rate = this.productRate?.nativeElement.value;
    let quant = this.productQuantity?.nativeElement.value;
    let color = this.productColor;
    let lotSize = this.productLotSize?.nativeElement.value;
    let description = this.productDescription?.nativeElement.value;
    if (name == "") {
      this.error.push("name should not be empty");
    }

    if (quant < 1 || quant > 999) {
      this.error.push("product quantity should be between 1 to 999");
    }
    if (color == "") {
      this.error.push("choose a color");
    }
    if (!(1 < lotSize < quant)) {
      this.error.push("product lo t size should be between 1 to max quantity");
    }
    if (description == "") {
      this.error.push("description should not be empty");
    }

    if (this.error[0] == null) {
      this.productData = {
        id: UUID.UUID(),
        name: name,
        rate: rate,
        quantity: quant,
        color: color,
        lotsize: lotSize,
        description: description,
      };
      alert("data added successfully");
    } else {
      alert("enter valid data");
    }
  }
}
