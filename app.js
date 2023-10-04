(function(){
    const screen=document.querySelector('.screen');
    const buttons=document.querySelectorAll('.btn');

    const equalbtn=document.querySelector('.btn-equal');

    const clearbtn=document.querySelector('.btn-clear');
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });
    equalbtn.addEventListener('click',function(e){
        if(screen.value === ''){
            screen.value ="";
        }else
        {
            let answer= eval(screen.value);
            screen.value = answer;
        }
    });
    clearbtn.addEventListener('click',function(e){
        screen.value="";
    });

   
})();