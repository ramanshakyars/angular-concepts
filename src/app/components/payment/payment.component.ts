import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.service.data$.subscribe(data => {
      console.log(data);
    });

  }
}
