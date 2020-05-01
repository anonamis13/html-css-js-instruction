function min () {
    let min = document.getElementById("result");
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    if (n1 < n2) {
        min.value = n1;
    }
    else if (n1 > n2) {
        min.value = n2;
    }
    else {
        min.value = "equal";
    }
}

function isEven () {
    let even = document.getElementById("evenResult");
    let numTest = document.getElementById("isEvenInput").value;
    
    if (isEvenTest(numTest)) {
        even.value = "odd";
    }
    else {
        even.value = "even";
    }
}

function isEvenTest (numTest) {
    if (numTest == 0) {
        return 0;
    }
    else if (numTest == 1) {
        return 1;
    }
    else if (numTest < 0 ) {
        return isEvenTest(-numTest);
    }
    else {
        return isEvenTest(numTest - 2);
    }
    
}