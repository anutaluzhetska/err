function withdrawMoney(amount, balance) {
    console.log(`Attempt to withdraw: ${amount} UAH ...`);
    if (amount > balance) {
        throw new Error ("Insufficient funds in the account!");   
    }
    if (amount <= 0) {
        throw new Error("Withdrawal amount must be greater than 0.")
    }
    return balance - amount;
}
try {
    let currentBalance = 500;
    let newBalance = withdrawMoney(1000, currentBalance);
    console.log(`Successful! Balance: ${newBalance} UAH`);
} catch (error) {
    console.error("Transaction canceled:" + error.message);
}
