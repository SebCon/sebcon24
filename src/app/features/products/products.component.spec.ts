import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductsComponent } from "./products.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Product } from "src/app/shared/interfaces/product.interface";
import { ProductsService } from "src/app/shared/services/products.service";
import { of, Observable } from "rxjs";
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

class ProductsServiceMock {
  public getAllProducts$(): Observable<Product[]> {
    return of([product, product]);
  }

  public getProductCount(): number {
    return 2;
  }
}

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [FontAwesomeModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have cart items if there are orders", () => {
    const cartItems = fixture.debugElement.queryAll(By.css("app-product-item"));
    expect(cartItems.length).toBe(2);
  });
});
