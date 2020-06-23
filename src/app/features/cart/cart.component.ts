import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Order } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public orders: Order[];

  constructor(private readonly orderService: OrderService) {
    this.orders = this.orderService.getAllOrders();
  }

  public trackByOrderId(index: number, order: Order): number {
    return order.id;
  }

  public getTotal(id): number {
    return this.orderService.getTotalOfOrder(id);
  }
}
