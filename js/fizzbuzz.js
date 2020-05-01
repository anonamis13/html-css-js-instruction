let para = "";

const loaded = () => {
    let divCtrl = document.getElementById("fizzbuzz");
    for (i = 1; i < 51; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            para = "<p style='color:purple'>FizzBuzz</p>";
        }
        else if (i % 3 == 0) {
            para = "<p style='color:red'>Fizz</p>";
        }
        else if (i % 5 == 0) {
            para = "<p style='color:blue'>Buzz</p>";
        }
        else {
            para = "<p style='color:green'>" + i + "</p>";
        }
        divCtrl.innerHTML += para;
    }
}