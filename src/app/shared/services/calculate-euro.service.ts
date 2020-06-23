import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CalculateEuroService {
  public calculateInEuro(value: number | string, currency: string): number {
    const valueNumber = typeof value === "number" ? value : parseFloat(value);

    if (
      value === undefined ||
      value === null ||
      !currency ||
      isNaN(valueNumber)
    ) {
      return 0;
    }

    switch (currency.toLowerCase()) {
      case "rub":
        return valueNumber * 0.015;
      case "cad":
        return valueNumber * 0.69;
      case "idr":
        return valueNumber * 0.000065;
      case "eur":
      default:
        return valueNumber;
    }
  }
}
