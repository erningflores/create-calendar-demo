const select = document.querySelector("select");
const h1 = document.querySelector("h1");
const ul = document.querySelector("ul");

select.addEventListener("change", setMonth);

function setMonth(){
    let choice = select.value;
    let day = 0;
    
    ul.innerHTML = '';

    switch(choice){
        case "jan":
        case "mar":
        case "may":
        case "jul":
        case "aug":
        case "oct":
        case "dec":
            day = 31;
            break;
        case "feb":
            day = 28;
            break;
        case "apr":
        case "jun":
        case "sep":
        case "nov":
            day = 30;
            break;
        default:
            day = 0;
            break;
    }
    for(let i=1; i<=day; i++){
        let dayElement = document.createElement("li");
        dayElement.textContent = i;
        ul.appendChild(dayElement);
    }

    h1.textContent = select.value;
}