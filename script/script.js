let range = document.querySelector('#range'); // VARIÁVEL PARA SETAR O BMP
let number = document.querySelector('.number p').textContent = range.value; // BPM

document.body.addEventListener('keyup', (e) => { // EVENTO DE CLIQUE PARA CAPTURAR A TECLA
    playSound( e.code.toLocaleLowerCase() );
})

document.querySelector('#composition button').addEventListener('click', () => { // BOTÃO
    let input = document.querySelector('#input').value;

    if (composition !== '') {
        let composition = input.split(''); // TRANSFORMA EM ARRAY O QUE FOI DIGITADO
        playCompostion(composition);
    }
})

range.addEventListener('input', () => { // ALTERA O BPM QUE NA TELA
    document.querySelector('.number p').textContent = range.value;
})

playSound = (e) => {
    let sound = document.querySelector(`#s_${e}`); // <-- SOM DA NOTA
    let note = document.querySelector(`div [data-key="${e}"]`); // <-- CORPO DA NOTA

    if (sound) { // TOCA O SOM 
        sound.currentTime = 0;
        sound.play();
    }

    if (note) { // MUDA COR DA NOTA
        note.classList.add('active');

        setTimeout(() => {
            note.classList.remove('active');
        }, 300);
    }

}

playCompostion = (composition) => {

    let bpm = (60000 / +range.value); // <-- FÓRMULA PARA ACHAR SETAR O BPM (60.000MS = 1MIN)

    let setup = 0;

    for (let e of composition) { // LOOP PARA TOCAR CADA NOTA 

        setTimeout(() => {
            playSound(`key${e}`); playSound(`digit${e}`);
        }, setup);

        setup += bpm; 
    }

}