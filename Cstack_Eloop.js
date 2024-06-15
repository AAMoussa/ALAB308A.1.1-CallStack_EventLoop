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


// In this code, the trampoline function is defined to handle recursion without causing a stack overflow. It repeatedly calls functions returned by the provided function until a non-function value is returned.

// The flattenArray function recursively flattens an array of nested arrays by processing each element one by one. If the element is an array, a trampolined function is returned to flatten it further. Otherwise, the element is pushed into the result array.

// The example input array nestedArray contains nested arrays. The trampoline function is called with a trampolined version of the flattenArray function to flatten nestedArray. Finally, the flattened array is logged to the console.