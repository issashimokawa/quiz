'use strict'


    {
        const question = document.getElementById('question');
        const choices = document.getElementById('choices');
        const btn = document.getElementById('btn');
        const tesuto = document.getElementById('tesuto');
        const scoreLabel = document.querySelector('#tesuto > p');
      
        const quizset = [
          {q: '第1問ニュージーランドの首都は?', c: ['ウェーリントン', 'オークランド', 'タウランガ']},
          {q: '第2問ニュージーランドの一番高い山はどれでしょうか？', c: ['クック山', 'タラナキ山', 'ルアぺフ山']},
          {q: '第3問ニュージーランドの人口は何人でしょうか？', c: ['四百万人', '三百万人', '二千万人']},
          {q: '第4問ニュージーランドではタバコとお酒は何歳から大丈夫でしょうか？', c: ['18歳', '20歳', '19歳']},
          {q: '第5問ニュージーランドでは車の免許は何歳から取得できますか？', c: ['15歳', '22歳', '19歳']},
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

