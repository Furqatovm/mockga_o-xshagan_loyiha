let savollar = [
    {
        savol: "O'zbekiston Respublikasi qaysi yilda mustaqillikka erishdi?",
        javoblar: ["1991", "1992", "1993", "1994"],
        togriJavob: 0,
    },
    {
        savol: "O'zbekiston Respublikasining poytaxti qaysi shahar?",
        javoblar: ["Toshkent", "Samarqand", "Buxoro", "Xiva"],
        togriJavob: 0,
    },
    {
        savol: "O'zbekiston Respublikasining prezidenti kim?",
        javoblar: ["Shavkat Mirziyoyev", "Islom Karimov", "Abdulla Aripov", "Shavkat Mirziyoyev"],
        togriJavob: 0,
    },
    {
        savol: "O'zbekiston Respublikasining eng katta so'nggi qishloqi qaysi?",
        javoblar: ["Xorazm", "Surxondaryo", "Qashqadaryo", "Farg'ona"],
        togriJavob: 0,
    },
    {
        savol: "O'zbekiston Respublikasining eng katta so'nggi dengizi qaysi?",
        javoblar: ["Orol dengizi", "Aral dengizi", "Sariq dengizi", "Xazar dengizi"],
        togriJavob: 0,
    },
    {
        savol: "O'zbekiston Respublikasining eng katta so'nggi tog'i qaysi?",
        javoblar: ["Qorao'zak", "Beshkent", "Chimboy", "Koytash"],
        togriJavob: 0,
    }
];


let savol =document.getElementById("savol");
let score =document.getElementById("score");
let javoblar =document.getElementById("javoblar");
// Bu tugmalar
let restartBtn =document.getElementById("restart");
let keyingi =document.getElementById("keyingi");

// o'rgaruvchilar
let savolIndex =0;
let togriJavob = 0;


function showQuestion () {
    savol.innerHTML =savollar[savolIndex].savol;

    for (let i =0; i < savollar[savolIndex].javoblar.length; i++ ) {
        let label = document.createElement("label");
        label.className ="javob-label";
        label.htmlFor = `javob${i}`;


        // label.innerHTML =savollar[savolIndex].javoblar[i];
            let input =document.createElement("input");
            input.type ="radio"; 
                      

            input.name ="javob";
            input.value =i;
            input.id =`javob${i}`;

            let oldingi =document.createElement("button");
            oldingi.className ="btn-previes";
            let span =document.createElement("span");
            span.className ="javob-span";
            span.textContent =savollar[savolIndex].javoblar[i];
            


            
            javoblar.appendChild(label);
            label.appendChild(input);
            label.appendChild(span);
            
    }
    

}

function nextQuestion (){
    let userAnswer = document.querySelector("input[name=javob]:checked");
    if (userAnswer){
        javoblar.innerHTML ="";
        savolIndex++;
        showQuestion();
    } else {
        alert("iltimos javobni belgilang");
        return;
    }
    
}

showQuestion();

keyingi.addEventListener("click", nextQuestion);

let footer =document.getElementById("footer");
let hero = document.getElementById("hero");
hero.style.display ="none";

let tugma =document.getElementById("footer-button");

tugma.addEventListener("click", function (){
    footer.style.display ="none";
    hero.style.display ="block"
})