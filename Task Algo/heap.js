function adjustHeap(array, size, rootIndex) {
    let maxIndex = rootIndex;
    let leftChild = 2 * rootIndex + 1;
    let rightChild = 2 * rootIndex + 2;

    if (leftChild < size && array[leftChild] > array[maxIndex]) {
        maxIndex = leftChild;
    }

    if (rightChild < size && array[rightChild] > array[maxIndex]) {
        maxIndex = rightChild;
    }

    if (maxIndex !== rootIndex) {
        let temp = array[rootIndex];
        array[rootIndex] = array[maxIndex];
        array[maxIndex] = temp;

        adjustHeap(array, size, maxIndex);
    }
}

function sortWithHeap(array) {
    let length = array.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        adjustHeap(array, length, i);
    }

    for (let i = length - 1; i > 0; i--) {
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        adjustHeap(array, i, 0);
    }
}

function displayArray(array) {
    array.forEach(item => console.log(item + " "));
    console.log();
}

let numbers = [9, 4, 3, 8, 10, 2, 5];
sortWithHeap(numbers);
console.log;
displayArray(numbers);