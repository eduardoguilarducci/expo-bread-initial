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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Sova com recheio pastoso** - Acrescentar os grãos hidradados (Gergelim, Linhaça Marrom e Linhaça Dourada) e misturar a massa novamente, até incorporar. - Descansar 15 minutos.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas, o funcho e as raspas de limão Siciliano com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas e o cacau com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação, acrescentar as gotas de chocolate e o sal a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
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
    id: "bread-gorgo",
    name: "Pão Gorgonzola e Manjericão",
    recipeType: "bread",
    description:
      "Pão rústico de fermentação natural, com miolo macio e casca crocante, que combina a intensidade marcante do gorgonzola com o frescor aromático do manjericão. Uma receita equilibrada, sofisticada e saborosa, ideal para acompanhar queijos, vinhos ou simplesmente ser apreciada puro.",
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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão acrescentando o recheio no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
  },
  {
    id: "bread-azzapa",
    name: "Pão Azeitona Azzapa",
    recipeType: "bread",
    description:
      "Pão rústico de fermentação natural, de casca dourada e crocante, com miolo úmido e macio. Recheado com azeitonas Azzapa, traz um sabor marcante e levemente adocicado, que equilibra intensidade e suavidade em cada fatia. Perfeito para acompanhar queijos, embutidos ou ser degustado sozinho.",
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
    instructions: `🔹 **Preparação do Levain** - Alimentar o Levain na proporção 1-2-2 (Isca-Água-Farinha) e deixar crescer por aproximadamente 6hs ou até estar no ponto ideal.

🔹 **Autólise** - Quando o Levain estiver próximo do pico (2hs antes aproximadamente), misture as farinhas com a água gelada e deixe descansar por 2h horas. Este processo desenvolve o glúten naturalmente.

🔹 **Incorporação** - Misturar bem o levain à massa (sovar bem pouco). Deixe descansar por 15 minutos.

🔹 **Laminação / Primeira Dobra** - Fazer a laminação e salgar a massa. Esta já é considerada a primeira dobra. Deixe a massa descansar por 1 hora.

🔹 **Segunda Dobra** - Faça a segunda dobra suavemente. Deixe descansar por 1 hora.

🔹 **Pré-modelagem** - Retirar do Bowl e bolear a massa sem apertar muito. Deixe descansando na bancada entre 5 a 10 minutos (dependendo da temperatura ambiente).

🔹 **Modelagem Final** - Modelar o pão acrescentando o recheio no formato desejado, e acomode em cesto / banneton.

🔹 **Cresimento da Massa** - Deixe a massa crescer entre 2 a 3 horas ou até atingir o tamanho desejado (dependendo da temperatura ambiente).

🔹 **Maturação na Geladeira** -Leve a massa para maturação na geladeira, entre 5 e 7°C. Mínimo de 6 horas e Máximo de 18 horas. 

🔹 **Preparação do forno** - Pré aqueça o forno a 235°C com uma bandeja vazia abaixo da grade onde será colocado o pão - 30 minutos.

🔹 **Vapor** - Ferva água separadamente que será usada para fazer o vapor no momento da cocção.

🔹 **Forneamento com Vapor** - Coloque o Pão no forno, acrescente a água fervente na badeja (para o vapor) nesse momento, feche e abaixe a temperatura do forno para 190°C – Asse por 15min.

🔹 **Forneamento sem Vapor** - Retire a bandeja do forno, gire o Pão, aumente a temperatura para 235°C novamente – Asse por 15min.

🔹 **Retirada e finalização da cocção** - Verifique se está na cor desejada, retire do forno e deixe resfirando em um local com arejamento inferior por aproximadamente 1 hora. `,
  },
  {
    id: "r-1",
    name: "Pizza Napolitana",
    recipeType: "pizza",
    description:
      "A clássica pizza italiana com molho de tomate, mussarela fresca e manjericão. Simples, elegante e cheia de sabor.",
    image: require("../../assets/images/neopolitan_pizza.jpg"),
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
    image: require("../../assets/images/new_york_pizza.png"),
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
    name: "Tortano",
    recipeType: "special",
    description:
      "O Pão Tortano é um pão italiano em formato de anel, típico de Nápoles. É recheado com embutidos, queijos e ervas, combinando massa macia com casca crocante. Tradicionalmente servido em festas, especialmente na Páscoa.",
    image: require("../../assets/images/tortano.jpg"),
    totalDoughWeight: 1,
    breadWeight: 600,
    defaultQuantity: 1,
    time: "14h a 16h horas",
    difficultyLevel: "Difícil",
    cuisine: "Italiana",
    location: "Nápoles, Itália",
    ingredients: [
      {
        name: "Farinha Branca",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },

      {
        name: "Água Gelada",
        percentage: 60,
        unit: MeasurementUnit.MILLILITERS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Levain",
        percentage: 25,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Recheio",
        percentage: 83.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Semente de Funcho",
        percentage: 2,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Pimenta Calabresa",
        percentage: 1,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
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
    id: "special-2",
    name: "Fatia Húngara",
    recipeType: "special",
    description:
      "Doce, macia e irresistível, a Fatia Húngara é um pãozinho enrolado recheado com coco e coberto por uma calda cremosa de leite condensado. Apesar do nome, sua origem é brasileira e não húngara — o nome foi apenas uma inspiração estrangeira para valorizar a receita. Muito popular em padarias e confeitarias, essa delícia combina textura fofinha com sabor marcante, ideal para acompanhar o café da tarde.",
    image: require("../../assets/images/fatia_hungara.jpg"),
    totalDoughWeight: 1,
    breadWeight: 120,
    defaultQuantity: 1,
    time: "14h a 16h horas",
    difficultyLevel: "Difícil",
    cuisine: "Brasileira",
    location: "São Paulo, Brasil",
    ingredients: [
      {
        name: "Farinha Branca",
        percentage: 100,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.FLOUR,
      },
      {
        name: "Leite Integral",
        percentage: 24,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Leite Condensado",
        percentage: 4,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Leite em pó",
        percentage: 40,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.LIQUID,
      },
      {
        name: "Sal",
        percentage: 1.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.SALT,
      },
      {
        name: "Levain",
        percentage: 50,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Fermento Biológico Seco",
        percentage: 0.8,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Ovo (un)",
        percentage: 0.3,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Manteiga (sem sal)",
        percentage: 12,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Baunilha",
        percentage: 1.5,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Manteita",
        percentage: 20,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Açúcar Refinado",
        percentage: 10,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Coco Ralado",
        percentage: 11,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Leite Condensado",
        percentage: 23,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Água",
        percentage: 22,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Açucar Confeiteiro",
        percentage: 28,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
      {
        name: "Creme de Leite",
        percentage: 10,
        unit: MeasurementUnit.GRAMS,
        category: IngredientCategory.OTHER,
      },
    ],
    instructions: `🔹 Em breve disponível`,
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return mockRecipes.find((recipe) => recipe.id === id);
}

export function getAllRecipes(): Recipe[] {
  return mockRecipes;
}
