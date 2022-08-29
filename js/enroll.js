const primaryBtn = document.getElementById("primaryBtn")
const secondaryBtn = document.getElementById("secondaryBtn")

primaryBtn.addEventListener("click", () =>{
    let amount = 3000
    const confirmed = confirm(`Please note that you will pay ${amount}NGN before you proceed`)
    if (confirmed) {
        alert("Please wait while you are redirected to the payment link")
        location.href = "primary.html"
    }else{
        alert("Alright! you will be redirected to the home page")
        location.href = "index.html"
    }
})
secondaryBtn.addEventListener("click", () =>{
    let amount = 0
    const confirmed = confirm(`Please note that you will pay ${amount}NGN before you proceed`)
    if (confirmed) {
        alert("Please wait while you are redirected to the payment link")
        location.href = "secondary.html"
    }else{
        alert("Alright! you will be redirected to the home page")
        location.href = "index.html"
    }
})

/* const next = document.getElementById("nextBtn")
const cancel = document.getElementById("cancelBtn")
const form = document.querySelector(".hide")
const quizDisplay = document.querySelector(".quiz")
//cancel button
cancel.addEventListener("click", ()=>{
    let confirmed = confirm("You are about to cancel your enrollment. Are you really sure you want to quit?")
    if(confirmed){
        alert("You cancelled the enrollment");
    }else{
        alert("Alright, lets continue")
    }
});
//next button
next.addEventListener("click", ()=>{
    alert("You are about to start the test. Click okay to continue")
    quiz()
})

const testQuestions = [
    {
        question: "What is 10/2?",
        answers : {
            a : "3",
            b : "5",
            c : "115"
        },
        correctAnswer : "b"
    },
    {
        question: "What is 10/2?",
        answers : {
            a : "3",
            b : "5",
            c : "115"
        },
        correctAnswer : "b"
    },
    {
        question: "What is 10/2?",
        answers : {
            a : "3",
            b : "5",
            c : "115"
        },
        correctAnswer : "b"
    },
    {
        question: "What is 10/2?",
        answers : {
            a : "3",
            b : "5",
            c : "115"
        },
        correctAnswer : "b"
    },
    {
        question: "What is 10/2?",
        answers : {
            a : "3",
            b : "5",
            c : "115"
        },
        correctAnswer : "b"
    },
]

const generateQuiz = (questions, quizContainer, resultContainer, submitButton) =>{
    showQuestions(questions, quizContainer)
}

//show question function


 */