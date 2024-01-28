class Achraf {
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
}

let q1H = new Achraf("What does HTML stand for?", ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "High-level Text Markup Language", "Hyperlink and Text Markup Language"], ["Hyper Text Markup Language"])
let q2H = new Achraf("Which tag is used to create a hyperlink in HTML?", ["link", "a", "hlink", "hyper"], ["a"])
let q3H = new Achraf("What is the purpose of the HTML &lt; head &gt; element?", ["It defines the main content of the document", "It contains metadata about the document", "It defines a header for a document or section", "It creates a navigation link"], ["It contains metadata about the document"])
let q4H = new Achraf("Which HTML tag is used for creating an unordered list?", ["ol", "list", "ul", "li"], ["ul"])
let q5H = new Achraf("What does the HTML &lt; br &gt; tag do?", ["Breaks the document into sections", "Adds a bold text", "Creates a line break", "Represents a clickable button"], ["Creates a line break"])

let q1C = new Achraf("How do you select an element with the class name (example) in CSS?", ["#example", ".example", "example", "%example%"], [".example"])
let q2C = new Achraf("What property is used to change the text color in CSS?", ["color", "text-color", "font-color", "text-style"], ["color"])
let q3C = new Achraf("How can you center an element horizontally in CSS?", ["align: center", "margin: auto", "position: center", "float: center"], ["margin: auto"])
let q4C = new Achraf("What does CSS stand for?", ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "Colorful Style Sheet"], ["Cascading Style Sheet"])
let q5C = new Achraf("Which CSS property is used to control the spacing between elements?", ["spacing", "margin", "padding", "border-spacing"], ["margin"])

let q1J = new Achraf("What is the correct way to declare a variable in JavaScript?", ["new var variableName;", "let variableName;", "variable variableName;", "var = variableName;"], ["let variableName;"])
let q2J = new Achraf("What function is used to output content to the console in JavaScript?", ["console.log()", "output.console()", "print.console()", "log.console()"], ["console.log()"])
let q3J = new Achraf("How do you check the type of a variable in JavaScript?", ["variable.type()", "typeOf variable;", "typeof variable;", "checkType(variable)"], ["typeof variable;"])
let q4J = new Achraf("What does the === operator do in JavaScript?", ["Checks for equality without type conversion", "Assigns a value to a variable", "Concatenates two strings", "Compares values with type conversion"], ["Checks for equality without type conversion"])
let q5J = new Achraf(" What is the purpose of the querySelector method in JavaScript?", ["To select multiple elements", "To query the database", "To select the first element that matches a specified CSS selector", "To select elements by their tag name"], ["To select the first element that matches a specified CSS selector"])

let htmlQ = [q1H, q2H, q3H, q4H, q5H]
let cssQ = [q1C, q2C, q3C, q4C, q5C]
let jsQ = [q1J, q2J, q3J, q4J, q5J]

let home = document.querySelector('#page1')
let game = document.querySelector('#page2')

let choose = []
let subject;
let startB = document.querySelector('.start')

let trophePdiv = document.querySelector('.badges')

let tropheW = document.querySelector('.trophe')

let subj = document.querySelectorAll('.subj');
subj.forEach(s => {
    s.addEventListener("click", () => {
        subject = s.innerHTML
        startB.classList.remove('pe-none')
        if (s.innerHTML == `HTML`) {

            choose = htmlQ
            trophePdiv.children[0].classList.remove("d-none")
            start()
        } else if (s.innerHTML == "CSS") {
            choose = cssQ
            trophePdiv.children[1].classList.remove("d-none")
            start()
        } else {
            choose = jsQ
            trophePdiv.children[2].classList.remove("d-none")
            start()
        }
    })
});

let result = 0;
let nextQ = document.querySelector('#mowali')
let mainQ = document.querySelector('.mainDiv')
let counter = 0;
let suggestion = document.querySelectorAll(".ques")
let parentQ = document.querySelector(".question")
let btns = Array.from(parentQ.children)
let correct;
let selectB;

