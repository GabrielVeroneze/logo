const radios = document.getElementsByName('botao')

window.addEventListener('load', () => {
    
    checarBotao()
    
    radios.forEach(radio => {
        
        radio.addEventListener('click', () => {
            checarBotao()
        })
    })    
})

function checarBotao() {
    const botoes = document.querySelectorAll('.plano__container')
    
    for(let i = 0; i < radios.length; i++) {

        if(radios[i].checked == true) {

            botoes[i].style.background = '#f44336'
            displayContainer(radios[i].dataset.tipo)
        } else {
            botoes[i].style.background = '#000000'
        }
    }

}

function displayContainer(tipoBotao) {
    const containers = document.querySelectorAll('[data-conteudo]')

    containers.forEach(container => {

        const tipoContainer = container.dataset.conteudo

        if(tipoContainer == tipoBotao) {

            if(tipoContainer == 'Flight') {                
                container.style.display = 'block'

            } else if (tipoContainer == 'Hotel' || tipoContainer == 'Rental') {
                container.style.display = 'flex'
            }

        } else {
            container.style.display = 'none'
        }
    })
}