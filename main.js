function criaCartao(categoria,pergunta,resposta){
    let container =document.getElementById('container');
    let cartao =document.createElement('article');
    cartao.className ='cartao'
    cartao.innerHTML =`
    <divclass class="conteudo-cartao"> 
    <h3>Categoria</h3>
    <div class="pergunta-cartao">
        <p>pertunta</p>

    </div class="resposta-cartao">
        <p>resposta</p>
        
    </div>
    `
    container.appendChild(cartao);
}