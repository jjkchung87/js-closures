// function createAccount(pin, amount=0) {

//     let savedPin = pin;
//     let balance = amount;

//     return {
//         checkBalance: function(pin){
//             if(this.authenticate(pin)){
//                 return `$${balance}`
//             } else {
//                 return 'Invalid PIN.'
//             }
            

//         },
//         deposit: function(pin, amount){
//             if(this.authenticate(pin)){
//                 balance += amount;
//                 return `Successfully deposited $${amount}. Current balance: $${balance}.`
//                 } else {
//                 return 'Invalid PIN.'
//             }
//         },
//         withdraw: function(pin, amount){
//             if(amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
//             if(this.authenticate(pin)){
//                 balance -= amount;
//                 return `Successfully withdrew $${amount}. Current balance: $${balance}.`
//                 } else {
//                 return 'Invalid PIN.'
//             }
//         },
//         changePin: function(pin, newPin){
//             if(this.authenticate(pin)){
//                 savedPin = newPin
//                 return `PIN successfully changed!`
//                 } else {
//                 return 'Invalid PIN.'
//             }
//         },
//         authenticate: function(pin){
//            return pin === savedPin
//         }
//     };

// }

// module.exports = { createAccount };


function createAccount(pin, amount = 0) {
    return {
      checkBalance(inputPin) {
        if (inputPin !== pin) return "Invalid PIN.";
        return `$${amount}`;
      },
      deposit(inputPin, newAmount) {
        if (inputPin !== pin) return "Invalid PIN.";
        amount += newAmount;
        return `Successfully deposited $${newAmount}. Current balance: $${amount}.`;
      },
      withdraw(inputPin, withdrawalAmount) {
        if (inputPin !== pin) return "Invalid PIN.";
        if (withdrawalAmount > amount)
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        amount -= withdrawalAmount;
        return `Successfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
      },
      changePin(oldPin, newPin) {
        if (oldPin !== pin) return "Invalid PIN.";
        pin = newPin;
        return "PIN successfully changed!";
      }
    };
  }
  
  module.exports = { createAccount };
  