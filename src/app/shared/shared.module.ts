import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalculateEuroPipe } from "./pipes/calculate-euro.pipe";
import { ChangeBorderDirective } from "./directives/change-border.directive";

@NgModule({
  declarations: [CalculateEuroPipe, ChangeBorderDirective],
  imports: [CommonModule],
  exports: [CalculateEuroPipe, ChangeBorderDirective]
})
export class SharedModule {}
