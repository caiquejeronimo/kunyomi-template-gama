function alerta_newsletter() {
    alert("Email cadastrado!");
}
$(function () {
    var operacao = "A"; //"A"=Adição; "E"=Edição
    var indice_selecionado = -1; //Índice do item selecionado na lista
    var tabelaClientes = localStorage.getItem("tabelaClientes"); // Recupera os dados armazenados
    tabelaClientes = JSON.parse(tabelaClientes); // Converte string para objeto
    if (tabelaClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
        tabelaClientes = [];
});

function Adicionar() {
    var cliente = JSON.stringify({
        Email: $("#emailnewsletter").val()
    });
    tabelaClientes.push(cliente);
    localStorage.setItem("tabelaClientes", JSON.stringify(tabelaClientes));
    alert("Registro adicionado.");
    return true;
}

function Editar() {
    tabelaClientes[indice_selecionado] = JSON.stringify({

        Email: $("#emailnewsletter").val()
    }); //Altera o item selecionado na tabela
    localStorage.setItem("tabelaClientes", JSON.stringify(tabelaClientes));
    alert("Informações editadas.")
    operacao = "A"; //Volta ao padrão
    return true;
}

function Excluir() {
    tabelaClientes.splice(indice_selecionado, 1);
    localStorage.setItem("tabelaClientes", JSON.stringify(tabelaClientes));
    alert("Registro excluído.");
}

function Listar() {
    $("#tblLiWistar tbody").append("</tr>");
}
$("#subscribe_popup").on("submit", function () {
    if (operacao == "A")
        return Adicionar();
    else
        return Editar();
});