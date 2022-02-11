let getData = JSON.parse(localStorage.getItem("Operations"));



let arrayData = [];

function Open(){

    let SectionOptions = document.getElementById("OSection");

    let SectionCalculator = document.getElementById("CSection");

    SectionCalculator.style.height = window.innerHeight + "px";

    getData.map(function(x){

        arrayData.push(x);
        
    })

    

        arrayData.map(function(x){

            let section = document.createElement("div")

            let operation = document.createElement("div");

            let result = document.createElement("div");

            section.className = "OptionItems";

            operation.className = "OperactionItem";

            result.className = "ResultItem";

            operation.innerHTML = x.Operation;

            result.innerHTML = x.Result;

            section.appendChild(operation);

            section.appendChild(result);

            SectionOptions.appendChild(section);

        });

        SectionOptions.scrollTop = SectionOptions.scrollHeight;


}

window.onload = Open;



let process = document.getElementById("process");
let Operator = document.getElementById("Operator");
let Clear = document.getElementById("Clear");
let ClearE = document.getElementById("ClearE");
let Back = document.getElementById("Back");
let Divide = document.getElementById("Divide");
let Seven = document.getElementById("Seven");
let Eight = document.getElementById("Eight");
let Nine = document.getElementById("Nine");
let Multi = document.getElementById("Multi");
let Four = document.getElementById("Four");
let Five = document.getElementById("Five");
let Six = document.getElementById("Six");
let Rest = document.getElementById("Rest");
let One = document.getElementById("One");
let Two = document.getElementById("Two");
let Three = document.getElementById("Three");
let Sum = document.getElementById("Sum");
let Change = document.getElementById("Change");
let Zero = document.getElementById("Zero");
let Point = document.getElementById("Point");
let Equal = document.getElementById("Equal");

Operator.focus();

Clear.onclick = function(){

    Operator.value = ""; 

    Operator.focus();
}
ClearE.onclick = function(){

    process.innerHTML = "";

    Operator.value = "";  

    Operator.focus();
}
Back.onclick = function(){

    Operator.value = Operator.value.substring(0, Operator.value.length - 1);

    Operator.focus();
}
Divide.onclick = function(){

    Operator.value += " / "; 
}
Seven.onclick = function(){

    Operator.value += "7"; 
}
Eight.onclick = function(){

    Operator.value += "8"; 
}
Nine.onclick = function(){

    Operator.value += "9"; 
}
Multi.onclick = function(){

    Operator.value += " * "; 
}
Four.onclick = function(){

    Operator.value += "4"; 
}
Five.onclick = function(){

    Operator.value += "5"; 
}
Six.onclick = function(){

    Operator.value += "6"; 
}
Rest.onclick = function(){

    Operator.value += " - "; 
}
One.onclick = function(){

    Operator.value += "1"; 
}
Two.onclick = function(){

    Operator.value += "2"; 
}
Three.onclick = function(){

    Operator.value += "3"; 
}
Sum.onclick = function(){

    Operator.value += " + "; 
}
Change.onclick = function(){

    if(Operator.value == ""){return;}

    Operator.value = eval(Operator.value)*-1;  
}
Zero.onclick = function(){

    Operator.value += "0"; 
}
Point.onclick = function(){

    Operator.value += "."; 
}
Equal.onclick = function(){

    if(Operator.value == ""){return;}

        process.innerHTML = Operator.value + " =";

        Operator.value = eval(Operator.value); 

  
    let Operations = {

        Operation: process.innerHTML,

        Result: Operator.value
    }

    arrayData.push(Operations);

    localStorage.setItem("Operations", JSON.stringify(arrayData));

    let SectionOptions = document.getElementById("OSection");

    let section = document.createElement("div")

    let operation = document.createElement("div");

    let result = document.createElement("div");

    section.className = "OptionItems";

    operation.className = "OperactionItem";

    result.className = "ResultItem";

    operation.innerHTML = process.innerHTML;

    result.innerHTML = Operator.value;

    section.appendChild(operation);

    section.appendChild(result);

    SectionOptions.appendChild(section);

    SectionOptions.scrollTop = SectionOptions.scrollHeight;
   
}

let deleteH = document.getElementById("deleteH");

deleteH.onclick = function(){

    localStorage.removeItem("Operations");

    let gatdelete = document.getElementsByClassName("OptionItems");

    let count = 0;

    while(count <= gatdelete.length){

        gatdelete[count].style.display = "none";

        count += 1;
    }

   
}

 