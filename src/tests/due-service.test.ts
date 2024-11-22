import { DueTaxService } from "../services/due-tax.service";

test("Calcular imposto quando há", async () => {
  const dueTaxService = new DueTaxService();

  await dueTaxService.calculateTax(30000, 5000);

  expect(dueTaxService.tax).toBe(1000);
});

test("Calcular imposto quando não há", async () => {
  const dueTaxService = new DueTaxService();

  await dueTaxService.calculateTax(20000, 5000);

  expect(dueTaxService.tax).toBe(0);
});
