import { DueTax } from "../models/due-tax";
import { FinancialTransaction } from "../models/financial-transaction";
import { DueTaxService } from "./due-tax.service";
import { FinancialTransactionService } from "./financial-transaction.service";

export class OperationService {
  public calculateTax = async (transactions: FinancialTransaction[]): Promise<DueTax[]> => {
    const financialTransactionService = new FinancialTransactionService(0, 0, 0);
    const dueTaxes: DueTax[] = [];

    for await (const transaction of transactions) {
      let taxValue = 0;

      if (transaction.operation === "buy") {
        taxValue = await financialTransactionService.buyShares(
          transaction["unit-cost"],
          transaction.quantity
        );
      } else {
        taxValue = await financialTransactionService.sellShares(
          transaction["unit-cost"],
          transaction.quantity
        );
      }

      dueTaxes.push(new DueTax(taxValue));
    }

    return dueTaxes;
  };
}
