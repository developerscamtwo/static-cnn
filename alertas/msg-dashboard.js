if(localStorage){
	localStorage.removeItem('cnn-live');
	const lido = localStorage.getItem('cnn-sprint120');

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
								<li>Integração com meio de pagamento GalaxPay e possibilidade de envio de link de pagamento ao paciente.(<a href="https://youtu.be/1pe1M_xjXtc" target="_blank">Veja o vídeo</a>)</li>
								<li>Nova versão da guia TISS 3.05.00</li>
								<li>Relatório de horas consumidas pelo teleconsulta</li>
								<li>Desconto do custo do procedimento para cálculo de comissionamento</li>
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

		localStorage.setItem('cnn-sprint120', "lido");
	}
}
