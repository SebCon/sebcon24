import { Component, Output, EventEmitter } from "@angular/core";
import { Address } from "src/app/shared/interfaces/address.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html",
  styleUrls: ["./address-form.component.scss"]
})
export class AddressFormComponent {
  @Output() saveAddress: EventEmitter<Address> = new EventEmitter();
  public address: Address;
  public authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      street: ["", Validators.required],
      postCode: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]{5}")
        ])
      ],
      town: ["", Validators.required],
      country: ["Deutschland", Validators.required]
    });
  }

  public saveButtonClick(): void {
    this.saveAddress.emit(this.authForm.getRawValue());
  }
}
