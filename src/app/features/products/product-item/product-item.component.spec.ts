import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProductItemComponent } from "./product-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CalculateEuroPipe } from "src/app/shared/pipes/calculate-euro.pipe";
import { ChangeBorderDirective } from "../../../shared/directives/change-border.directive";

describe("ProductItemComponent", () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductItemComponent,
        CalculateEuroPipe,
        ChangeBorderDirective,
      ],
      imports: [FontAwesomeModule],
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
