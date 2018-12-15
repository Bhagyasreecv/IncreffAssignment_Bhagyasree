var formObject = 
{
	Name : '',
	Age : 0,
    Gender: 'Female',
    Address: {
        line1 : 'hellsa',
        line2 : 'sajh',
        line3 : 'sagsg'
    },
    hobbies: ['sing','dance'],
    contact: "54356422",
    workExperience: "",
    company: {
        name: "jgj",
        currentprofile: "asgg"
    },
    "maritalStatus":""
};
var j =0;
var container = document.getElementById("form");
var tableEle = document.getElementById("myTable");
var headingRow = tableEle.insertRow(0);
var valueRow = tableEle.insertRow(1);


objIteration(formObject);
createTable(formObject);


function objIteration(myObj){
    for(obj in myObj){
        if(typeof(myObj[obj]) === 'object' && myObj[obj]!== null){
            j=0;
            var heading = document.createElement("Label");
            heading.innerHTML = obj;
            heading.classList.add("inputField");
            lineBreak();
            lineBreak();
            container.appendChild(heading);
            lineBreak();
            objIteration(myObj[obj]);
        }
        else
        createForm(obj,myObj);
    }
}

function createForm(field,formObj){
    console.log("field--->"+field);
    console.log("value--->"+formObj[field]);
    
	if(j>0 && j%2==0){
        lineBreak();
        lineBreak();
    }
    var element = document.createElement("input");
    var label = document.createElement("Label");
    label.innerHTML = field;

    element.setAttribute("type","text");
    element.value = formObj[field];
    label.classList.add("inputField");
    element.classList.add("myTextBox");

    container.appendChild(label);
    container.appendChild(element);
    j++;
}

function lineBreak(){
    var brk = document.createElement("br");
        container.appendChild(brk);
}

function createTable(myObj){
    var i=0;
    for(field in myObj){
        var headingCell = headingRow.insertCell(i);
        var headingText = document.createTextNode(field);
        headingCell.appendChild(headingText);

        if(typeof(myObj[field]) === 'object' && myObj[field]!== null){
            var childObj = myObj[field];
            var valueCell = valueRow.insertCell(i);
            for(child in childObj){
                var valueText = document.createTextNode(child+":"+childObj[child]);
                var brk = document.createElement("br");
                valueCell.appendChild(brk);
                valueCell.appendChild(valueText);
            }
           
        }
        else{
            var valueCell = valueRow.insertCell(i);
            var valueText = document.createTextNode(myObj[field]);
            valueCell.appendChild(valueText);
        }
        i++;
    }
}
