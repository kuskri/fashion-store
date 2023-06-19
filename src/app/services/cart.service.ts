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

  removeItemFromCart = (productId: number, update = true): Array<CartItem> => {
    const filteredItems = this.cart.value.items.filter(
      (i) => i.id !== productId
    );
    if (update) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open("Item removed from cart", "Ok", { duration: 3000 });
    }
    return filteredItems;
  };

  detractQuantity = (cartItem: CartItem): void => {
    let itemToBeRemoved: CartItem | undefined;
    let filteredItems = this.cart.value.items.map((i) => {
      if (i.id === cartItem.id) {
        i.quantity--;
        if (i.quantity === 0) {
          itemToBeRemoved = cartItem;
        }
      }
      return i;
    });
    if (itemToBeRemoved)
      filteredItems = this.removeItemFromCart(itemToBeRemoved.id, false);
    this.cart.next({ items: filteredItems });
    this._snackBar.open("Item removed from cart", "Ok", { duration: 3000 });
  };
}
