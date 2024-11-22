import { FinancialTransaction } from "./models/financial-transaction";
import { OperationService } from "./services/operation.service";

console.log("Insira as transações para o cálculo:");

process.stdin.on("data", async (data) => {
  const dataToJsonTransactions: [FinancialTransaction[]] = JSON.parse(`[${data.toString()}]`);

  for await (const transactions of dataToJsonTransactions) {
    const operationService = new OperationService();

    const taxes = await operationService.calculateTax(transactions);

    console.log(JSON.stringify(taxes));
  }
});
