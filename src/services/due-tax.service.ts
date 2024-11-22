export class DueTaxService {
  taxRate = 0.2;
  taxExemptAmount = 20000;
  public tax = 0;

  calculateTax = async (totalValue: number, gain: number) => {
    if (totalValue > this.taxExemptAmount) {
      this.tax = gain * this.taxRate;
    }
  };
}
