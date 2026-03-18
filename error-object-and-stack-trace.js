function validateDatabase() {
    throw new Error ("Critical database error!");
}
function processOrder() {
    console.log("Checking database ... ");
    validateDatabase();
}
function startApp(){
    try {
        processOrder();
    } catch (error) {
        console.log("--- STANDARD MESSAGE ---");
        console.log(error.message);

        console.log("\n--- STACK TRACE (ERROR PATH) ---");
        console.log(error.stack);
    }
}
startApp();
