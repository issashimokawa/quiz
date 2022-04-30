'use strict'


    {
        const question = document.getElementById('question');
        const choices = document.getElementById('choices');
        const btn = document.getElementById('btn');
        const tesuto = document.getElementById('tesuto');
        const scoreLabel = document.querySelector('#tesuto > p');
      
        const quizset = [
          {q: '第1問カナダの面積は世界何位？', c: ['2位', '5位', '3位']},
          {q: '第2問カナダの公用語は？', c: ['英語とフランス語', '英語とイタリア語', '英語とスペイン語']},
          {q: '第3問カナダはいくつの海と接している？', c: ['3', '1', '10']},
          {q: '第4問カナダの国技はアイスホッケーと何？', c: ['ラクロス', 'ラグビー', 'サッカー']},
          {q: '第5問カナダの首都は？', c: ['オタワ', 'トロント', 'バンクーバー']},
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

