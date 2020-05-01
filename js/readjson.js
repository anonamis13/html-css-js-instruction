let colors = ["red", "white", "blue"];
let students = [
    {name: "Andrew", favNumber: 27},
    {name: "Jeff", favNumber: 5},
    {name: "Trevor", favNumber: 11},
    {name: "Tyler", favNumber: 44},
    {name: "Dennis", favNumber: 6}
];
let total = 0;
let count = 0;

const loaded = () => {
    let ulCtrl = document.getElementById("students");
    for (let student of students) {
        let liTag = `<li>${student.name} whose favorite number is ${student.favNumber}`;
        ulCtrl.innerHTML += liTag;
    }
    
    let divCtrl = document.getElementById("colors");
    for (let color of colors) {
        let para = "<p>" + color + "</p>";
        divCtrl.innerHTML += para;
    }

    let divCtrl2 = document.getElementById("numbers");
    for (i = 1; i < 51; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            total += i;
            count++;
        }
    }
    let para = "<p>" + "Total: " + total + "</p>"
    divCtrl2.innerHTML += para;
    let para2 = "<p>" + "Average: " + total/count + "</p>"
    divCtrl2.innerHTML += para2;
}