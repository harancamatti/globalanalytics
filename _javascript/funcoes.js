jQuery(document).ready(function() {
	page = window.location.pathname;
	js();
	
});



function js() {

	$('#menu li')
		.mouseout(function() {
			if (page == '/index.html') {
				document.getElementById("icone").src="_imagens/glass-oculos-preto-peq.png"
			} else if (page == '/specs.html') {
				document.getElementById("icone").src="_imagens/especificacoes.png"
			} else if (page == '/fotos.html') {
				document.getElementById("icone").src="_imagens/fotos.png"
			} else if (page == '/multimidia.html') {
				document.getElementById("icone").src="_imagens/multimidia.png"
			} else if (page == '/fale-conosco.html') {
				document.getElementById("icone").src="_imagens/contato.png"
			}
		});
	$('#menu li:nth-child(1)')
		.mouseover(function() {
			$('#icone').attr("src", "_imagens/home.png")
		});

	$('#menu li:nth-child(2)')
		.mouseover(function() {
			$('#icone').attr("src", "_imagens/especificacoes.png")
		});

	$('#menu li:nth-child(3)')
		.mouseover(function() {
			$('#icone').attr("src", "_imagens/fotos.png")
		});
	$('#menu li:nth-child(4)')
		.mouseover(function() {
			$('#icone').attr("src", "_imagens/multimidia.png")
		});
	$('#menu li:nth-child(5)')
		.mouseover(function() {
			$('#icone').attr("src", "_imagens/contato.png")
		});
}
function focus(){
	if(page=='/fale-conosco.html'){
		
	}
}