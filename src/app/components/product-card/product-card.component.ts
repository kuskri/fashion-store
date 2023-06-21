import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-card",
  templateUrl: "product-card.component.html",
})
export class ProductCardComponent implements OnInit {
  @Output() addProductToCart = new EventEmitter();

  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;

  constructor() {}

  ngOnInit(): void {}

  onAddToCart = (): void => {
    this.addProductToCart.emit(this.product);
  };
}
