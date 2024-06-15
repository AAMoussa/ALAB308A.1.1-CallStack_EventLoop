// Part 2: Trampolines

// Trampoline function to handle recursion without causing stack overflow
function trampoline(fn) {
    let result = fn(); // Initial function call
    while (typeof result === 'function') {
        result = result(); // Continue calling functions until a non-function value is returned
    }
    return result;
}

// Recursive function to flatten an array of nested arrays
function flattenArray(arr, result = []) {
    if (arr.length === 0) {
        return result;
    }
    const [head, ...tail] = arr;
    if (Array.isArray(head)) {
        return () => flattenArray([...head, ...tail], result); // Trampoline the recursive call
    }
    result.push(head);
    return () => flattenArray(tail, result); // Trampoline the recursive call
}

// Example input array
const nestedArray = [1, [2, [3, 4]], 5, [6]];

// Call trampoline with the trampolined flattenArray function
const flattenedArray = trampoline(() => flattenArray(nestedArray));

console.log("Flattened Array:", flattenedArray);