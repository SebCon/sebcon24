import { Component, OnInit, Input } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.scss']
})
export class WarenkorbComponent implements OnInit {
  @Input() count: number;
  @Input() total: number;
  public faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
