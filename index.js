let count = 0

// let greetings = document.getElementById("welcome-el")
let counts = document.getElementById("counter")
let saveCounter = document.getElementById("counterSave")
let instructors = document.getElementById("welcome-el")
let greetings = "Welcome To Computer Science Department instructor - "

/* 
let welcomeEl = "Welcome To Computer Science Department "


greetings.innerHTML = welcomeEl 
 */
function increment() {
    count += 1
    counts.textContent = count
    
}

function save() {
    saveCounter.textContent += count + " - "
    count = 0
    
    counts.textContent = count  
       
}

function handleSelectInstructor() {

        
    var selectElement = event.target;
    var value = selectElement.value;

    instructors.innerHTML = greetings + value
}

function handleSelectDepartment() {
       
    let departs = document.getElementById("department-review")

    var selectElement = event.target;
    var value = selectElement.value;
    

    departs.innerHTML = "Department: " + value
    saveCounter.innerHTML = "Saved Number: " + " "
    
}



