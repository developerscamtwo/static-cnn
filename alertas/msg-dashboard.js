if(localStorage){
	localStorage.removeItem('cnn-sprint132');
	const lido = localStorage.getItem('cnn-sprint133');
	if(!lido){
		$('body').append(`
	<div id="md-message" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-md" role="document">
			<div class="modal-content">
				<div class="modal-body no-padding">
					<div class="clearfix">
						<div class="col-sm-5 no-padding-left hidden-xs">
							<img class="img-responsive center" src="http://camtwo.com.br/magraum/novidade-121.png" alt="">
						</div>
						<div class="col-sm-7">              
                            				<button type="button" class="btn btn-danger pull-right btn-sm" data-dismiss="modal" aria-hidden="true">×</button>
							<div class="space-5"></div>
                            				<h2>Conheça nossas novidades!</h2> 
                           				<div class="space-5"></div>                  
                            				<ul>
                               					<li>Rastreabilidade pela origem de geração dos faturamentos financeiros;</li>                   
                                				<li>Pré visualização de imagens e arquivos PDF nas imagens e documentos dos pacientes;</li>
                                				<li>As permissões e bloqueios foram reordenadas e tiveram uma pesquisa adicionada;</li>
                                				<li>Lista de espera por profissional</li>  
                            				</ul>
                            				<p>Para conhecer estas e demais atualizações que preparamos, clique em Saiba mais!</p>
                            				<div class="space-2"></div>                  
                            				<a class="btn btn-link btn-block" target="_blank" href="https://clinicanasnuvens.movidesk.com/kb/article/209941/4133-__-de-junho-de-2021">Saiba mais</a>
                        			</div>
					</div>
				</div>
			</div>
		</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint133', "lido");
	}
}
