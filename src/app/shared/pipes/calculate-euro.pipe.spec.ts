import { CalculateEuroPipe } from "./calculate-euro.pipe";
import { TestBed, async } from "@angular/core/testing";
import { CalculateEuroService } from "../services/calculate-euro.service";

describe("CalculateEuroPipe", () => {
  let calculateEuroServiceMock: CalculateEuroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    calculateEuroServiceMock = new CalculateEuroService();
  });

  it("should return input value", () => {
    const pipe = new CalculateEuroPipe(calculateEuroServiceMock);
    expect(pipe.transform(1, "EUR")).toBe(1);
    expect(pipe.transform(2, "eur")).toBe(2);
    expect(pipe.transform(1, "HANS")).toBe(1);
  });
});
