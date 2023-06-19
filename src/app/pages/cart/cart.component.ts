import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [],
  };
  dataSource: Array<CartItem> = [];
  displayCols: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  onRemoveItemFromCart = (productId: number) => {
    this.cartService.removeItemFromCart(productId);
  };

  onClearCart = (): void => {
    this.cartService.clearCart();
  };

  getTotal = (items: Array<CartItem>): number => {
    return this.cartService.getTotal(items);
  };

  onDetractQuantity = (el: CartItem): void => {
    this.cartService.detractQuantity(el);
  };

  onAddQuantity = (el: CartItem): void => {
    this.cartService.addToCart(el);
  };
}
