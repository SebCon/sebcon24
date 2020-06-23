import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CartItemComponent } from "./cart-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Order } from "src/app/shared/interfaces/order.interface";
import { ShoppingStatus } from "src/app/shared/interfaces/shoppingStatus.interface";
import { Product } from "src/app/shared/interfaces/product.interface";
import { By } from "@angular/platform-browser";

const product: Product = {
  id: 1,
  title: "Muffin Batt - Ban Dream Zero",
  descriptionShort: "Reposition Trigeminal Nerve, Perc Endo Approach",
  descriptionLong:
    "Reposition Trigeminal Nerve, Percutaneous Endoscopic Approach",
  price: "229.19",
  currency: "RUB",
  amount: 53,
  image: "http://dummyimage.com/100x100.png/dddddd/000000",
};

const order: Order = {
  id: 123,
  date: new Date(),
  products: [product, product],
  status: ShoppingStatus.shoppingCart,
};

describe("CartItemComponent", () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartItemComponent],
      imports: [ReactiveFormsModule, FontAwesomeModule, RouterModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.status = {
      info: "Hallo",
      color: "red",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have two product items", () => {
    component.order = order;
    fixture.detectChanges();
    const productItems = fixture.debugElement.queryAll(
      By.css("app-product-item")
    );
    expect(productItems.length).toBe(2);
  });

  it("should have order button", () => {
    component.order = order;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button).toBeTruthy();
  });

  it("should have NO order button", () => {
    const orderClosed: Order = { ...order };
    orderClosed.status = ShoppingStatus.completed;
    component.order = orderClosed;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button).toBeFalsy();
  });
});
