if(localStorage){
	localStorage.removeItem('cnn-sprint128');
	const lido = localStorage.getItem('cnn-sprint129');
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
<div class="space-15"></div>
                            <h2>Conheça nossas novidades!</h2> 
                            <div class="space-20"></div>                  
                            <ul>
                                <li>Novo módulo para controle de guias e lotes TISS;</li>                   
                                <li>Melhorias de usabilidade nas guias TISS;</li>
                                <li>Novo recurso de glosa;</li>
                                <li>Nova cobrança para convênios;</li>
                            </ul>
                            <p>Para conhecer estas e demais atualizações que preparamos, clique em Saiba mais!</p>
                            <div class="space-18"></div>                  
                            <a class="btn btn-link btn-block" target="https://clinicanasnuvens.movidesk.com/kb/article/175184/4-129-9-de-fevereiro-2021">Saiba mais</a>
                        </div>
					</div>
					</div>
				</div>	
			</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint129', "lido");
	}
}
