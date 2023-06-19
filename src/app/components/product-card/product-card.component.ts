import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-card",
  templateUrl: "product-card.component.html",
})
export class ProductCardComponent implements OnInit {
  @Output() addProductToCart = new EventEmitter();

  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: "Sneakers",
    price: 150,
    category: "shoes",
    description: "beautiful sneakers",
    image: "https://via.placeholder.com/150/",
  };

  constructor() {}

  ngOnInit(): void {}

  onAddToCart = (): void => {
    this.addProductToCart.emit(this.product);
  };
}
