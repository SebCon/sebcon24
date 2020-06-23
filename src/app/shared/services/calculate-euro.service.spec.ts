import { TestBed } from "@angular/core/testing";

import { CalculateEuroService } from "./calculate-euro.service";

describe("CalculateEuroService", () => {
  let service: CalculateEuroService;
  beforeEach(() => {
    service = new CalculateEuroService();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should return 0 in error case", () => {
    expect(service.calculateInEuro(null, null)).toBe(0);
    expect(service.calculateInEuro(null, undefined)).toBe(0);
    expect(service.calculateInEuro("null", null)).toBe(0);
    expect(service.calculateInEuro("23a", null)).toBe(0);
    expect(service.calculateInEuro(null, "")).toBe(0);
  });

  it("should return input value in case of not existing currency", () => {
    expect(service.calculateInEuro(9, "ABC")).toBe(9);
    expect(service.calculateInEuro(8, "456")).toBe(8);
    expect(service.calculateInEuro(7, "EUR")).toBe(7);
  });

  it("should return exchange rate of RUB ", () => {
    expect(service.calculateInEuro(1, "RUB")).toBe(0.015);
    expect(service.calculateInEuro(2, "RUB")).toBe(0.03);
  });
});
