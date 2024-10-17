function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

function findMaxElement(arr) {
    return Math.max(...arr);
}


function handleRotateArray() {
    const arrayInput = document.getElementById("arrayInput").value;
    const steps = parseInt(document.getElementById("stepsInput").value);

    const arr = arrayInput.split(',').map(Number);  
    const rotatedArr = rotateArray(arr, steps);

    document.getElementById("rotateResult").innerText = "Rotated Array: " + rotatedArr;
}


function handleFindMax() {
    const arrayInput = document.getElementById("arrayInput").value;

    const arr = arrayInput.split(',').map(Number);  
    const maxElement = findMaxElement(arr);

    document.getElementById("maxResult").innerText = "Maximum Element: " + maxElement;
}
