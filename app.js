const quizData = [
    {
        question: 'How old is Azamat?',
        a: '10',
        b: '17',
        c: '25',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the best programming language in 2021?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the President of USA?',
        a: 'Donald Tramp',
        b: 'Barak Obama',
        c: 'Joe Biden',
        d: 'Osama Bin Laden',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '1996',
        c: '2018',
        d: '1995',
        correct: 'd'
    }
]


const container = document.getElementById('container')
const title = document.getElementById('title')
const user = document.querySelectorAll('.user')
const variant_a = document.getElementById('variant-a')
const variant_b = document.getElementById('variant-b')
const variant_c = document.getElementById('variant-c')
const variant_d = document.getElementById('variant-d')
const btn = document.getElementById('btn')

let currentQuiz = 0
let score = 0

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    title.innerText = currentQuizData.question
    variant_a.innerText = `${currentQuizData.a} years old`
    variant_b.innerText = `${currentQuizData.b} years old`
    variant_c.innerText = `${currentQuizData.c} years old`
    variant_d.innerText = `${currentQuizData.d} years old`
}
loadQuiz()

function getSelected() {
    let answer = undefined
    for (let index = 0; index < user.length; index++) {
        let element = user[index];
        if(element.checked) {
            answer = element.id
        }
    }
    return answer
}

function deselectAnswers() {
    user.forEach(function(userInput) {
        userInput.checked = false
    })
}

btn.addEventListener('click', function() {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            container.innerHTML = `
                <h2>Umumiy savol ${quizData.length} / to'g'ri javob ${score}</h2>
                <button onclick="location.reload()">Qayta yuklash</button>  
            `
        }
    }
})