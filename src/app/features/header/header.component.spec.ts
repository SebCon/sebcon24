import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OrderService } from "src/app/shared/services/order.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  class OrderServiceMock extends OrderService {
    getOrdnerCount() {
      return 1;
    }

    getTotal() {
      return 1;
    }

    isOrderOpen() {
      return true;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [FontAwesomeModule],
      providers: [
        {
          provide: OrderService,
          useClass: OrderServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
