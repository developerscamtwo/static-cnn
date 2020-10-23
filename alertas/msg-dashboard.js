if(localStorage){
	localStorage.removeItem('cnn-sprint124');
	const lido = localStorage.getItem('cnn-sprint125');
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
                                <li>Nova função para clínicas odontológicas: <b>Planos de tratamento</b></li>                   
                                <li>Inserida data de criação e atualização para regras de comissões</li>
                                <li>Melhorias na função "Esqueci minha senha" na tela de login</li>
                                <li>Guias TISS geradas na agenda podem ser acessadas em "detalhes da agenda"</li>
                                <li>Na edição da guia TISS, o sistema mostra o número do lote onde ela se encontra</li>
                            </ul>
                            <div class="space-10"></div>                  
                            <a class="btn btn-link btn-block" target="_blank" href="https://clinicanasnuvens.movidesk.com/kb/article/147658/4-124-25-de-setembro-de-2020">Saiba mais</a>
                        </div>
					</div>
				</div>	
			</div>
		</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint125', "lido");
	}
}
