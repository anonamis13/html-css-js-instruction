let count = 0;

const inc = () => {
    count++;
    let inpt = document.getElementById("counter");
    inpt.style.removeProperty("color");
    inpt.style.removeProperty("font-style");
    inpt.style.removeProperty("font-weight");
    if (count % 2 == 0) {
        inpt.style.color='red';
    }
    if (count % 3 == 0) {
        inpt.style.fontStyle='italic';
    }
    if (count % 7 == 0) {
        inpt.style.fontWeight='bold';
    }
    if (count == 0) {
        inpt.style.removeProperty("color");
        inpt.style.removeProperty("font-style");
        inpt.style.removeProperty("font-weight");
    }
    inpt.value = count;
}

const dec = () => {
    count--;
    let inpt = document.getElementById("counter");
    inpt.style.removeProperty("color");
    inpt.style.removeProperty("font-style");
    inpt.style.removeProperty("font-weight");
    if (count % 2 == 0) {
        inpt.style.color='red';
    }
    if (count % 3 == 0) {
        inpt.style.fontStyle='italic';
    }
    if (count % 7 == 0) {
        inpt.style.fontWeight='bold';
    }
    if (count == 0) {
        inpt.style.removeProperty("color");
        inpt.style.removeProperty("font-style");
        inpt.style.removeProperty("font-weight");
    }
    inpt.value = count;
}