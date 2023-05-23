let darkmode = document.querySelector('#darkmode');

darkmode.onclick = ()=>{
    //alert("CLICOU!");

    if(darkmode.classList.contains('bx-moon')){
        alert("MODO ESCURO ATIVADO!");
        darkmode.classList.replace('bx-moon', 'bx-sun');
    }

}