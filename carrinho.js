$(function(){


});

function AddCar(produto, qtd, valor)
 { 
   var c = localStorage.getItem('currentUser');
   var cli = JSON.parse(c);
   var tbPedidos = localStorage.getItem(cli.Nome);
   
   tbPedidos = JSON.parse(tbPedidos); // Converte string para objeto

   if(tbPedidos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
      tbPedidos = [];
   }

   
  var valor = valor * qtd;
     var pedido = JSON.stringify({
      Produto   : (produto), 
      Qtd       : (qtd),
      Valor     : (valor)
      }); 
     tbPedidos.push(pedido);
     localStorage.setItem(cli.Nome , JSON.stringify(tbPedidos));
     alert("Produto adicionado ao carrinho!");
     return true;
  
 }

function listaCar(){
  var TaxEnt = 8;
  var c = localStorage.getItem('currentUser');
  var cli = JSON.parse(c);
  var tbPedidos = localStorage.getItem(cli.Nome);
  var total = 0; 
  tbPedidos = JSON.parse(tbPedidos); // Converte string para objeto
  var desc = new Array();
  
  
  if(tbPedidos == null){ // Caso não haja conteúdo, iniciamos um vetor vazio
    tbPedidos = [];
    alert("Seu carrinho está vazio! Selecione um item no cardápio!");
    return;
  }
   
    for(var i in tbPedidos){
       var ped = JSON.parse(tbPedidos[i]);
       total += ped.Valor;
       desc[i] = "Produto: " + ped.Produto +" - Qtd: " + ped.Qtd + " - Valor: "+ ped.Valor + '<br>';
       
       
    }
    document.getElementById("subtotal").innerHTML = (total.toFixed(2));
    document.getElementById("itens").innerHTML = (desc);
    document.getElementById("tax").innerHTML = (TaxEnt.toFixed(2));
    total = total+TaxEnt;
    document.getElementById("total").innerHTML = (total.toFixed(2));
}

function Excluir(itemSelecionado){
  var c = localStorage.getItem('currentUser');
  var cli = JSON.parse(c);
  var tbPedidos = localStorage.getItem(cli.Nome);
  var total = 0; 
  tbPedidos = JSON.parse(tbPedidos); // Converte string para objeto
  
  tbPedidos.splice(itemSelecionado,1);
  localStorage.setItem(cli.Nome, JSON.stringify(tbPedidos));
  alert("Item removido!");
  

}

