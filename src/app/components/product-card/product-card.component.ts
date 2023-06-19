import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "product-card.component.html",
})
export class ProductCardComponent implements OnInit {
  @Input() fullWidthMode = false;

  constructor() {}

  ngOnInit(): void {}
}
