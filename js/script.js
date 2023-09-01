class Produtos{
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];

    }

    Adicionar(){
       let produto = this.lerDados()//Chamando produto

       if(this.validar(produto) == true){
            this.Salvar(produto);
       }

       this.Listar();
       this.Cancelar();
       
    }

    lerDados(){ //Ele cria objeto produto
        let produto = {}

        produto.id = this.id; //add id ao let produto criado acima
        produto.nomeProduto = document.getElementById('pdNome').value; //add nome ao let produto criado acima
        produto.precoProduto = document.getElementById('pdPreco').value;//add preço ao let produto criado acima
        
        return produto;//retorna o produto ja com os dados add
    }

    validar(produto){ 
        let msg = '';

        if(produto.nomeProduto == ''){ 
            msg += 'Por favor Adicione corretamente o nome do produto \n'
        }

        if(produto.precoProduto == ''){
            msg += 'Por favor Adicione corretamente o preço do produto \n'
        }

        if(msg != ''){
            alert(msg)
            return false;
        }

        return true;
    }

    Salvar(produto){
        this.arrayProdutos.push(produto);
        this.id++;
    }

    Listar(){
        let tbody = document.getElementById('tbody');

        tbody.innerHTML = '';

        for(let i = 0; i < this.arrayProdutos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = 'R$' + this.arrayProdutos[i].precoProduto;
            
            let imagem = document.createElement('img');
            imagem.src = 'img/del.png';
            imagem.setAttribute('onclick', "produto.Deletar("+this.arrayProdutos[i].id+")");
            td_del.appendChild(imagem);
        }
    }

    Cancelar(){
        document.getElementById('pdNome').value = '';
        document.getElementById('pdPreco').value = '';
    }

    Deletar(id){

        let tbody = document.getElementById('tbody');
        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
        alert('O item foi apagado com sucesso');
    }
}

var produto = new Produtos();