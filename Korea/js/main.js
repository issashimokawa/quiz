'use strict'


    {
        const question = document.getElementById('question');
        const choices = document.getElementById('choices');
        const btn = document.getElementById('btn');
        const tesuto = document.getElementById('tesuto');
        const scoreLabel = document.querySelector('#tesuto > p');
      
        const quizset = [
          {q: '第1問韓国の首都は?', c: ['ソウル', 'プサン広域市', '平壌']},
          {q: '第2問韓国の貨幣単位は？', c: ['ウォン ', 'ユーロ', 'オージ']},
          {q: '第3問韓国で1番高い建物は？', c: ['ロッテワールドタワー', 'Nソウルタワー ', '昌徳宮']},
          {q: '第4問韓国を代表する武術の名前は？', c: ['テコンドー', '空手', '剣道']},
          {q: '第5問ソウルの次に経済規模が大きい都市の名前は？', c: ['釜山', '仁川', '	大邱']},
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

