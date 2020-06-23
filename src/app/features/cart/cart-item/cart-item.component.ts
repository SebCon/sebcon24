import { Component, Input, OnChanges } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/order.interface';
import { ShoppingStatus } from 'src/app/shared/interfaces/shoppingStatus.interface';
import { OrderService } from 'src/app/shared/services/order.service';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { Address } from 'src/app/shared/interfaces/address.interface';

interface StatusDisplay {
  info: string;
  color: string;
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnChanges {
  @Input() order: Order;
  @Input() totalOfOrder: number;
  @Input() productCount: number;
  public showAdressForm = false;
  public status: StatusDisplay;

  constructor(private readonly orderService: OrderService) {}

  public ngOnChanges(): void {
    if (this.order) {
      this.status = this.getOrderStatus(this.order.status);
    }
  }

  public getOrderStatus(status: ShoppingStatus): StatusDisplay {
    const rObj: StatusDisplay = {
      info: '',
      color: ''
    };
    switch (status) {
      case ShoppingStatus.shoppingCart:
        rObj.info = 'Offen',
        rObj.color = '#E74C3C';
        break;
      default:
      case ShoppingStatus.completed:
        rObj.info = 'Abgeschlossen',
        rObj.color = '#16A085';
        break;
    }

    return rObj;
  }

  public showOrderButton(status: ShoppingStatus): boolean {
    return (status === ShoppingStatus.shoppingCart);
  }



  public completeOrder(): void {
    this.orderService.setStatusCompleted(this.order.id);
    this.status = this.getOrderStatus(ShoppingStatus.completed);
    this.showAdressForm = true;
  }

  public trackbyProductId(index: number, product: Product): number {
    return product.id;
  }

  public onRemoveProduct(product: Product): void {
    this.orderService.removeProductInOrder(product && product.id ? product.id : undefined);
  }

  public onSaveAddress(address: Address): void {
    this.showAdressForm = false;
  }

}
