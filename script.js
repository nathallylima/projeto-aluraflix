//guardar varios elementos dentro do colchetes 
var listaSeries = ['http://s2.glbimg.com/vkSTQkY6c7jlwzkZ2ApgvLt9bD-US7YvryW4xiLFm7JIoz-HdGixxa_8qOZvMp3w/e.glbimg.com/og/ed/f/original/2012/12/12/gossipgirl_sexta.jpg', 'https://cdn.fstatic.com/media/movies/covers/2014/07/brooklyn-nine-nine-season-2_tNone.jpg', 'http://poltronanerd.com.br/wp-content/uploads/2016/08/modern.poster.jpg', 'https://br.web.img2.acsta.net/pictures/22/06/22/22/53/3291092.jpg', 'https://0.soompi.io/wp-content/uploads/2022/02/06221940/A-Business-Proposal1.jpeg', 'https://br.web.img3.acsta.net/r_1280_720/pictures/20/06/15/13/37/0583386.jpg', 'https://br.web.img2.acsta.net/pictures/20/11/04/09/04/0691675.jpg', 'https://br.web.img3.acsta.net/pictures/21/11/09/15/43/4854059.jpg'];

var nomesSeries = ['Gossip Girl', 'Brooklyn Nine-Nine', 'Modern Family', 'Uma Advogada Extraordinária', 'Business Proposal', 'Outer Banks', 'Love & Anarchy', 'The Sex Lives Of College Girls'];

//estrutura de repetição enquanto alguma condição seja feita. sempre que cria um for, coloca uma variável de incremento: var i. repetir enquanto o i for menor que a quantidade de séries. incrementar um valor para o i, para não ficar eternamente executando no 0. i significa índice
//lenght é tamanho, no caso o tamanho da listaSeries
for (var i = 0; i < listaSeries.length; i=i+1) {
  //source, pacote, fonte, a imagem vai ter esse caminho
    document.write('<div class="poster">');
    document.write('<p><img src=' + listaSeries[i] + '><strong>' + nomesSeries[i] + '</strong></p>' );
    document.write('</div>');
  

}

