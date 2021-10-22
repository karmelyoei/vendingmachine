import VendingMachine from "./vendingMachine.js";
let btn = document.querySelectorAll("button");

let vendingMachine = new VendingMachine();

btn.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log("element", element.id);
    event.preventDefault();
    const currentSnacks = vendingMachine.currentSnacks();
    console.log(currentSnacks);
    currentSnacks.forEach((snack) => {
      if (snack.id == element.id) {
        if (snack.quantity == 0) {
          alert("Sorry we run out of this snack try another one");
        } else {
          let paymentOption = prompt(
            "Please insert the number of payment option \n 1.coins , 2.Cridet Card 3.CashPaper"
          );
          if (paymentOption == 1) {
            let coins = prompt(
              "Please insert coins it should be (0.1 , 0.2 , 0.5, 1$ only"
            );
            let check = vendingMachine.checkCoins(coins);
            console.log(check);
            if (check == false) {
              alert(
                "the coins should be either 0.1 , 0.2 , 0.5, 1$ Only, Please try again"
              );
            } else {
              let purchase = vendingMachine.itemPurchase(snack.id, coins);
              if (purchase == false) {
                coins = prompt(
                  `the money is not Sufficient for this snack please insert ${snack.price}`
                );
              }
              let insertCoin = vendingMachine.insertCoins(coins);
              alert(
                `the snack name is ${snack.name} and the price is ${snack.price} please wait till we are process it`
              );
              let change = vendingMachine.returnChange(snack.id, coins);
              alert("Heres your Snack Bon appitete");

              if (change) {
                alert(`Please take ${change}`);
              } else {
                alert(`Enjoy your snack :) - total balance ${insertCoin}`);
              }
            }
          } else {
            alert(
              "sorry this option is not functioning at this moment please insert coins"
            );
          }
        }
      }
    });
  });
});
