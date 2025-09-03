// Clean Code Utilities Entry Point

/**
 * A function to demonstrate a clean code snippet in JavaScript.
 * @param {string} name - The name of the user.
 * @returns {string} A greeting message.
 */
function greetUser(name) {
    if (!name) {
        throw new Error('Name is required');
    }
    return `Hello, ${name}!`;
}

console.log(greetUser('World')); // Output: Hello, World!