let htmlB = document.querySelector('.html')
let cssB = document.querySelector('.css')
let jsB = document.querySelector('.js')

let quest = choose[counter];

let timeCircle = document.querySelector('.waqt')
let startTime
function timeA() {
    let time = 15;
    startTime = setInterval(timing, 1000)
    function timing() {
        time--
        timeCircle.innerHTML = time
        stopTiming()
    }
    function stopTiming() {
        if (time == 0) {
            clearInterval(startTime)
            nextQ.click()
        }
    }
}

// ***************
function start() {
    choose.sort(() => Math.random() - .5)
    result = 0;
    counter = 0;
    showQ()
}

function showQ() {
    quest = choose[counter];
    mainQ.innerHTML = quest.question;
    quest.choices.sort(() => Math.random() - .5)
    for (let index = 0; index < 4; index++) {
        let answers = btns[index];
        answers.innerHTML = quest.choices[index]
        let right = answers.innerHTML.includes(quest.answer)
        if (right === true) {
            correct = answers
        }
    }
    btns.forEach(e => {
        e.addEventListener('click', selectA)
    });
}

function selectA(e) {
    selectB = e.target
    let element = selectB.innerHTML
    if (quest.answer.includes(element)) {
        result += 20;
        selectB.style.background = "green"
        btns.forEach(ele => {
            ele.classList.add('pe-none')
        });
    } else {
        selectB.style.background = "red"
        correct.style.background = "green"
        btns.forEach(ele => {
            ele.classList.add('pe-none')
        });
    }
}

function resetB() {
    mainQ.innerHTML = ""
    btns.forEach(element => {
        element.innerHTML = ""
        element.classList.remove('pe-none')
        element.style.background = "#393a57"
        correct.style.background = "#393a57"
    });
}

function showR() {
    console.log(selectB);
    mainQ.innerHTML = "";
    mainQ.innerHTML = `you score is ${result} out of 100 !`
    parentQ.style.display = "none"
    nextQ.innerHTML = "Menu"
    if (subject == "HTML" && result > 75) {
        tropheW.children[0].classList.remove('d-none')
        htmlB.classList.add('pe-none')
    } else if (subject == "CSS" && result > 75) {
        tropheW.children[1].classList.remove('d-none')
        cssB.classList.add('pe-none')
    } else if (subject == "JS" && result >= 75) {
        tropheW.children[2].classList.remove('d-none')
        jsB.classList.add('pe-none')
    } else if (subject == "HTML" && result < 75) {
        htmlB.classList.add('pe-none')
        setTimeout(() => {
            htmlB.classList.remove('pe-none')
        }, 60000);
    } else if (subject == "CSS" && result < 75) {
        cssB.classList.add('pe-none')
        setTimeout(() => {
            cssB.classList.remove('pe-none')
        }, 60000);
    } else if (subject == "JS" && result < 75) {
        jsB.classList.add('pe-none')
        setTimeout(() => {
            jsB.classList.remove('pe-none')
        }, 60000);
    }
}

nextQ.addEventListener("click", () => {
    if (nextQ.innerHTML == "Next") {
        clearInterval(startTime)
        timeA()
        if (counter < htmlQ.length - 1) {
            resetB()
            counter++
            showQ()
            if (subject == "HTML") {
                showQ(htmlQ)
            } else if (subject == "CSS") {
                showQ(cssQ)
            } else {
                showQ(jsQ)
            }
        } else {
            showR()
        }
    } else {
        clearInterval(startTime)
        resetB()
        home.classList.toggle('d-none')
        game.classList.toggle('d-none')
        parentQ.style.display = "block"
        nextQ.innerHTML = "Next"
        trophePdiv.children[0].classList.add("d-none")
        trophePdiv.children[1].classList.add("d-none")
        trophePdiv.children[2].classList.add("d-none")
        startB.classList.add('pe-none')
    }
});

startB.addEventListener('click', () => {
    home.classList.toggle('d-none')
    game.classList.toggle('d-none')
    clearInterval(startTime)
    timeA()
    start()
})
