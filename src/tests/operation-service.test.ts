import { transactions, doubleTransactions } from "./mock";
import { OperationService } from "../services/operation.service";
import { DueTax } from "../models/due-tax";

test("Realizar o cálculo das transações", async () => {
  const operationService = new OperationService();

  const taxes = await operationService.calculateTax(transactions);

  expect(taxes).toEqual([{ tax: 0.0 }, { tax: 10000.0 }]);
});

test("Realizar o cálculo das transações", async () => {
  const operationService = new OperationService();

  const dueTaxes: DueTax[][] = [];

  for await (const transactions of doubleTransactions) {
    const taxes = await operationService.calculateTax(transactions);

    dueTaxes.push([
      ...taxes.map((dueTax) => {
        return {
          tax: dueTax.tax,
        };
      }),
    ]);
  }

  expect(dueTaxes).toEqual([
    [{ tax: 0.0 }, { tax: 10000.0 }],
    [{ tax: 0.0 }, { tax: 0.0 }],
  ]);
});
