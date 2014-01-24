jQuery(document).ready(function() {
	js();
	page = window.location.pathname;
});



function js() {

	$('#menu li')
		.mouseout(function() {
			if (page == '/home/haran/globalanalytics/index.html') {
				$('#icone').attr("src", "_imagens/glass-oculos-preto-peq.png")
			} else if (page == '/home/haran/globalanalytics/specs.html') {
				$('#icone').attr("src", "_imagens/especificacoes.png")
			} else if (page == '/home/haran/globalanalytics/fotos.html') {
				$('#icone').attr("src", "_imagens/fotos.png")
			} else if (page == '/home/haran/globalanalytics/multimidia.html') {
				$('#icone').attr("src", "_imagens/multimidia.png")
			} else if (page == '/home/haran/globalanalytics/fale-conosco.html') {
				$('#icone').attr("src", "_imagens/contato.png")
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