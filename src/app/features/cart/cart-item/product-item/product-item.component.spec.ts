import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductItemComponent } from "./product-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CalculateEuroPipe } from "src/app/shared/pipes/calculate-euro.pipe";
import { RouterTestingModule } from "@angular/router/testing";

describe("ProductItemComponent", () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent, CalculateEuroPipe],
      imports: [FontAwesomeModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
