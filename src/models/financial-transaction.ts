export class FinancialTransaction {
  operation: "buy" | "sell";
  "unit-cost": number;
  quantity: number;

  constructor(operation: "buy" | "sell", unitCost: number, quantity: number) {
    this.operation = operation;
    this["unit-cost"] = unitCost;
    this.quantity = quantity;
  }
}
