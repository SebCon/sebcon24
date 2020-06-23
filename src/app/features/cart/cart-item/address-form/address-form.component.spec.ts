import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { AddressFormComponent } from "./address-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("AddressFormComponent", () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have 6 input fields", () => {
    const inputFields = fixture.debugElement.queryAll(By.css("input"));
    expect(inputFields.length).toBe(6);
  });

  it("should have disabled submit button", () => {
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });
});
