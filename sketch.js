let campoIdade;
let campoFantasia;
let campoTerror;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoTerror = createCheckbox("Gosta de Terror?");
  createSpan("(Selecione apenas 1 gênero cinematográfico)");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeTerror = campoTerror.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeTerror);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeTerror) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Os Instrumentos Mortais: Cidade dos Ossos";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Lar das Crianças Peculiares";
        }
      } else {
        if (gostaDeTerror) {
          return "O Mistério do Relógio na Parede";
        } else {
          return "Matilda";
         
        }
      }
    }
  } else {
    if (gostaDeTerror) {
      return "Historietas assombradas- O Filme";
    } else {
      return "A viagem de Chiriro";
    }
  }
}
