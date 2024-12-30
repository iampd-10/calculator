function add(){
   let num1 = document.getElementById('input').value; 
    let num2 = document.getElementById('input2').value;
    if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {
        alert("Invalid input");
    } else {
        let num1Number = parseFloat(num1);
        let num2Number = parseFloat(num2);
        let sum = num1Number + num2Number;
        document.getElementById("display").innerHTML = "The sum is: " + sum;
    }
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
}
function sub(){
    let num1 = document.getElementById('input').value;
    let num2 = document.getElementById('input2').value;
    if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {
        alert("Invalid input");
    } else {
        let num1Number = parseFloat(num1);
        let num2Number = parseFloat(num2);
        let sub = num1Number - num2Number;
        document.getElementById("display").innerHTML = "The difference is: " + sub;
    }
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
}
function div(){
    let num1 = document.getElementById('input').value;
    let num2 = document.getElementById('input2').value;
    if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {
        alert("Invalid input");
    } else {
        let num1Number = parseFloat(num1);
        let num2Number = parseFloat(num2);
        let sub = num1Number / num2Number;
        document.getElementById("display").innerHTML = "The div is: " + sub.toFixed(2);
    }
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
}
function mul(){
    let num1 = document.getElementById('input').value;
    let num2 = document.getElementById('input2').value;
    if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {
        alert("Invalid input");
    } else {
        let num1Number = parseFloat(num1);
        let num2Number = parseFloat(num2);
        let sub = num1Number * num2Number;
        document.getElementById("display").innerHTML = "The multiplication is: " + sub.toFixed(2);
    }
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
}
function double(){
    let num1 = document.getElementById('input').value;
    let num2 = document.getElementById('input2').value;
    if (isNaN(num1) || num1 === "" || isNaN(num2) || num2 === "") {
        alert("Invalid input");
    } else {
        let num1Number = parseFloat(num1);
        let num2Number = parseFloat(num2);
        let sub = num1Number ** num2Number;
        document.getElementById("display").innerHTML = "The explontional is: " + sub.toFixed(2);
    }
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
}
function clear(){
    document.getElementById("input").value = ""
    document.getElementById("input2").value = ""
    document.getElementById("display").innerHTML = ""
}