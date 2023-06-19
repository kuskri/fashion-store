import { Component, OnInit } from "@angular/core";

const ROW_HEIGHT: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROW_HEIGHT[this.cols];
  category: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onColumnsCountChange = (colsNumber: number): void => {
    this.cols = colsNumber;
    this.rowHeight = ROW_HEIGHT[this.cols];
  };

  onCategoryChange = (category: string): void => {
    this.category = category;
  };
}
