import { Restaurant } from "../types/restaurant";

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    image: require("@/assets/images/tortano_big.jpg"),
    name: "Pão Tortano",
    location: "Sabor de Nápoles",
    difficultyLevel: 5,
    time: "25 min",
    showAtHomeScreen: true,
  },
  {
    id: "2",
    image: require("@/assets/images/pao-italiano.jpg"),
    name: "Pão Italiano",
    location: "Londres, Inglaterra",
    difficultyLevel: 4.2,
    time: "25 min",
    showAtHomeScreen: true,
  },
  {
    id: "3",
    image: require("@/assets/images/pao-taralo.jpeg"),
    name: "Pão Taralo",
    location: "Colorado, San Francisco",
    difficultyLevel: 2,
    time: "25 min",
    showAtHomeScreen: true,
    cuisine: "$$ • Chinese • American • Deshi food",
    ratings: "200+ Ratings",
  },
  {
    id: "4",
    image: require("@/assets/images/pao-cacau.jpeg"),
    name: "Pão Cacau",
    location: "Bruxelas, Bélgica",
    difficultyLevel: 1,
    time: "25 min",
    showAtHomeScreen: true,
    cuisine: "$$ • Chinese • American • Deshi food",
    ratings: "200+ Ratings",
  },
  {
    id: "5",
    image: require("@/assets/images/big_2.png"),
    name: "McDonald's 5",
    location: "Colorado, San Francisco",
    difficultyLevel: 3,
    time: "25 min",
    showAtHomeScreen: false,
    cuisine: "$$ • Chinese • American • Deshi food",
    ratings: "200+ Ratings",
  },
  {
    id: "6",
    image: require("@/assets/images/big_2.png"),
    name: "McDonald's 6",
    location: "Colorado, San Francisco",
    difficultyLevel: 4.3,
    time: "25 min",
    showAtHomeScreen: false,
    cuisine: "$$ • Chinese • American • Deshi food",
    ratings: "200+ Ratings",
  },
  {
    id: "7",
    image: require("@/assets/images/pao-campanha.jpeg"),
    name: "Pão Campanha",
    location: "Colorado, San Francisco",
    difficultyLevel: 4.3,
    time: "25 min",
    showAtHomeScreen: true,
    cuisine: "$$ • Chinese • American • Deshi food",
    ratings: "200+ Ratings",
  },
];

export const getFeaturedRestaurants = (): Restaurant[] => {
  return mockRestaurants.filter((r) => r.showAtHomeScreen);
};

export const getAllRestaurants = (): Restaurant[] => {
  return mockRestaurants.slice(2);
};
