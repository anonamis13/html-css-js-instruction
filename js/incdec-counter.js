let count = 0;

const inc = () => {
    count++;
    display(count);
}

const dec = () => {
    count--;
    display(count);
}

function display (count) {
    let inpt = document.getElementById("counter");
    
    inpt.style.color = (count % 2 == 0) ? "red" : "black";
    inpt.style.fontStyle = (count % 3 == 0) ? "italic" : "normal";
    inpt.style.fontWeight = (count % 7 == 0) ? "bold" : "normal";

    if (count == 0) {
        inpt.style.removeProperty("color");
        inpt.style.removeProperty("font-style");
        inpt.style.removeProperty("font-weight");
    }
    inpt.value = count;
}