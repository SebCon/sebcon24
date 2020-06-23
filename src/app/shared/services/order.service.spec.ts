import { TestBed } from "@angular/core/testing";
import { OrderService } from "./order.service";
import { CalculateEuroService } from "./calculate-euro.service";
import { Product } from "../interfaces/product.interface";

describe("OrderServiceService", () => {
  let service: OrderService;
  const product: Product = {
    id: 123,
    title: "irgendwas",
    descriptionShort: "blablablub",
    descriptionLong: "blablablubAgain",
    price: "1.5",
    currency: "EUR",
    amount: 1,
    image: "irgendwo",
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new OrderService(new CalculateEuroService());
    expect(service.createNewOrder("testit")).toBe(0);
  });

  it("should create new order with id 0", () => {
    expect(service.isOrderOpen()).toBeTruthy();
  });

  it("should add / remove products and return product length", () => {
    expect(service.getOrdnerCount()).toBe(0);
    service.insertProductInOrder(product);
    expect(service.getOrdnerCount()).toBe(1);
    service.insertProductInOrder(product);
    expect(service.getOrdnerCount()).toBe(2);
    service.removeProductInOrder(123);
    expect(service.getOrdnerCount()).toBe(1);
  });

  it("should get max count if more products are added", () => {
    for (let i = 0; i < 12; i++) {
      service.insertProductInOrder(product);
    }
    expect(service.getOrdnerCount()).toBe(10);
    expect(service.isGreaterThanMaxOrderCount()).toBeTruthy();
  });
});
