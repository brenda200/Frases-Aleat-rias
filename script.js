const fraseEl = document.getElementById('frase');
const fraseBtn = document.getElementById('fraseBtn');

fraseBtn.addEventListener('click', generateFrase);

const frases = [
    'A persistência é o caminho do êxito.',
    'Só existe um êxito: a capacidade de levar a vida que se quer.',
    'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.',
    'O verdadeiro sucesso é encontrar a paz de espírito e fazer o que você ama.',
    'Acredite em si mesmo e tudo será possível.',
    'Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados.',
    'A vida é melhor para aqueles que fazem o possível para ter o melhor.',
    'O sucesso é a combinação de sorte com trabalho árduo e perseverança.',
    'Lute pelos seus sonhos, mas saiba apreciar cada passo dado na direção deles.'
  ];
 
function generateFrase() {
    const randomIndex = Math.floor(Math.random() * frases.length);
    const frase = frases[randomIndex];
    fraseEl.textContent = frase;
}
