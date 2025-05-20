const questions = [
    {
        "question": "Какая уязвимость в протоколе TLS может привести к компрометации данных при неправильной настройке сертификатов и слабых параметров шифрования?",
        "time_limit": 30,
        "answers": [
            { "text": "POODLE", "correct": true },
            { "text": "Heartbleed", "correct": false },
            { "text": "CRIME", "correct": false },
            { "text": "BEAST", "correct": false }
        ]
    },
    {   type: "multiple",
        "question": "Метод атак используемый для уязвимости в операционной системе для получения привилегий в системе, манипулируя кешем оперативной памяти? (выберите 2)",
        "time_limit": 35,
        "answers": [
            { text: "Spectre", correct: true },
            { text: "Rowhammer", correct: false },
            { text: "Buffer Overflow", correct: false },
            { text: "Meltdown", correct: true }
        ]
    },
    {
        "question": "Какой метод используется для обхода фильтров на основе URL и внедрения вредоносных скриптов в веб-приложение?",
        "time_limit": 30,
        "answers": [
            { "text": "SQL Injection", "correct": false },
            { "text": "Cross-Site Request Forgery (CSRF)", "correct": false },
            { "text": "Clickjacking", "correct": false },
            { "text": "Cross-Site Scripting (XSS)", "correct": true }
        ]
    },
    {
    type: "one-word",
    question: "Как называется вредоносное ПО, требующее выкуп?",
    answer: "Ransomware",
    score: 1
    },
    {   type: "odd-one-out",
        "question": "Что НЕ является методом аутентификации?",
        "time_limit": 30,
        "answers": [
            { "text": "Пароль", "correct": false },
            { "text": "Отпечаток пальца", "correct": false },
            { "text": "Сканирование лица", "correct": false },
            { "text": "IP-адрес", "correct": true}
        ]
    },
    {
        "question": "Какая техника безопасности используется для предотвращения атак на базе TCP/IP, защищая от атаки типа 'SYN Flood'?",
        "time_limit": 30,
        "answers": [
            { "text": "SYN Cookies", "correct": true },
            { "text": "CAPTCHA", "correct": false },
            { "text": "Rate Limiting", "correct": false },
            { "text": "SSL/TLS Encryption", "correct": false }
        ]
    },
    {
        "question": "Протокол используемый для обеспечения безопасной передачи данных в VPN-соединениях на основе IPSec - это..",
        "time_limit": 35,
        "answers": [
            { "text": "L2TP", "correct": false },
            { "text": "SSL/TLS", "correct": false },
            { "text": "ESP (Encapsulating Security Payload)", "correct": true },
            { "text": "AH (Authentication Header)", "correct": false }
        ]
    },
     {
        type: "one-word",
        question: "Как называется вредоносная программа, которая маскируется под легитимное ПО?",
        answer: "троян",
        alternatives: ["троянская", "троянец"],
        score: 1
    },

    {
        "question": "Какой тип атак в первую очередь направлен на недостатки аутентификации и сессионной безопасности в веб-приложениях?",
        "time_limit": 30,
        "answers": [
            { "text": "Buffer Overflow", "correct": false },
            { "text": "Cross-Site Scripting", "correct": false },
            { "text": "SQL Injection", "correct": false },
            { "text": "Session Fixation", "correct": true }
        ]
    },
    
    {
        type: "one-word",
        question: "Как называется процесс преобразования данных в нечитаемый вид?",
        answer: "шифрование",
        alternatives: ["кодирование", "зашифрование"],
        score: 1
    },
    {
        type: "image",
        question: "Выберите картинку, на которой изображён маршрутизатор",
        answers: [
            { image: "6488867291.jpg", correct: false },
            { image: "сервер.jpg", correct: false },
            { image: "маршрутизатор.jpg", correct: true},
            { image: "коммутатор.jpg", correct: false }
        ]
    },
    {
        "question": "Какой метод защиты используется для предотвращения атак через DNS и подмены данных, обеспечивая защиту от DNS-спуфинга?",
        "time_limit": 35,
        "answers": [
            { "text": "DNSSEC", "correct": true },
            { "text": "Two-Factor Authentication", "correct": false },
            { "text": "IPsec", "correct": false },
            { "text": "SSL/TLS", "correct": false }
        ]
    },
   {
        type: "one-word",
        question: "Какой протокол обеспечивает шифрование данных в интернете?",
        answer: "https",
        score: 1
    },
    {
        type: "image",
        question: "Какая иконка обозначает антивирус?",
        answers: [
          { image: "Щит.jpg", correct: true},
          { image: "Лупа.jpg", correct: false },
          { image: "вирус.webp", correct: true },
          { image: "чето.jpg", correct: true }
        ]
    },
    {
        "question": "Какую уязвимость использует злоумышленник для выполнения произвольного кода при недостаточной защите в процессе обработки данных в памяти?",
        "time_limit": 30,
        "answers": [
            { "text": "Command Injection", "correct": false },
            { "text": "Race Condition", "correct": false },
            { "text": "Buffer Overflow", "correct": true },
            { "text": "Cross-Site Scripting", "correct": false }
        ]
    },
    {   type: "odd-one-out",
        "question": "Какой из этих терминов НЕ относится к вредоносному ПО?",
        "time_limit": 30,
        "answers": [
            { "text": "Вирус ", "correct": false },
            { "text": "Троян", "correct": false },
            { "text": "Брандмауэр", "correct": true },
            { "text": "Шпионское ПО ", "correct": false }
        ]
    },
    {
        "question": "Какой тип атаки используется для перехвата и расшифровки зашифрованных данных в случае использования слабых параметров шифрования SSL/TLS?",
        "time_limit": 35,
        "answers": [
            { "text": "SYN Flood", "correct": false },
            { "text": "DDoS", "correct": false },
            { "text": "Man-in-the-Middle (MITM)", "correct": true },
            { "text": "SQL Injection", "correct": false }
        ]
    },
    {
        "question": "Метод защиты используемый для предотвращения атак через SQL-инъекции при работе с базами данных - это",
        "answers": [
            { "text": "Использование хеширования паролей", "correct": false },
            { "text": "Использование подготовленных запросов", "correct": true },
            { "text": "Использование SSL/TLS", "correct": false },
            { "text": "Использование двухфакторной аутентификации", "correct": false }
        ]
    },
    {
        "question": "Какой метод атак используется для обхода фильтров веб-приложений, манипулируя данными с помощью модификаций HTTP-запросов?",
        "time_limit": 35,
        "answers": [
            { "text": "HTTP Request Smuggling", "correct": true },
            { "text": "Session Fixation", "correct": false },
            { "text": "Cross-Site Scripting (XSS)", "correct": false },
            { "text": "SQL Injection", "correct": false }
        ]
    },
    {
        type: "classic",
        question: "Протокол обеспечивающий безопасную передачу данных - это..",
        answers: [
            { text: "HTTP", correct: false },
            { text: "HTTPS", correct: true },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false }
        ]
    },
    {
        type: "multiple",
        question: "Какие из этих уязвимостей связаны с веб-приложениями? (Выберите 2)",
        answers: [
            { text: "XSS", correct: true },
            { text: "Фишинг", correct: false },
            { text: "DDoS", correct: false },
            { text: "SQL-инъекция", correct: true }
        ]
    },
    {
        type: "image",
        question: "Выберите изображение, соответствующее термину 'Брандмауэр'",
        answers: [
            { image: "brandmauer.png", correct: true },
            { image: "роутер.png", correct: false },
            { image: "Свитч.jpg", correct: false},
            { image: "Сервер.jpg", correct: false }
        ]
    },
    {
        type: "odd-one-out",
        question: "Какое из этих слов лишнее в контексте кибербезопасности?",
        answers: [
            { text: "Шифрование", correct: false },
            { text: "Антивирус", correct: false },
            { text: "Блокчейн", correct: false },
            { text: "Бэкенд", correct: true }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        startBtn: document.getElementById('start-btn'),
        nextBtn: document.getElementById('next-btn'),
        checkBtn: document.getElementById('check-btn'),
        restartBtn: document.getElementById('restart-btn'),
        intro: document.getElementById('intro'),
        quiz: document.getElementById('quiz'),
        result: document.getElementById('result'),
        question: document.getElementById('question'),
        answerButtons: document.getElementById('answer-buttons'),
        imageContainer: document.getElementById('image-container'),
        score: document.getElementById('score')
    };

    let currentQuestionIndex = 0;
    let score = 0;
    let shuffledQuestions = [];
    let selectedAnswers = [];
    let isAnswerChecked = false;

    elements.startBtn.addEventListener('click', startQuiz);
    elements.restartBtn.addEventListener('click', startQuiz);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.checkBtn.addEventListener('click', checkAnswers);

    function startQuiz() {
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        score = 0;
        isAnswerChecked = false;
        
        elements.intro.classList.add('hidden');
        elements.result.classList.add('hidden');
        elements.quiz.classList.remove('hidden');
        
        showQuestion();
    }

    function showQuestion() {
    resetState();
    const question = shuffledQuestions[currentQuestionIndex];
    
    elements.question.textContent = question.question;
    elements.imageContainer.classList.add('hidden');
    elements.imageContainer.innerHTML = '';
    
    if (question.type === 'image') {
        showImageQuestion(question);
    } else if (question.type === 'one-word') {
        showOneWordQuestion(question);
    } else if (question.type === 'text-input') {
        showTextInputQuestion(question);
    } else {
        showTextQuestion(question);
    }
    }

    function showTextInputQuestion(question) {
    elements.answerButtons.innerHTML = `
        <div class="input-group">
            <input type="text" id="text-answer" placeholder="Введите ваш ответ...">
            <button id="submit-answer" class="btn">Подтвердить</button>
        </div>
        ${question.hints ? `<div class="hints">Подсказка: ${question.hints.join(', ')}</div>` : ''}
    `;
    
    document.getElementById('submit-answer').addEventListener('click', () => {
        checkTextAnswer(question);
    });
    }

    function checkTextAnswer(question) {
    const userAnswer = document.getElementById('text-answer').value.toLowerCase().trim();
    let isCorrect = false;
    
    // Проверяем основной ответ и альтернативные варианты
    if (userAnswer === question.answer.toLowerCase()) {
        isCorrect = true;
    } else if (question.alternatives) {
        isCorrect = question.alternatives.some(alt => alt.toLowerCase() === userAnswer);
    }
    
    if (isCorrect) {
        score += question.score || 1;
        document.getElementById('text-answer').classList.add('correct');
    } else {
        document.getElementById('text-answer').classList.add('wrong');
        elements.question.innerHTML += `
            <div class="correct-answer">
                Правильный ответ: <strong>${question.answer}</strong>
            </div>
        `;
    }
    
    document.getElementById('submit-answer').disabled = true;
    elements.nextBtn.classList.remove('hidden');
    }

    function showTextQuestion(question) {
        elements.answerButtons.innerHTML = '';
        
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            button.dataset.correct = answer.correct;
            button.addEventListener('click', () => selectAnswer(button, question.type === 'multiple'));
            elements.answerButtons.appendChild(button);
        });

        elements.checkBtn.classList.toggle('hidden', question.type !== 'multiple');
    }

    function showImageQuestion(question) {
        elements.imageContainer.classList.remove('hidden');
        elements.answerButtons.innerHTML = '';
        
        question.answers.forEach(answer => {
            const div = document.createElement('div');
            div.classList.add('image-option');
            div.dataset.correct = answer.correct;
            
            const img = document.createElement('img');
            img.src = answer.image;
            img.alt = answer.text;
            
            const label = document.createElement('p');
            label.textContent = answer.text;
            
            div.appendChild(img);
            div.appendChild(label);
            div.addEventListener('click', () => selectImageAnswer(div));
            
            elements.imageContainer.appendChild(div);
        });

        elements.checkBtn.classList.remove('hidden');
    }
    function showOneWordQuestion(question) {
    elements.answerButtons.innerHTML = `
        <div class="input-group">
            <input type="text" id="one-word-answer" placeholder="Введите одно слово...">
            <button id="submit-one-word" class="btn">Ответить</button>
        </div>
        <div id="one-word-hint" class="hint"></div>
    `;
    
    const inputField = document.getElementById('one-word-answer');
    const submitBtn = document.getElementById('submit-one-word');
    const hintElement = document.getElementById('one-word-hint');
    
    // Обработчик отправки ответа
    submitBtn.addEventListener('click', () => {
        checkOneWordAnswer(question);
    });
    
    // Обработчик нажатия Enter
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkOneWordAnswer(question);
        }
    });
    }
    function checkOneWordAnswer(question) {
    const userAnswer = document.getElementById('one-word-answer').value.toLowerCase().trim();
    const inputField = document.getElementById('one-word-answer');
    const submitBtn = document.getElementById('submit-one-word');
    const hintElement = document.getElementById('one-word-hint');
    
    // Проверяем ответ
    let isCorrect = false;
    const correctAnswers = [question.answer.toLowerCase(), ...(question.alternatives || []).map(a => a.toLowerCase())];
    
    if (correctAnswers.includes(userAnswer)) {
        isCorrect = true;
        score += question.score || 1;
        inputField.classList.add('correct');
        hintElement.textContent = "✓ Верно!";
        hintElement.style.color = "#2ecc71";
    } else {
        inputField.classList.add('wrong');
        hintElement.innerHTML = `✗ Неверно. Правильный ответ: <strong>${question.answer}</strong>`;
        hintElement.style.color = "#e74c3c";
    }
    
    // Блокируем поле после ответа
    inputField.disabled = true;
    submitBtn.disabled = true;
    elements.nextBtn.classList.remove('hidden');
    }
    function selectAnswer(button, isMultiple) {
        if (isMultiple) {
            button.classList.toggle('selected');
            
            if (selectedAnswers.includes(button)) {
                selectedAnswers = selectedAnswers.filter(b => b !== button);
            } else {
                selectedAnswers.push(button);
            }
        } else {
            Array.from(elements.answerButtons.children).forEach(btn => {
                btn.disabled = true;
                if (btn.dataset.correct === 'true') {
                    btn.classList.add('correct');
                }
            });

            button.classList.add(button.dataset.correct === 'true' ? 'correct' : 'wrong');
            elements.nextBtn.classList.remove('hidden');
            
            if (button.dataset.correct === 'true') score++;
        }
    }

    function selectImageAnswer(div) {
        if (isAnswerChecked) return;
        
        Array.from(elements.imageContainer.children).forEach(imgDiv => {
            imgDiv.classList.remove('selected');
        });
        
        div.classList.add('selected');
        selectedAnswers = [div];
    }

    function checkAnswers() {
        isAnswerChecked = true;
        const question = shuffledQuestions[currentQuestionIndex];
        
        if (question.type === 'image') {
            // Обработка вопросов с картинками
            const correctAnswer = document.querySelector('.image-option[data-correct="true"]');
            correctAnswer.classList.add('correct');
            
            if (selectedAnswers.length > 0) {
                const selected = selectedAnswers[0];
                if (selected.dataset.correct === 'true') {
                    score++;
                } else {
                    selected.classList.add('wrong');
                }
            }
            
            // Блокируем все варианты
            Array.from(elements.imageContainer.children).forEach(div => {
                div.classList.add('locked');
            });
        } else {
            // Обработка обычных вопросов
            Array.from(elements.answerButtons.children).forEach(button => {
                button.disabled = true;
                
                if (button.dataset.correct === 'true') {
                    button.classList.add('correct');
                }
                
                if (button.classList.contains('selected') && button.dataset.correct === 'false') {
                    button.classList.add('wrong');
                }
            });

            const correctAnswers = question.answers.filter(a => a.correct).length;
            const selectedCorrect = selectedAnswers.filter(b => b.dataset.correct === 'true').length;
            
            if (selectedCorrect === correctAnswers && 
                selectedAnswers.length === correctAnswers) {
                score++;
            }
        }

        elements.checkBtn.classList.add('hidden');
        elements.nextBtn.classList.remove('hidden');
    }

    function nextQuestion() {
        isAnswerChecked = false;
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        elements.quiz.classList.add('hidden');
        elements.result.classList.remove('hidden');
        
        const totalQuestions = shuffledQuestions.length;
        const percentage = Math.round((score / totalQuestions) * 100);
        
        let message = '';
        let emoji = '';
        
        if (score >= 19 && totalQuestions >= 19) {
            message = `Отлично! Вы ответили правильно на ${score} из ${totalQuestions} вопросов. Вы настоящий эксперт в информационной безопасности!`;
            emoji = '🦾🔐';
        } 
        else if (score >= 13) {
            message = `Хорошо! Вы ответили правильно на ${score} из ${totalQuestions} вопросов. Вам стоит немного подучить отдельные темы.`;
            emoji = '📚💻';
        }
        else {
            message = `Вы ответили правильно только на ${score} из ${totalQuestions} вопросов. Вам необходимо серьёзно изучить основы информационной безопасности.`;
            emoji = '⚠️🔓';
        }
        
        elements.score.innerHTML = `
            <h3>Ваш результат: ${percentage}%</h3>
            <p>${message}</p>
            <div style="font-size: 2rem;">${emoji}</div>
        `;
    }
    function resetState() {
        selectedAnswers = [];
        isAnswerChecked = false;
        elements.answerButtons.innerHTML = '';
        elements.nextBtn.classList.add('hidden');
        elements.checkBtn.classList.add('hidden');
    }
});
