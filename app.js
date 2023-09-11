const quizData = [
    {
        question: 'Türkiye Cumhuriyeti kuruluş tarihi nedir?',
        a:'1920',
        b:'1922',
        c:'1915',
        d:'1923',
        e:'1911',
        correct:'d'
    },
    {
        question: '1.Dünya Savaşı başlangıç yılı hangisidir?',
        a:'1912',
        b:'1913',
        c:'1914',
        d:'1915',
        e:'1916',
        correct:'c'
    },
    {
        question: '2.Meşrutiyet hangi yıl ilan edilmiştir?',
        a:'1905',
        b:'1910',
        c:'1907',
        d:'1911',
        e:'1908',
        correct:'e'
    },
    {
        question: 'Kanuni Sultan Süleyman hangi yıl tahta çıkmıştır?',
        a:'1520',
        b:'1523',
        c:'1519',
        d:'1522',
        e:'1521',
        correct:'a'
    },
    {
        question: 'Tahta çıkan 5.Osmanlı padişahı kimdir?',
        a:'2.Murad',
        b:'1.Mehmed',
        c:'Yıldırım Bayezid',
        d:'Orhan Gazi',
        e:'2.Mehmed',
        correct:'b'
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e

}

function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', ()=> {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML = `
            <h2> Test tamamlandı, ${score*20} puan aldınız </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene </button>
            `
        }
    }
})

