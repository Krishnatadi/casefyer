// Helper function to validate input
function validateInput(text) {
    if (typeof text !== 'string') {
        throw new Error('Invalid input: Only text is allowed.');
    }
}

// Function to convert text to uppercase
function convertToUppercase(text) {
    validateInput(text);
    return text.toUpperCase();
}

// Function to convert text to lowercase
function convertToLowercase(text) {
    validateInput(text);
    return text.toLowerCase();
}

// Function to convert text to sentence case
function convertToSentenceCase(text) {
    validateInput(text);
    return text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
}

// Function to convert text to title case
function convertToTitleCase(text) {
    validateInput(text);
    return text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

// Function to convert text to alternating case
function convertToAlternatingCase(text) {
    validateInput(text);
    return text.split('').map((c, i) =>
        i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');
}

// Function to convert text to inverse case
function convertToInverseCase(text) {
    validateInput(text);
    return text.split('').map(c =>
        c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    ).join('');
}

// Export the functions as part of the module
module.exports = {
    convertToUppercase,
    convertToLowercase,
    convertToSentenceCase,
    convertToTitleCase,
    convertToAlternatingCase,
    convertToInverseCase
};
