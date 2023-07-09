//console.log(document.querySelectorAll('.personagem')) NodeList(lista de todos os elementos com a classe personagem)

const personagens = document.querySelectorAll('.personagem');
console.log(personagens);

personagens.forEach((personagem)=>{
    personagem.addEventListener('mouseenter',()=>{

        if(window.innerWidth < 450){
            window.scrollTo({top:0,behavior:"smooth"});
        }
        

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        const idPersonagem = alterarImagemPersonagemGrande(personagem);

        alterarNomePersonagemSelecionado(idPersonagem);

        alterarDescricaoPersonagem(personagem);

        

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(idPersonagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = idPersonagem;
}

function alterarImagemPersonagemGrande(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `images/card-${idPersonagem}.png`;
    return idPersonagem;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
