import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.components.html",
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newOrder: string): void {
    this.sort = newOrder;
  }

  onItemsNumberUpdated = (number: number): void => {
    this.itemsShowCount = number;
  };

  onColumnsUpdated = (colsNumber: number): void => {
    this.columnsCountChange.emit(colsNumber);
  };
}
