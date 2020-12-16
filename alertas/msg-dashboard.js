if(localStorage){
	localStorage.removeItem('cnn-sprint127');
	const lido = localStorage.getItem('cnn-sprint128');
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
                                <li>Possibilidade de configurar e adicionar pastas padrão aos pacientes</li>                   
                                <li>Impressão de guia odontológica</li>
                            </ul>
                            <p>Deseja conhecer estas e demais atualizações que preparamos, clique em Saiba mais!</p>
                            <div class="space-20"></div>                  
                            <a class="btn btn-link btn-block" target="https://clinicanasnuvens.movidesk.com/kb/article/164431/4-128-17-de-dezembro">Saiba mais</a>
                        </div>
					</div>
					</div>
				</div>	
			</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint128', "lido");
	}
}
