function alternarTema(){
    document.body.classList.toggle("dark-mode")
}

function expandirImagem(img) {
    img.classList.toggle('expandida');

    
    if(img.classList.contains('expandida')){
        // Cria uma camada de fundo escuro
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        overlay.style.zIndex = 999;
        document.body.appendChild(overlay);

        overlay.onclick = function(){
            img.classList.remove('expandida');
            overlay.remove();
        }
    } else {
        const overlay = document.getElementById('overlay');
        if(overlay) overlay.remove();
    }
}
