$( function(){
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    
    var login = document.getElementById('username');
	var pw = document.getElementById('pw');

   

     var tbClientes = localStorage.getItem(login);

    tbClientes = JSON.parse(tbClientes); // Converte string para objeto

		if(tbClientes == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
	    tbClientes = [];
		}
		
		$("#frmCadastro").on("submit",function(){
			if(operacao == "A"){
			    return AdicionarClientes(tbClientes);
			}
		});		
});



function AdicionarClientes(tbClientes, id){
		var aux = $("#email").val();
		var cliente = JSON.stringify({
		Tipo	 : $("#tipoCad").val(),	
        Nome     : $("#nome").val(),
        Telefone : $("#telefone").val(),
        Email    : $("#email").val(),
        Senha	 : $("#senha").val(),
        Rua      : $("#rua").val(),
        Numero   : $("#numero").val(),
        Bairro   : $("#bairro").val(),
    });
		
   tbClientes.push(cliente);
		console.log("tbClientes - " + tbClientes);
    localStorage.setItem(aux, JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    
    
    return true;

}


function Excluir(tbClientes, indice_selecionado){
    /*tbClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro excluído.");
*/
    localStorage.clear();

}
function logar() {
		var l = document.getElementById("username").value;
		var p = document.getElementById("pw").value;
		
        if (localStorage.getItem(l)!=null){

    		var cli = localStorage.getItem(l);
            cli = JSON.parse(cli);

            localStorage.setItem('currentUser', cli);
            
            var us = localStorage.getItem('currentUser');   
    		us=JSON.parse(us);
            //aqui temos us como object

            if(p == us.Senha) {
                alert('Login realizado com sucesso!');


        	}else {
                localStorage.removeItem("currentUser");
            	alert('Senha incorreta!');
                return;
            }
        }else{ 
            localStorage.removeItem("currentUser");    
            alert('Usuário incorreto!');
        }
}


