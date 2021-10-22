import snacks from "./snacks.js";

class VendingMachine {
  constructor(snacks) {
    this.snacks = snacks;
    this.coins = {
      twinty: "0.2",
      ten: "0.1",
      onedollar: "1",
      fifty: "0.5",
    };
    this.moneyOnMachine = 50;
  }

  insertCoins(moneyAdded) {
    this.moneyOnMachine += moneyAdded;
  }

  checkCoins(coinsAdded) {
    if (
      coinsAdded == 0.2 ||
      coinsAdded == 0.1 ||
      coinsAdded == 0.5 ||
      coinsAdded == 1
    ) {
      return true;
    }
    return false;
  }

  currentSnacks() {
    return snacks;
  }

  itemPurchase(selectedSnack, userMoney) {
    const snack = snacks[selectedSnack - 1];
    const price = snack.price;
    console.log("snack", snack, price);
    if (price <= userMoney) {
      return userMoney - price;
    } else {
      return false;
    }
  }

  returnChange(selectedSnack, totalPayment) {
    selectedSnack = selectedSnack - 1;
    const snack = snacks[selectedSnack];
    const price = snack.price;
    const result = parseInt(totalPayment) - price;

    switch (true) {
      case result > 1:
        return `Your change is ${result} dollars`;

      case result === 1:
        return `Your change is ${result} dollar`;

      case result < 1:
        return `Your change is ${result} cents`;

      case result === 1.5:
        return `Your change is ${result} dimes and ${
          Math.floor(result) % 2
        } quarters`;

      case result === 0:
        return `Exact payment! Thanks`;
    }
  }

 
}

export default VendingMachine;
