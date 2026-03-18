function registerUser(age) {
    console.log(`--- User registration (age: ${age}) ---`);
    try {
        if (typeof age !== 'number') {
            throw new TypeError("You entered the wrong number!");
        }
        if (age < 18) {
            throw new Error("Registration is only allowed from 18 years of age.");
        }
        if (age > 120) {
            throw new Error("You seem too wise for our service (enter your actual age).");
        }
        console.log("Success! User registered.")
    } catch (error) {
        console.error(`Registration error: ${error.message}`);
    } finally {
        console.log("------------------------------------------\n");
    }
}
registerUser(25);
registerUser(15);
registerUser("багато");
registerUser(170);
