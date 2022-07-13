let luzes = Array.from(document.getElementsByClassName('bolinha'));
const btn = document.getElementById('btn');
const speed = document.getElementById('speed');
let acender = 0;
let apagar = 0;
function apagarLuzes() {
    for (apagar; apagar < luzes.length; apagar++) {
        luzes[apagar].style.boxShadow = 'none';
    };
    apagar = 0;
    piscar();
};
function piscar() {
    if(acender >= luzes.length) {
        acender = 0;
    };
    for(acender; acender < luzes.length; acender++) {
        luzes[acender].style.boxShadow = '0 0 10px 5px ' + luzes[acender].id;
        acender++;
        break;
    };
};
let piscando = true;
let intervalo;
let velocidade;
btn.addEventListener('click', ()=>{
    velocidade = speed.value;
    speed.addEventListener('input', () => {
        velocidade = speed.value;
    })
    switch(piscando) {
    case true :
        btn.innerText = 'Stop'
        piscando = false;
        intervalo = setInterval(apagarLuzes, velocidade);
        break
    case false :
        btn.innerText = 'Play'
        piscando = true;
        clearInterval(intervalo);
        break
    }
});
