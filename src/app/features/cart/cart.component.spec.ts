import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { Product } from "src/app/shared/interfaces/product.interface";
import { Order } from "src/app/shared/interfaces/order.interface";
import { ShoppingStatus } from "src/app/shared/interfaces/shoppingStatus.interface";

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
  products: [product],
  status: ShoppingStatus.shoppingCart,
};

describe("CartComponent", () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [ReactiveFormsModule, FontAwesomeModule, RouterModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have alternative text if there are no orders", () => {
    const altText = fixture.debugElement.query(By.css("p.info__text"));
    expect(altText.nativeElement.textContent).toBe(
      "Es konnten keine Bestellungen und Warenkörbe geladen werden."
    );
  });

  it("should have NO alternative text if there are orders", () => {
    component.orders = [order];
    fixture.detectChanges();
    const altText = fixture.debugElement.query(By.css("p.info__text"));
    expect(altText).toBeNull();
  });

  it("should have cart items if there are orders", () => {
    component.orders = [order, order];
    fixture.detectChanges();
    const cartItems = fixture.debugElement.queryAll(By.css("app-cart-item"));
    expect(cartItems.length).toBe(2);
  });
});
