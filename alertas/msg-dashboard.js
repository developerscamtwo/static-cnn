if(localStorage){
	localStorage.removeItem('cnn-sprint125');
	const lido = localStorage.getItem('cnn-sprint127');
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
                            <div class="space-5"></div>                  
                            <ul>
                                <li>Agora é possível ao adicionar um compromisso ao profissional de saúde e repetir ele para demais dias.</li>                   
                                <li>Criação de dietas para prescrição ao paciente</li>
                                <li>Guias TISS de solicitação de internação</li>
                                <li>Adicionado novos métodos de integração para a API</li>
                                
                            </ul>
                            <p>Deseja conhecer estas e demais atualizações que preparamos, clique em Saiba mais!</p>
                            <div class="space-5"></div>                  
                            <a class="btn btn-link btn-block" target="_blank" href="https://clinicanasnuvens.movidesk.com/kb/article/160716/4-127-30-de-novembro-de-2020">Saiba mais</a>
                        </div>
					</div>
					</div>
				</div>	
			</div>
		</div>
	</div>`);
	$('#md-message').modal('show');
		localStorage.setItem('cnn-sprint127', "lido");
	}
}
