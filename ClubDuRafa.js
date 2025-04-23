//var que recebe a div que aparecem os serviços
let servicos = document.getElementById("mostrar_servicos");
servicos.style.display="none";

//var que recebe a img de seta dos serviços
let setaSer = document.getElementById("seta-ser");
setaSer.src="img/seta-para-baixo-branca.png";

//

//var que recebe a div da loc
let loc = document.getElementById("mostrar-loc");
loc.style.display ="none";

//var que recebe a img de seta da loc
let setaLoc = document.getElementById("seta-loc");
setaLoc.src = "img/seta-para-baixo-branca.png";

//

//var que recebe a div com infos do funcionamento
let funcionamento = document.getElementById("funcionamento");
funcionamento.style.display="none";

//var que recebe a imagem de seta do conteiner de funcionamento
let setaHorario = document.getElementById("seta-horario")

//

//funcao para mostrar a div servicos onclick
function mostrarServicos(){
    if(servicos.style.display=="none"){
        servicos.style.display="block";
        setaSer.src="img/seta-para-cima-branca.png";
    }else{
        servicos.style.display="none";
        setaSer.src="img/seta-para-baixo-branca.png";
    }
}


//funcao para mostrar o iframe da localização
function mostrarLoc(){
    if(loc.style.display=="none"){
        loc.style.display="block";
        setaLoc.src="img/seta-para-cima-branca.png";
    }else{
        loc.style.display="none";
        setaLoc.src="img/seta-para-baixo-branca.png";
    }
}

//função para mostrar o funcionamento e horarios
function horario(){
    if(funcionamento.style.display=="none"){
        funcionamento.style.display="block";
        setaHorario.src="img/seta-para-cima-branca.png";
    }else{
        funcionamento.style.display="none";
        setaHorario.src="img/seta-para-baixo-branca.png";
    }
}