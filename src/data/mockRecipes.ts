import { IngredientCategory, MeasurementUnit, Recipe } from "../types/recipe";

export const mockRecipes: Recipe[] = [
  {
    id: "bread-1",
    name: "Pão Italiano",
    recipeType: "bread",
    description:
      "Com casca firme, rústica e levemente tostada, o Pão Italiano é uma verdadeira celebração da tradição. Seu interior é denso, úmido e cheio de alvéolos — perfeito para mergulhar em azeites aromáticos, acompanhar queijos curados ou servir de base para bruschettas.",
    image: require("../../assets/images/pao_italiano.jpg"),
    totalDoughWeight: 0,
    breadWeight: 350,
    defaultQuantity: 1,
    time: "14h a 16h",
    difficultyLevel: "Fácil",
    cuisine: "Italiana",
    location: "Toscana, Itália",

    ingredients: [
      {
        name: "Farinha Branca",
        percentage: 95,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha Integral",
        percentage: 5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água Gelada",
        percentage: 70,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Levain",
        percentage: 30,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
    ],
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelo o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Deixe a massa na geladeira. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com a bandeja vazia - 30 minutos.

🔹 **Vapor** - Ferva água separadamente para usar para fazer favor no momento da cocção.

🔹 **Forneamento com Vapor** - Cocção por 15 minutos a 190°C. - Vapor num recipiente a parte.

🔹 **Forneamento sem Vapor** - Gire o pão. Cocção por 15 minutos a 235°C. - Remover a bandeja do vapor.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejadmento inferior por aproximadamente 1 hora. `,
  },
  {
    id: "bread-2",
    name: "Pão Multigrãos",
    recipeType: "bread",
    description:
      "Inspirado nas tradições do sul da Itália, o Pão Multigrãos Rústico combina farinhas integrais e grãos selecionados para criar um pão artesanal, de casca crocante e miolo cheio de sabor. Nutritivo e marcante, é perfeito para quem valoriza saúde, autenticidade e o melhor da panificação italiana.",
    image: require("../../assets/images/pao_multigraos.jpg"),
    totalDoughWeight: 0,
    breadWeight: 350,
    defaultQuantity: 1,
    time: "14h a 16h",
    difficultyLevel: "Fácil",
    cuisine: "Artesanal",
    location: "Sul da Itália",

    ingredients: [
      {
        name: "Farinha branca",
        percentage: 65,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha integral",
        percentage: 35,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água gelada",
        percentage: 70,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 28.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Gluten (opcional)",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio",
        percentage: 7.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Glúten",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Ativação do Levain** - Certifique-se que o levain esteja bem ativo. Alimente-o 8-12 horas antes se necessário até dobrar de volume e apresentar aroma agradável.

🔹 **Mistura Inicial** - Misture as farinhas com a água e deixe em autólise por 45 minutos. Isso desenvolve a rede de glúten naturalmente.

🔹 **Incorporação do Levain** - Adicione o levain ativo e o mel à massa. Misture bem até incorporar completamente. A massa ficará um pouco grudenta.

🔹 **Adição do Sal** - Após 30 minutos, adicione o sal marinho e misture até distribuir uniformemente. Faça movimentos de dobra para desenvolver o glúten.

🔹 **Fermentação Lenta** - Deixe fermentar por 4-5 horas, fazendo dobras a cada 45 minutos nas primeiras 3 horas. A massa deve aumentar cerca de 70% do volume.

🔹 **Divisão e Pré-forma** - Divida em 4 porções iguais e faça uma pré-modelagem suave. Deixe descansar por 30 minutos sob pano úmido.

🔹 **Modelagem Final** - Modele cada porção no formato desejado, criando tensão na superfície. Coloque em cestas de fermentação.

🔹 **Fermentação Final** - Fermente por 2-3 horas em temperatura ambiente ou 12-18 horas na geladeira para desenvolver sabor complexo.

🔹 **Cocção Artesanal** - Asse a 240°C com vapor nos primeiros 15 minutos, depois 220°C por mais 20-25 minutos até formar crosta dourada e som oco ao bater.`,
  },
  {
    id: "bread-4",
    name: "Pão Tarallo",
    recipeType: "bread",
    description:
      "Tradicional pão italiano em forma de anel, originário do sul da Itália, especialmente das regiões da Campânia e da Puglia. De textura crocante por fora e mais macia por dentro, o Tarallo é muitas vezes aromatizado com erva-doce, pimenta-do-reino ou vinho branco. Versátil, ele pode ser doce ou salgado, e é ideal como petisco, acompanhamento ou aperitivo com queijos e vinhos.",
    image: require("../../assets/images/pao_tarallo.jpg"),
    totalDoughWeight: 0,
    breadWeight: 350,
    defaultQuantity: 1,
    time: "14h a 16h",
    difficultyLevel: "Médio",
    cuisine: "Artesanal",
    location: "Sul da Itália",

    ingredients: [
      {
        name: "Farinha branca",
        percentage: 95,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha integral",
        percentage: 5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água gelada",
        percentage: 52,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Vinho branco",
        percentage: 18,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 28.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Glúten (opcional)",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio",
        percentage: 0,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Funcho",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Raspas de Limão Siciliano (Meio limão",
        percentage: 0,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Ativação do Levain** - Certifique-se que o levain esteja bem ativo. Alimente-o 8-12 horas antes se necessário até dobrar de volume e apresentar aroma agradável.

🔹 **Mistura Inicial** - Misture as farinhas com a água e deixe em autólise por 45 minutos. Isso desenvolve a rede de glúten naturalmente.

🔹 **Incorporação do Levain** - Adicione o levain ativo e o mel à massa. Misture bem até incorporar completamente. A massa ficará um pouco grudenta.

🔹 **Adição do Sal** - Após 30 minutos, adicione o sal marinho e misture até distribuir uniformemente. Faça movimentos de dobra para desenvolver o glúten.

🔹 **Fermentação Lenta** - Deixe fermentar por 4-5 horas, fazendo dobras a cada 45 minutos nas primeiras 3 horas. A massa deve aumentar cerca de 70% do volume.

🔹 **Divisão e Pré-forma** - Divida em 4 porções iguais e faça uma pré-modelagem suave. Deixe descansar por 30 minutos sob pano úmido.

🔹 **Modelagem Final** - Modele cada porção no formato desejado, criando tensão na superfície. Coloque em cestas de fermentação.

🔹 **Fermentação Final** - Fermente por 2-3 horas em temperatura ambiente ou 12-18 horas na geladeira para desenvolver sabor complexo.

🔹 **Cocção Artesanal** - Asse a 240°C com vapor nos primeiros 15 minutos, depois 220°C por mais 20-25 minutos até formar crosta dourada e som oco ao bater.`,
  },
  {
    id: "bread-5",
    name: "Pão Campanha",
    recipeType: "bread",
    description:
      "pão rústico de origem francesa, feito com farinha de trigo branca, integral e centeio. Possui casca crocante, miolo denso e sabor levemente ácido, típico da fermentação natural. Ideal para acompanhar queijos, embutidos ou ser apreciado puro, realçando seu perfil artesanal e nutritivo.",
    image: require("../../assets/images/pao_campanha.jpg"),
    totalDoughWeight: 0,
    breadWeight: 350,
    defaultQuantity: 1,
    time: "14h a 16h",
    difficultyLevel: "Médio",
    cuisine: "Artesanal",
    location: "Sul da França",

    ingredients: [
      {
        name: "Farinha branca",
        percentage: 65,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha integral",
        percentage: 35,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água gelada",
        percentage: 70,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },

      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 28.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Glúten (opcional)",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio (opcional)",
        percentage: 0,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Ativação do Levain** - Certifique-se que o levain esteja bem ativo. Alimente-o 8-12 horas antes se necessário até dobrar de volume e apresentar aroma agradável.

🔹 **Mistura Inicial** - Misture as farinhas com a água e deixe em autólise por 45 minutos. Isso desenvolve a rede de glúten naturalmente.

🔹 **Incorporação do Levain** - Adicione o levain ativo e o mel à massa. Misture bem até incorporar completamente. A massa ficará um pouco grudenta.

🔹 **Adição do Sal** - Após 30 minutos, adicione o sal marinho e misture até distribuir uniformemente. Faça movimentos de dobra para desenvolver o glúten.

🔹 **Fermentação Lenta** - Deixe fermentar por 4-5 horas, fazendo dobras a cada 45 minutos nas primeiras 3 horas. A massa deve aumentar cerca de 70% do volume.

🔹 **Divisão e Pré-forma** - Divida em 4 porções iguais e faça uma pré-modelagem suave. Deixe descansar por 30 minutos sob pano úmido.

🔹 **Modelagem Final** - Modele cada porção no formato desejado, criando tensão na superfície. Coloque em cestas de fermentação.

🔹 **Fermentação Final** - Fermente por 2-3 horas em temperatura ambiente ou 12-18 horas na geladeira para desenvolver sabor complexo.

🔹 **Cocção Artesanal** - Asse a 240°C com vapor nos primeiros 15 minutos, depois 220°C por mais 20-25 minutos até formar crosta dourada e som oco ao bater.`,
  },
  {
    id: "bread-6",
    name: "Pão Cacau",
    recipeType: "bread",
    description:
      "Deliciosa criação de inspiração europeia, que une a tradição dos pães artesanais ao sabor marcante do cacau. Feito com levain e ingredientes naturais, tem casca crocante, miolo úmido e macio, e um leve toque de chocolate amargo que surpreende no paladar. Ideal para acompanhar queijos, frutas ou ser saboreado puro, é perfeito para quem busca um pão diferenciado, nutritivo e cheio de personalidade.",
    image: require("../../assets/images/pao_cacau.jpg"),
    totalDoughWeight: 0,
    breadWeight: 350, // 150g cada pãozinho
    defaultQuantity: 1, // Receita original faz 4 pãezinhos
    time: "12h a 18h",
    difficultyLevel: "Difícil",
    cuisine: "France",
    location: "Alsácia, França / Alemanha",
    ratings: "",
    ingredients: [
      {
        name: "Farinha branca",
        percentage: 65,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha Integral",
        percentage: 35,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água gelada",
        percentage: 70,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 28.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Cacau",
        percentage: 5.6,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Chips de Chocolate",
        percentage: 14.3,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Garan Massala",
        percentage: 0.8,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Mel",
        percentage: 4.3,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Glúten",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Preparação Base** - Dissolva o fermento no leite morno com uma pitada de açúcar. Deixe ativar por 5-10 minutos até fazer espuma.

🔹 **Mistura Seca** - Em uma tigela grande, peneire a farinha com o cacau em pó. Adicione o açúcar restante e o sal, misturando bem os ingredientes secos.

🔹 **Formação da Massa** - Faça um buraco no centro dos ingredientes secos e adicione o fermento ativado. Misture até formar uma massa homogênea.

🔹 **Incorporação da Gordura** - Adicione a manteiga em temperatura ambiente e amasse por 8-10 minutos até a massa ficar lisa, elástica e levemente grudenta.

🔹 **Primeira Fermentação** - Coloque a massa em tigela untada, cubra e deixe crescer por 1-1.5 horas até dobrar de volume. O cacau pode deixar a fermentação um pouco mais lenta.

🔹 **Modelagem** - Divida a massa em 4 porções iguais e modele no formato desejado (bolinhas, pãezinhos alongados ou formato de brioche).

🔹 **Segunda Fermentação** - Disponha em assadeira untada, cubra e deixe crescer por 45-60 minutos até aumentar bem de volume.

🔹 **Finalização** - Pincele com leite ou gema batida para dar brilho. Pode polvilhar açúcar cristal por cima para caramelizar.

🔹 **Cocção** - Asse a 180°C por 20-25 minutos até dourar e fazer som oco ao bater. Deixe esfriar antes de servir.`,
  },
  {
    id: "bread-7",
    name: "Pão Forma Integral",
    recipeType: "bread",
    description:
      "Leve, macio e nutritivo, o Pão de Forma Integral é feito com farinha 100% integral, oferecendo mais fibras, sabor e saciedade para o dia a dia. Ideal para sanduíches ou torradas, ele combina praticidade com uma alimentação mais equilibrada.",
    image: require("../../assets/images/pao-forma-integral.jpg"),
    totalDoughWeight: 0,
    breadWeight: 350,
    defaultQuantity: 1,
    time: "Entre 4h e 5h",
    difficultyLevel: "Médio",
    cuisine: "France",
    location: "Estados Unidos",
    ratings: "",
    ingredients: [
      {
        name: "Farinha Integral",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água",
        percentage: 65,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Açúcar",
        percentage: 4,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio (opcional)",
        percentage: 10,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Manteiga (sem sal)",
        percentage: 6,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Fermento Biológico Seco",
        percentage: 0.8,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Preparação Base** - Misturar tudo e deixar descansar por 5 minutos.

🔹 **Sova** - Sovar por aproximadamente 10 minutos na batedeira.

🔹 **Crescimento** - Deixar crescer até dobrar de tamanho / volume.

🔹 **Modelagem** - Modelar e colocar na forma.

🔹 **Crescimento final** - Deixar crescer por aproximadamewnte 2 horas, até chegar na borda da forma.

🔹 **Forneamento** - Forno a 180°C com Vapor em 2 etapas de 15 mimnutos.`,
  },
  {
    id: "bread-8",
    name: "Pão Forma Multigrãos",
    recipeType: "bread",
    description:
      "Macio, saboroso e rico em nutrientes, o Pão de Forma Multigrãos combina diferentes cereais e sementes — como aveia, linhaça, girassol e gergelim — para oferecer mais fibras, textura e sabor em cada fatia. Ideal para quem busca uma dieta equilibrada sem abrir mão do sabor.",
    image: require("../../assets/images/pao-forma-multigraos.jpeg"),
    totalDoughWeight: 0,
    breadWeight: 325,
    defaultQuantity: 1,
    time: "3-4 horas",
    difficultyLevel: "Médio",
    cuisine: "France",
    location: "Estados Unidos",
    ratings: "",
    ingredients: [
      {
        name: "Farinha Branca",
        percentage: 80,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha Integral",
        percentage: 20,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água",
        percentage: 65,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Açúcar",
        percentage: 4,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio (opcional)",
        percentage: 10,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Manteiga (sem sal)",
        percentage: 6,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Fermento Biológico Seco",
        percentage: 0.8,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Preparação Base** - Misturar tudo e deixar descansar por 5 minutos.

🔹 **Sova** - Sovar por aproximadamente 10 minutos na batedeira.

🔹 **Crescimento** - Deixar crescer até dobrar de tamanho / volume.

🔹 **Modelagem** - Modelar e colocar na forma.

🔹 **Crescimento final** - Deixar crescer por aproximadamewnte 2 horas, até chegar na borda da forma.

🔹 **Forneamento** - Forno a 180°C com Vapor em 2 etapas de 15 mimnutos.`,
  },
  {
    id: "bread-9",
    name: "Pão Ciabatta",
    recipeType: "bread",
    description:
      "Pão Ciabatta é conhecido por sua casca crocante, miolo leve e irregular e sabor delicado. Criado na região do Vêneto na década de 1980 como resposta italiana ao pão baguete, seu nome significa “chinelo”, em referência ao formato achatado. Feito com alta hidratação e fermentação lenta, é perfeito para sanduíches ou para ser apreciado puro com azeite de oliva.",
    image: require("../../assets/images/pao-ciabatta.jpg"),
    totalDoughWeight: 0,
    breadWeight: 400, // 150g cada pãozinho
    defaultQuantity: 1, // Receita original faz 4 pãezinhos
    time: "12h a 18h",
    difficultyLevel: "Difícil",
    cuisine: "Italian",
    location: "Vêneto, Itália",
    ratings: "",
    ingredients: [
      {
        name: "Farinha branca",
        percentage: 95,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha Integral",
        percentage: 5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água gelada",
        percentage: 70,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 2.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 10,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Fermento Biológico Seco",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Óleo",
        percentage: 3,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Ativação do Levain** - Certifique-se que o levain esteja bem ativo. Alimente-o 8-12 horas antes se necessário até dobrar de volume e apresentar aroma agradável.

🔹 **Mistura Inicial** - Misture as farinhas com a água e deixe em autólise por 45 minutos. Isso desenvolve a rede de glúten naturalmente.

🔹 **Incorporação do Levain** - Adicione o levain ativo e o mel à massa. Misture bem até incorporar completamente. A massa ficará um pouco grudenta.

🔹 **Adição do Sal** - Após 30 minutos, adicione o sal marinho e misture até distribuir uniformemente. Faça movimentos de dobra para desenvolver o glúten.

🔹 **Fermentação Lenta** - Deixe fermentar por 4-5 horas, fazendo dobras a cada 45 minutos nas primeiras 3 horas. A massa deve aumentar cerca de 70% do volume.

🔹 **Divisão e Pré-forma** - Divida em 4 porções iguais e faça uma pré-modelagem suave. Deixe descansar por 30 minutos sob pano úmido.

🔹 **Modelagem Final** - Modele cada porção no formato desejado, criando tensão na superfície. Coloque em cestas de fermentação.

🔹 **Fermentação Final** - Fermente por 2-3 horas em temperatura ambiente ou 12-18 horas na geladeira para desenvolver sabor complexo.

🔹 **Total de Unidades** - A cada 400 gr de farinha, faz 4 unidades de Ciabatta
🔹 **Cocção Artesanal** - Asse a 240°C com vapor nos primeiros 15 minutos, depois 220°C por mais 20-25 minutos até formar crosta dourada e som oco ao bater.`,
  },
  {
    id: "bread-10",
    name: "Pão Francês",
    recipeType: "bread",
    description:
      "Clássico das padarias brasileiras, o Pão Francês tem casca dourada e crocante com miolo leve e macio, ideal para o café da manhã ou sanduíches. Apesar do nome, sua origem é nacional — inspirado nas baguetes francesas, foi adaptado no Brasil no início do século XX para agradar ao paladar local. Hoje, é um dos pães mais consumidos do país, símbolo de sabor e tradição.",
    image: require("../../assets/images/pao-frances.jpeg"),
    totalDoughWeight: 0,
    breadWeight: 300,
    defaultQuantity: 1,
    time: "14h a 16h",
    difficultyLevel: "Médio",
    cuisine: "Brasileira",
    location: "ToRio de Janeiro, Brasil",

    ingredients: [
      {
        name: "Farinha Branca",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },

      {
        name: "Água Gelada",
        percentage: 55,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Sal",
        percentage: 2.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 30,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Açúcar",
        percentage: 1.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Banha",
        percentage: 1.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Fermento Biológico Seco",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelo o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Deixe a massa na geladeira. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com a bandeja vazia - 30 minutos.

🔹 **Vapor** - Ferva água separadamente para usar para fazer favor no momento da cocção.

🔹 **Forneamento com Vapor** - Cocção por 15 minutos a 190°C. - Vapor num recipiente a parte.

🔹 **Forneamento sem Vapor** - Gire o pão. Cocção por 15 minutos a 235°C. - Remover a bandeja do vapor.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejadmento inferior por aproximadamente 1 hora. `,
  },
  {
    id: "r-1",
    name: "Pizza Napolitana",
    recipeType: "pizza",
    description:
      "A clássica pizza italiana com molho de tomate, mussarela fresca e manjericão. Simples, elegante e cheia de sabor.",
    image: require("../../assets/images/big_1.png"),
    totalDoughWeight: 800,
    breadWeight: 200,
    defaultQuantity: 4,
    time: "2-3 horas",
    difficultyLevel: "Médio",
    cuisine: "Italiana",
    location: "Nápoles, Itália",
    ratings: "4.9 ⭐ (456 avaliações)",
    ingredients: [
      {
        name: "Farinha de trigo tipo 00",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água",
        percentage: 65,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Fermento biológico seco",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal",
        percentage: 2.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Azeite extra virgem",
        percentage: 3,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.FAT,
      },
    ],
    instructions: `🔹 **Preparação da Massa** - Misture a farinha com o fermento seco. Adicione a água gradualmente, misturando até formar uma massa homogênea.

🔹 **Desenvolvimento do Glúten** - Adicione o sal e amasse por 10-15 minutos até a massa ficar lisa e elástica. Incorpore o azeite aos poucos.

🔹 **Primeira Fermentação** - Coloque a massa em tigela untada, cubra e deixe fermentar por 1-2 horas até dobrar de volume.

🔹 **Divisão e Modelagem** - Divida a massa em 4 porções iguais. Modele cada uma em formato de disco fino (cerca de 30cm de diâmetro).

🔹 **Segunda Fermentação** - Deixe as pizzas fermentar por 30-45 minutos em temperatura ambiente.

🔹 **Montagem** - Espalhe o molho de tomate, adicione a mussarela fatiada e o manjericão fresco.

🔹 **Cocção** - Asse a 280°C por 8-12 minutos até a borda dourar e o queijo derreter.`,
  },
  {
    id: "pizza-2",
    name: "New York Pizza",
    recipeType: "pizza",
    description:
      "Pizza americana com pepperoni picante, queijo mussarela e molho de tomate. Perfeita para quem gosta de sabores intensos.",
    image: require("../../assets/images/big_2.png"),
    totalDoughWeight: 800,
    breadWeight: 200,
    defaultQuantity: 4,
    time: "2-3 horas",
    difficultyLevel: "Médio",
    cuisine: "Americana",
    location: "Nova York, EUA",
    ratings: "4.7 ⭐ (312 avaliações)",
    ingredients: [
      {
        name: "Farinha de trigo tipo 0",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água",
        percentage: 62,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Fermento biológico seco",
        percentage: 1.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal",
        percentage: 2.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Azeite extra virgem",
        percentage: 4,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.FAT,
      },
    ],
    instructions: `🔹 **Preparação da Massa** - Dissolva o fermento na água morna. Misture com a farinha e adicione o sal gradualmente.

🔹 **Amassamento** - Amasse por 12-15 minutos até a massa ficar lisa e elástica. Incorpore o azeite aos poucos.

🔹 **Fermentação** - Deixe fermentar por 2-3 horas em temperatura ambiente, fazendo dobras a cada 30 minutos.

🔹 **Modelagem** - Divida em 4 porções e modele cada uma em disco fino (25-30cm).

🔹 **Montagem** - Espalhe molho de tomate, adicione mussarela e pepperoni fatiado.

🔹 **Cocção** - Asse a 260°C por 10-15 minutos até a borda dourar e o queijo derreter.`,
  },
  {
    id: "special-1",
    name: "Pão Tortano",
    recipeType: "special",
    description:
      "O Pão Tortano é um pão italiano em formato de anel, típico de Nápoles. É recheado com embutidos, queijos e ervas, combinando massa macia com casca crocante. Tradicionalmente servido em festas, especialmente na Páscoa.",
    image: require("../../assets/images/pao_tortano.jpg"),
    totalDoughWeight: 400,
    breadWeight: 250,
    defaultQuantity: 1,
    time: "14h a 16h horas",
    difficultyLevel: "Difícil",
    cuisine: "Italiana",
    location: "Nápoles, Itália",
    ingredients: [
      {
        name: "Farinha de trigo tipo 1",
        percentage: 65,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Semolina",
        percentage: 35,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água",
        percentage: 68,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Fermento biológico seco",
        percentage: 1.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal",
        percentage: 2.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Azeite extra virgem",
        percentage: 4,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.FAT,
      },
    ],
    instructions: `🔹 **Preparação da Massa** - Em uma tigela grande, misture as farinhas e faça um buraco no centro. Dissolva o fermento em parte da água morna e adicione ao centro. Misture gradualmente até formar uma massa homogênea.

🔹 **Desenvolvimento do Glúten** - Adicione o sal e continue amassando por 8-10 minutos até a massa ficar lisa e elástica. Incorpore o azeite aos poucos, amassando até absorver completamente.

🔹 **Primeira Fermentação** - Coloque a massa em uma tigela untada com azeite, cubra com filme plástico e deixe fermentar por 1-2 horas até dobrar de volume.

🔹 **Modelagem** - Divida a massa em 2 porções iguais. Modele cada uma em formato de rosca (tortano), criando um círculo com um furo no centro de cerca de 6cm de diâmetro.

🔹 **Segunda Fermentação** - Coloque os tortanos em assadeiras forradas com papel manteiga, cubra e deixe crescer por 45-60 minutos até aumentar 50% do volume.

🔹 **Preparação para Assar** - Preaqueça o forno a 220°C. Pincele a superfície com azeite e faça pequenos cortes decorativos com uma lâmina.

🔹 **Cocção** - Asse por 25-30 minutos até dourar bem. Reduza para 200°C nos últimos 10 minutos se necessário.

🔹 **Finalização** - Retire do forno e deixe esfriar sobre uma grade por pelo menos 30 minutos antes de cortar. Pincele com azeite ainda morno para dar brilho.`,
  },
  {
    id: "5",
    name: "Pão de Levain Artesanal",
    recipeType: "special",
    description:
      "Pão de fermentação natural com 72 horas de desenvolvimento, casca crocante e miolo aerado. Uma obra-prima da panificação artesanal.",
    image: require("../../assets/images/levain_big.jpg"),
    totalDoughWeight: 1200,
    breadWeight: 600,
    defaultQuantity: 2,
    time: "72 horas",
    difficultyLevel: "Difícil",
    cuisine: "Artesanal",
    location: "São Francisco, EUA",
    ratings: "4.9 ⭐ (567 avaliações)",
    ingredients: [
      {
        name: "Farinha de trigo tipo 1",
        percentage: 85,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha integral",
        percentage: 15,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água filtrada",
        percentage: 78,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Levain natural",
        percentage: 20,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal marinho",
        percentage: 2.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
    ],
    instructions: `🔹 **Preparação do Levain** - Alimente o levain 12 horas antes com farinha integral e água filtrada. Deixe ativar até dobrar de volume.

🔹 **Autólise** - Misture farinhas com água e deixe descansar por 30 minutos. Isso desenvolve o glúten naturalmente.

🔹 **Incorporação** - Adicione o levain ativo e misture bem. Deixe descansar por 30 minutos antes de adicionar o sal.

🔹 **Desenvolvimento** - Adicione o sal e faça dobras a cada 30 minutos por 3 horas. A massa deve ficar lisa e elástica.

🔹 **Fermentação Lenta** - Deixe fermentar por 4-6 horas em temperatura controlada (22-24°C).

🔹 **Refrigeração** - Transfira para geladeira por 12-18 horas para desenvolver sabor complexo.

🔹 **Modelagem** - Divida e modele com tensão na superfície. Coloque em cestas de fermentação.

🔹 **Fermentação Final** - Deixe fermentar por 2-3 horas em temperatura ambiente.

🔹 **Cocção** - Asse a 250°C com vapor nos primeiros 20 minutos, depois 230°C por mais 30-35 minutos.`,
  },
  {
    id: "special-2",
    name: "Pão de Ciabatta Clássico",
    recipeType: "special",
    description:
      "Pão italiano com alta hidratação, casca fina e miolo cheio de alvéolos irregulares. Perfeito para bruschettas e sanduíches gourmet.",
    image: require("../../assets/images/pao-ciabatta.jpg"),
    totalDoughWeight: 1000,
    breadWeight: 400,
    defaultQuantity: 2,
    time: "18-24 horas",
    difficultyLevel: "Médio",
    cuisine: "Italiana",
    location: "Ligúria, Itália",
    ratings: "4.7 ⭐ (423 avaliações)",
    ingredients: [
      {
        name: "Farinha de trigo tipo 00",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água",
        percentage: 75,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Fermento biológico seco",
        percentage: 0.8,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal",
        percentage: 2.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Azeite extra virgem",
        percentage: 3,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.FAT,
      },
    ],
    instructions: `🔹 **Biga** - Prepare biga 16 horas antes: misture 30% da farinha com 60% da água e 0.1% do fermento. Deixe fermentar em geladeira.

🔹 **Mistura Final** - Dissolva o biga na água restante. Adicione farinha e misture até formar massa homogênea.

🔹 **Autólise** - Deixe descansar por 30 minutos para desenvolver glúten naturalmente.

🔹 **Sal e Azeite** - Adicione sal e azeite. Faça dobras a cada 30 minutos por 2 horas.

🔹 **Fermentação** - Deixe fermentar por 3-4 horas em temperatura ambiente.

🔹 **Modelagem** - Divida em 2 porções e modele no formato de ciabatta (sola de sapato).

🔹 **Fermentação Final** - Deixe fermentar por 1-2 horas em temperatura ambiente.

🔹 **Cocção** - Asse a 240°C com vapor por 25-30 minutos até dourar bem.`,
  },
  {
    id: "special-3",
    name: "Pão de Forma Integral",
    recipeType: "special",
    description:
      "Pão nutritivo e saudável com farinha integral, sementes e grãos. Rico em fibras e perfeito para uma alimentação equilibrada.",
    image: require("../../assets/images/pao-forma-integral.jpg"),
    totalDoughWeight: 800,
    breadWeight: 750,
    defaultQuantity: 1,
    time: "4-5 horas",
    difficultyLevel: "Fácil",
    cuisine: "Brasileira",
    location: "São Paulo, Brasil",
    ratings: "4.6 ⭐ (298 avaliações)",
    ingredients: [
      {
        name: "Farinha integral",
        percentage: 70,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha branca",
        percentage: 30,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água morna",
        percentage: 65,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Fermento biológico seco",
        percentage: 1.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Sementes de girassol",
        percentage: 8,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Sementes de linhaça",
        percentage: 5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Ativação do Fermento** - Dissolva o fermento em água morna com uma pitada de açúcar. Deixe ativar por 10 minutos.

🔹 **Mistura** - Misture as farinhas com água e fermento ativado. Adicione sal e sementes.

🔹 **Amassamento** - Amasse por 8-10 minutos até a massa ficar lisa e elástica.

🔹 **Primeira Fermentação** - Deixe fermentar por 1.5-2 horas até dobrar de volume.

🔹 **Modelagem** - Modele no formato de pão de forma e coloque em forma untada.

🔹 **Segunda Fermentação** - Deixe fermentar por 45-60 minutos até aumentar bem de volume.

🔹 **Cocção** - Asse a 180°C por 35-40 minutos até dourar e fazer som oco ao bater.

🔹 **Resfriamento** - Deixe esfriar completamente antes de cortar.`,
  },
  {
    id: "special-4",
    name: "Pão de Fermentação Natural",
    recipeType: "special",
    description:
      "Pão tradicional com fermentação natural de 48 horas, casca rústica e sabor complexo. Uma experiência única de panificação artesanal.",
    image: require("../../assets/images/hungara_big.jpg"),
    totalDoughWeight: 900,
    breadWeight: 450,
    defaultQuantity: 2,
    time: "48 horas",
    difficultyLevel: "Difícil",
    cuisine: "Artesanal",
    location: "Budapeste, Hungria",
    ratings: "4.8 ⭐ (345 avaliações)",
    ingredients: [
      {
        name: "Farinha de trigo tipo 1",
        percentage: 80,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Farinha de centeio",
        percentage: 20,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Água filtrada",
        percentage: 72,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Levain natural",
        percentage: 25,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LEAVENING,
      },
      {
        name: "Sal marinho",
        percentage: 2.2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Mel",
        percentage: 3,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 **Preparação do Levain** - Alimente o levain 12 horas antes com farinha integral e água. Deixe ativar até dobrar de volume.

🔹 **Autólise** - Misture farinhas com água e deixe descansar por 45 minutos para desenvolver glúten naturalmente.

🔹 **Incorporação** - Adicione o levain ativo e o mel. Misture bem até incorporar completamente.

🔹 **Desenvolvimento** - Adicione o sal e faça dobras a cada 45 minutos por 4 horas. A massa deve ficar lisa e elástica.

🔹 **Fermentação Lenta** - Deixe fermentar por 6-8 horas em temperatura controlada (22-24°C).

🔹 **Refrigeração** - Transfira para geladeira por 12-16 horas para desenvolver sabor complexo.

🔹 **Modelagem** - Divida e modele com tensão na superfície. Coloque em cestas de fermentação.

🔹 **Fermentação Final** - Deixe fermentar por 2-3 horas em temperatura ambiente.

🔹 **Cocção** - Asse a 250°C com vapor nos primeiros 20 minutos, depois 230°C por mais 25-30 minutos.`,
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return mockRecipes.find((recipe) => recipe.id === id);
}

export function getAllRecipes(): Recipe[] {
  return mockRecipes;
}
