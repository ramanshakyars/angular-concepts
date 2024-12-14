import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  constructor(private service:ServicesService,private router:Router){}
  dataFromService: string = '';
  orderProduct={
    name: 'Book',
    quantity: 200,
    price: 100 
  }

  
  // ngOnInit() {
  //   this.service.data$.subscribe(data => {
  //     this.dataFromService = data;
  //   });
  // }

  buyBook() {
    this.service.updateData(this.orderProduct);
    this.router.navigate(['payment']);
  }



}
