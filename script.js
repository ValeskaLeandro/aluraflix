    var invocacao = {
        nome: "Invocação do Mal 3",
        urlImagem: "https://br.web.img3.acsta.net/pictures/20/08/14/17/35/2504537.jpg",
        urlTrailer:"https://www.youtube.com/watch?v=anDtrp34xig"
    }
    var branquelas = {
        nome: "As branquelas",
        urlImagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyO-M9DGxJOTtDV7uTHqvYCiQfkDp-y_EBWIz7m0iUcBuVz5sE",
        urlTrailer:"https://www.youtube.com/watch?v=cjnmsoJavj0"
        }

    var filmes = [invocacao, branquelas];

    


function exibirFilmes (filmes) {
    var html ="";
    for (var i = 0; i < filmes.length; i++){
    
    html+=  "<a class='filme'href="+ filmes[i].urlTrailer +">"
    html+=  "<img src="+ filmes[i].urlImagem +" alt="+ filmes[i].nome +">"
    html+= "<p id='nomeFilme'>"+ filmes[i].nome +"</p>"
    html+="</a>"
    }
    var listaFilmes = document.getElementById("Filme");
    listaFilmes.innerHTML = html;
}
exibirFilmes(filmes);

function adicionarFilme() {
     
    var novoFilme = {};
    novoFilme.nome = document.getElementById("nomeFilme").value;
    novoFilme.urlImagem = document.getElementById("urlImg").value;
    novoFilme.urlTrailer = document.getElementById("urlTrailer").value;
    
    document.getElementById("nomeFilme").value = "";
    document.getElementById("urlImg").value = "";
    document.getElementById("urlTrailer").value = "";

    if(novoFilme.nome == "" || novoFilme.urlImagem == "" || novoFilme.urlTrailer == "") {
        alert('Por favor, preencha os campos.')
    }else{
        filmes.push(novoFilme);
                
    }     
    exibirFilmes(filmes);

}




