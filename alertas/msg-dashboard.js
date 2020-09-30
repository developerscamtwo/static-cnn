if(localStorage){
	localStorage.removeItem('cnn-sprint120');
	const lido = localStorage.getItem('cnn-sprint124');
	if(!lido){
		$('body').append(`<div id="md-message" class="modal fade" tabindex="-1" role="dialog">
		<div class="modal-dialog modal-md" role="document">
			<div class="modal-content">
				<div class="modal-body no-padding">
					<div class="clearfix">
						<div class="col-sm-5 no-padding-left hidden-xs">
						<img class="img-responsive center" src="http://camtwo.com.br/magraum/novidade-121.png" alt="">
						</div>
						<div class="col-sm-7">				
							<button type="button" class="btn btn-danger pull-right btn-sm" data-dismiss="modal" aria-hidden="true">×</button>
<div class="space-20"></div>
							<h2>Conheça nossas novidades!</h2>	
							<div class="space-20"></div>					
							<ul>
								<li>Alterado o nome da comissão de "Execução" para "Paciente"</li>
								<li>Possibilidade de cobrança recorrente com Galax Pay no plano de benefícios</li>
								<li>Imagens e documentos por beneficiário no plano de benefícios</li>
								<li>Prioridades para os cards do painel de chamadas</li>
								<li>Novo relatório customizável de agendamentos por status</li>
							</ul>
							<div class="space-10"></div>					
							<a class="btn btn-link btn-block" target="_blank" href="https://clinicanasnuvens.movidesk.com/kb/pt-br/article/131714/4-120-28-de-julho-de-2020?menuId=9298-27492-131714">Saiba mais</a>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint124', "lido");
	}
}
