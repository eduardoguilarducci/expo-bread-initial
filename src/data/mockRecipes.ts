import { IngredientCategory, MeasurementUnit, Recipe } from "../types/recipe";

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    name: "Pão Tortano",
    recipeType: "bread",
    description:
      "Pão artesanal italiano em formato de coroa, com massa macia e sabor característico.",
    image: require("../../assets/images/tortano_big.jpg"),
    totalDoughWeight: 1000,
    breadWeight: 500, // 500g cada pão tortano
    defaultQuantity: 2, // Receita original faz 2 pães
    time: "4-6 horas",
    difficultyLevel: "Médio",
    cuisine: "Italiana",
    location: "Nápoles, Itália",
    ratings: "4.8 ⭐ (324 avaliações)",
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
    id: "2",
    name: "Pão Italiano",
    recipeType: "bread",
    description:
      "Com casca firme, rústica e levemente tostada, o Pão Italiano é uma verdadeira celebração da tradição. Seu interior é denso, úmido e cheio de alvéolos — perfeito para mergulhar em azeites aromáticos, acompanhar queijos curados ou servir de base para bruschettas.",
    image: require("../../assets/images/pao_italiano.png"),
    totalDoughWeight: 0,
    breadWeight: 350,
    defaultQuantity: 1,
    time: "60 min",
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
    instructions: `🔹 **Preparação do Levain** - Se usando levain natural, certifique-se que esteja ativo e no ponto ideal. Misture com parte da água gelada até dissolver completamente.

🔹 **Autólise** - Misture as farinhas com a água gelada restante e deixe descansar por 30 minutos. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Adicione o levain dissolvido à massa de autólise e misture bem. Deixe descansar por 30 minutos antes de adicionar o sal.

🔹 **Desenvolvimento** - Adicione o sal e amasse por 5-8 minutos até a massa ficar lisa. A massa deve estar um pouco grudenta devido à alta hidratação.

🔹 **Fermentação com Dobras** - Deixe a massa fermentar por 3-4 horas, fazendo dobras a cada 30 minutos nas primeiras 2 horas. Isso fortalece a estrutura do glúten.

🔹 **Pré-modelagem** - Divida a massa em 2 porções e faça uma pré-modelagem suave. Deixe descansar por 20 minutos.

🔹 **Modelagem Final** - Modele os pães no formato desejado e coloque em cestas de fermentação ou tigelas forradas com tecido enfarinhado.

🔹 **Fermentação Final** - Deixe fermentar por 1-2 horas em temperatura ambiente ou overnight na geladeira para melhor sabor.

🔹 **Cocção** - Asse a 230°C por 20 minutos com vapor, depois reduza para 210°C e asse por mais 15-20 minutos até dourar bem.`,
  },
  {
    id: "3",
    name: "Pão Tarallo",
    recipeType: "bread",
    description:
      "Pão rústico de fermentação natural, com casca crocante e miolo aromático. Inspirado nas tradições do sul da Itália, o Tarallo combina sabor intenso, textura marcante e um leve toque ácido, perfeito para quem aprecia um pão com personalidade.",
    image: require("../../assets/images/big_3.png"),
    totalDoughWeight: 0,
    breadWeight: 350, // 300g cada pão
    defaultQuantity: 1, // Receita original faz 4 pães
    time: "90 min",
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
        name: "Levain natural",
        percentage: 29,
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
        name: "Funcho",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Raspas de Limão Siciliano",
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
    id: "4",
    name: "Pão Cacau",
    recipeType: "bread",
    description:
      "Pão doce com cacau, perfeito para café da manhã ou lanche da tarde.",
    image: require("../../assets/images/big_4.png"),
    totalDoughWeight: 0,
    breadWeight: 350, // 150g cada pãozinho
    defaultQuantity: 1, // Receita original faz 4 pãezinhos
    time: "3-4 horas",
    difficultyLevel: "Difícil",
    cuisine: "Brasileira",
    location: "São Paulo, Brasil",
    ratings: "4.7 ⭐ (198 avaliações)",
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
        name: "Levain natural",
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
    id: "5",
    name: "Pão Multigrãos",
    recipeType: "bread",
    description:
      "ão rústico, nutritivo e cheio de textura, feito com uma combinação de grãos integrais que trazem sabor intenso e crocância a cada mordida. Ideal para um café da manhã reforçado ou um lanche saudável e cheio de personalidade.",
    image: require("../../assets/images/big_4.png"),
    totalDoughWeight: 0,
    breadWeight: 350, // 150g cada pãozinho
    defaultQuantity: 1, // Receita original faz 4 pãezinhos
    time: "80mins",
    difficultyLevel: "Fácil",
    cuisine: "Brasileira",
    location: "San Francisco, Estados Unidos",
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
        category: IngredientCategory.OTHER,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain natural",
        percentage: 28.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio (opcional)",
        percentage: 7.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Glúten (opcional)",
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
    id: "6",
    name: "Pão Campanha",
    recipeType: "bread",
    description:
      "Pão rústico, nutritivo e cheio de textura, feito com uma combinação de grãos integrais que trazem sabor intenso e crocância a cada mordida. Ideal para um café da manhã reforçado ou um lanche saudável e cheio de personalidade.",
    image: require("../../assets/images/big_4.png"),
    totalDoughWeight: 0,
    breadWeight: 350, // 150g cada pãozinho
    defaultQuantity: 1, // Receita original faz 4 pãezinhos
    time: "75 min",
    difficultyLevel: "Fácil",
    cuisine: "Brasileira",
    location: "San Francisco, Estados Unidos",
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
        category: IngredientCategory.OTHER,
      },
      {
        name: "Sal",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain natural",
        percentage: 28.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio (opcional)",
        percentage: 0,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Glúten (opcional)",
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
    id: "r-1",
    name: "Pizza Margherita",
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
    name: "Pizza Pepperoni",
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
    id: "pizza-3",
    name: "Pizza Quatro Queijos",
    recipeType: "pizza",
    description:
      "Pizza sofisticada com quatro tipos de queijo: mussarela, parmesão, gorgonzola e provolone. Uma experiência gastronômica única.",
    image: require("../../assets/images/big_3.png"),
    totalDoughWeight: 800,
    breadWeight: 200,
    defaultQuantity: 4,
    time: "2-3 horas",
    difficultyLevel: "Difícil",
    cuisine: "Italiana",
    location: "Roma, Itália",
    ratings: "4.8 ⭐ (289 avaliações)",
    ingredients: [
      {
        name: "Farinha de trigo tipo 00",
        percentage: 100,
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
    instructions: `🔹 **Preparação da Massa** - Misture farinha com fermento seco. Adicione água gradualmente até formar massa homogênea.

🔹 **Desenvolvimento** - Adicione sal e amasse por 15 minutos até massa lisa. Incorpore azeite aos poucos.

🔹 **Fermentação Lenta** - Deixe fermentar por 3-4 horas, fazendo dobras a cada 45 minutos.

🔹 **Modelagem** - Divida em 4 porções e modele em discos finos (30cm).

🔹 **Montagem** - Espalhe molho de tomate e distribua os quatro queijos uniformemente.

🔹 **Cocção** - Asse a 270°C por 8-12 minutos até queijos derreterem e borda dourar.`,
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return mockRecipes.find((recipe) => recipe.id === id);
}

export function getAllRecipes(): Recipe[] {
  return mockRecipes;
}
