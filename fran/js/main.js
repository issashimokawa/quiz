'use strict'


    {
        const question = document.getElementById('question');
        const choices = document.getElementById('choices');
        const btn = document.getElementById('btn');
        const tesuto = document.getElementById('tesuto');
        const scoreLabel = document.querySelector('#tesuto > p');
      
        const quizset = [
          {q: '第1問世界でフランス語を話す人の数は？', c: ['三億人', '二千万人', '三百万人']},
          {q: '第2問フランスがEUの中で第1位である項目は、次のうちどれでしょうか？', c: ['面積', '人口', '平均寿命']},
          {q: '第3問フランスで信者が最も多い宗教は次のうちどれでしょうか？', c: ['キリスト教', 'ユダヤ教', '仏教']},
          {q: '第4問フランスで人気のある日本車メーカーは次のうちどれでしょうか？', c: ['日産', 'トヨタ', 'ホンダ']},
          {q: '第5問次のうち、「フランス発祥のブランド」はどれでしょうか？', c: ['シャネル', 'コーチ', 'グッチ']},
        ];
        let cunt = 0;
        let isAn = 0;
        let Score = 0;
      
        

        function shuffle(arr){
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[j], arr[i]] = [arr[i], arr[j]];
              }
              return arr;
        }

        function checkAnswer(li){
            if(isAn === true){
                return;
            }
            isAn = true;
            if(li.textContent === quizset[cunt].c[0]){
               li.classList.add('correct');
                Score++;
            }else{
                li.classList.add('Incorrect');
            }
           btn.classList.remove('disabled');
        }

        function setquiz(){
        isAn = false;
        question.textContent = quizset[cunt].q;
        while(choices.firstChild){
            choices.removeChild(choices.firstChild);
        }
        const shuffledChoices = shuffle([...quizset[cunt].c]);
        console.log(quizset[cunt].c);
        shuffledChoices.forEach(choice => {
          const li = document.createElement('li');
          li.textContent = choice;
          li.addEventListener('click',() => {
              checkAnswer(li);
          })
          choices.appendChild(li);
        });
        if (cunt === quizset.length - 1) {
            btn.textContent = 'Show Score';
          }
        }
        
        setquiz();

        btn.addEventListener('click', () =>{
            if(btn.classList.contains('disabled')){
                return;
            }
            btn.classList.add('disabled');

            if(cunt === quizset.length -1){
                
                scoreLabel.textContent = `点数！: ${quizset.length}問中${Score}点！`
                tesuto.hidden.remove('hidden')
            }else{
                cunt++;
                setquiz();
            }
        })
      }

