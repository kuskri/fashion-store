import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Cart, CartItem } from "../models/cart.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToCart = (cartItem: CartItem): void => {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((i) => i.id === cartItem.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
    } else items.push(cartItem);

    this.cart.next({ items });

    this._snackBar.open("1 item added to cart.", "Ok", { duration: 3000 });
  };

  getTotal = (items: CartItem[]): number => {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  };

  clearCart = (): void => {
    this.cart.next({ items: [] });
    this._snackBar.open("Cart is clear", "Ok", { duration: 3000 });
  };
}
