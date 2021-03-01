if(localStorage){
	localStorage.removeItem('cnn-sprint129');
	const lido = localStorage.getItem('cnn-sprint130');
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
<div class="space-5"></div>
                            <h2>Conheça nossas novidades!</h2> 
                            <div class="space-5"></div>                  
                            <ul>
                                <li>Nomes dos procedimentos no TISS adequados caso for tabela própria;</li>                   
                                <li>XML de recurso para TISS;</li>
                                <li>Cliente/Fornecedor agora tem categoria padrão para pagamento e para recebimento;</li>
                                <li>Melhorias na exibição de comissões no financeiro;</li>
    <li>Nova situação de "perdido" para o orçamento;</li>
    <li> Possibilidade de finalizar a venda de plano de benefícios;</li>
                            </ul>
                            <p>Para conhecer estas e demais atualizações que preparamos, clique em Saiba mais!</p>
                            <div class="space-2"></div>                  
                            <a class="btn btn-link btn-block" target="https://clinicanasnuvens.movidesk.com/kb/article/180156/4-130-02-marco-2021">Saiba mais</a>
                        </div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint130', "lido");
	}
}
