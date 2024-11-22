import { FinancialTransaction } from "../models/financial-transaction";

export const transactions: FinancialTransaction[] = [
  { operation: "buy", "unit-cost": 10.0, quantity: 10000.0 },
  { operation: "sell", "unit-cost": 20.0, quantity: 5000.0 },
];

export const doubleTransactions: FinancialTransaction[][] = [
  [
    { operation: "buy", "unit-cost": 10.0, quantity: 10000 },
    { operation: "sell", "unit-cost": 20.0, quantity: 5000 },
  ],
  [
    { operation: "buy", "unit-cost": 20.0, quantity: 10000 },
    { operation: "sell", "unit-cost": 10.0, quantity: 5000 },
  ],
];
