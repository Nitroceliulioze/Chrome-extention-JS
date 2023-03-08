let myLeads = [];
const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        console.log(tabs[0].url)
    })    
});

function render(leads) {
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" same as:

        listItems += `
            <li>
                <a traget="_blank" href="${leads[i]}"> 
                    ${leads[i]}
                </a>
            </li>
        `
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)    
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads)
});


// changing type 

// myLeads = JSON.parse(myLeads)
// console.log(typeof myLeads)
// myLeads.push("bla bla")
// console.log(myLeads)
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)






// falsy values

// false
// 0
// ""
// null
// undefined
// NaN