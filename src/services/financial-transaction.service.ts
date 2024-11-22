import { DueTaxService } from "./due-tax.service";

export class FinancialTransactionService {
  public currentQuantityShares: number;
  public weightedAveragePrice: number;
  public valueGainOrLoss: number;

  constructor(
    currentQuantityShares: number,
    weightedAveragePrice: number,
    valueGainOrLoss: number
  ) {
    this.currentQuantityShares = currentQuantityShares;
    this.weightedAveragePrice = weightedAveragePrice;
    this.valueGainOrLoss = valueGainOrLoss;
  }

  public calculateWeightedAveragePrice = async (
    unitCost: number,
    quantity: number
  ): Promise<void> => {
    this.weightedAveragePrice =
      this.currentQuantityShares * this.weightedAveragePrice +
      (unitCost * quantity) / (this.currentQuantityShares + quantity);
  };

  public buyShares = async (unitCost: number, quantity: number): Promise<number> => {
    await this.calculateWeightedAveragePrice(unitCost, quantity);
    this.currentQuantityShares += quantity;

    return 0;
  };

  public calculateGain = async (unitCost: number, quantity: number): Promise<number> => {
    return unitCost * quantity - this.weightedAveragePrice * quantity;
  };

  public verifyHasGain = async (gainValue: number, unitCost: number): Promise<boolean> => {
    return this.valueGainOrLoss + gainValue > 0 && unitCost >= this.weightedAveragePrice;
  };

  public calculateTotalTransaction = async (
    unitCost: number,
    quantity: number
  ): Promise<number> => {
    return unitCost * quantity;
  };

  public sellShares = async (unitCost: number, quantity: number): Promise<number> => {
    const dueTax = new DueTaxService();

    this.currentQuantityShares -= quantity;

    let gainValue = await this.calculateGain(unitCost, quantity);

    const hasGain = await this.verifyHasGain(gainValue, unitCost);

    if (!hasGain) {
      this.valueGainOrLoss += gainValue;

      await dueTax.calculateTax(0, 0);

      return dueTax.tax;
    }

    const totalTransactionValue = await this.calculateTotalTransaction(unitCost, quantity);

    if (this.valueGainOrLoss < 0) {
      gainValue += totalTransactionValue;
    }

    this.valueGainOrLoss += gainValue;

    await dueTax.calculateTax(totalTransactionValue, gainValue);

    return Number(dueTax.tax.toFixed(2));
  };
}
