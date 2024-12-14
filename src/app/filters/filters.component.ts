import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  productsList: any = [];
  constructor(private httpService: HttpServiceService) {
    this.getProducts();
  }

  getProducts() {
    const url = "https://api.restful-api.dev/objects";
    this.httpService.getProductDetails(url).subscribe({
      next: ((res) => {
        this.productsList = res;
        console.log(this.productsList);
      }),
      error: ((err) => {
        alert(err);

      })
    })
  }


  filterProducts() {
    // filter method
    const electronicProducts = this.productsList.filter((product: any) => product.data !== null);
    console.log(electronicProducts);
  }
  // filterProducts() {
  // const electronicProducts = this.productsList.filter((product: any) => product.data !== null);
  // console.log(electronicProducts);
  // }




}
