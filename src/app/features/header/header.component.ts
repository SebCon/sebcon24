import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private readonly orderService: OrderService) {
  }

  public getCartCount(): number {
    return this.orderService.getOrdnerCount();
  }

  public getTotal(): number {
    return this.orderService.getTotal();
  }

}
