# # JavaScript Error Handling & Debugging Guide

This repository contains examples of handling errors in JavaScript: from basic `try...catch` constructs to analyzing critical system errors and infinite loops.

---

## Main sections

### 1. Validation and exception handling (Custom Errors)
* **Bank transactions**: Implementing balance checking with `throw new Error` in case of insufficient funds or incorrect amount.
* **User registration**: Multi-level validation of input data (variable type, age restrictions) using `TypeError` and generic error objects.

### 2. Asynchronous error handling (Async/Await)
* **Simulating API requests**: Using `Math.random()` to simulate unstable server operation.
* **Finally Block**: Demonstrates guaranteed code execution (closing the connection) regardless of whether the request was successful.

### 3. Diagnostics and Stack Trace
* **Error Traversal**: An example of how an error is passed up the call stack (from the database to the main function).
* **Stack Trace**: Outputs a detailed error path for quick debugging in the console.

### 4. Common Programming Errors (Common Bugs)
Examples of classic errors that stop program execution or overload the system:
* **ReferenceError**: Use of undeclared variables.
* **TypeError**: Attempting to call a number as a function.
* **RangeError**: Creating arrays with an invalid length.
* **SyntaxError**: Errors in code structure (missing parentheses).

### 5. Logical traps (Infinite Loops)
* Demonstration of infinite `for` and `while` loops that occur due to incorrect iteration conditions or errors in increment/decrement.

---

## Technology stack

* **try...catch...finally** — the main exception-catching mechanism.
* **throw new Error()** — creating your own error messages.
* **Error.stack** — analyzing the path of the problem.
* **Async/Await Error Handling** — handling errors in promises.
## How to use
Each code block is independent. You can run them in the browser console or Node.js environment to study the behavior of the interpreter when various types of errors occur.
