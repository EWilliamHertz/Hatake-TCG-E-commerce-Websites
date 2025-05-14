export interface Product {
  id: string;
  name: string;
  price: number;
  buyInPrice: number;
  stock: number;
  releaseDate: string;
  images: string[];
  description: string;
  isPreorder: boolean;
  category: string;
}
export const products: Product[] = [{
  id: "duffel-bag",
  name: "Duffel Bag",
  price: 30.00,
  buyInPrice: 17.00,
  stock: 22,
  releaseDate: "2025-07-15T00:00:00.000Z",
  images: ["https://drive.google.com/uc?id=IMG_2740", "https://drive.google.com/uc?id=IMG_2801", "https://drive.google.com/uc?id=IMG_2802"],
  description: "47*28*55cm tournament-ready bag",
  isPreorder: true,
  category: "Bag"
}, {
  id: "top-loaders-35pt",
  name: "25x 35pt Top-Loaders",
  price: 3.00,
  buyInPrice: 2.00,
  stock: 80,
  releaseDate: "2025-10-15T00:00:00.000Z",
  images: Array.from({
    length: 8
  }, (_, i) => `https://drive.google.com/uc?id=IMG_997${i + 1}`),
  description: "Pack of 25 for standard cards",
  isPreorder: true,
  category: "Top-Loaders"
}, {
  id: "top-loaders-130pt",
  name: "10x 130pt Top-Loaders",
  price: 3.50,
  buyInPrice: 1.60,
  stock: 200,
  releaseDate: "2025-10-15T00:00:00.000Z",
  images: Array.from({
    length: 9
  }, (_, i) => `https://drive.google.com/uc?id=IMG_997${i + 9}`),
  description: "Pack of 10 for Multiple cards",
  isPreorder: true,
  category: "Top-Loaders"
}, {
  id: "matte-sleeves",
  name: "Matte Sleeves",
  price: 8.90,
  buyInPrice: 4.80,
  stock: 500,
  releaseDate: "2025-10-15T00:00:00.000Z",
  images: Array.from({
    length: 6
  }, (_, i) => `https://drive.google.com/uc?id=IMG_996${i}`),
  description: "100 premium black sleeves (66x91mm)",
  isPreorder: true,
  category: "Sleeves"
}, {
  id: "pu-deckbox",
  name: "PU DeckBox",
  price: 30.00,
  buyInPrice: 13.00,
  stock: 100,
  releaseDate: "2025-10-15T00:00:00.000Z",
  images: Array.from({
    length: 28
  }, (_, i) => `https://drive.google.com/uc?id=IMG_992${i + 4}`),
  description: "160+ card capacity with magnetic closure",
  isPreorder: true,
  category: "Deckbox"
}, {
  id: "binder-480",
  name: "480-Slot Binder",
  price: 36.00,
  buyInPrice: 22.00,
  stock: 50,
  releaseDate: "2025-10-15T00:00:00.000Z",
  images: Array.from({
    length: 13
  }, (_, i) => `https://drive.google.com/uc?id=IMG_981${i + 4}`),
  description: "Premium zippered binder with side-loading pockets",
  isPreorder: true,
  category: "Binder"
}];
export interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  type: "convention" | "expo";
  region: string;
  link: string;
  image: string;
}
export const events: Event[] = [{
  id: "need-to-be-geek",
  name: "Need to be Geek Convention – Skara",
  date: "2025-09-27T00:00:00.000Z",
  location: "Multihallen, Skara",
  description: "This geek culture event features everything from Pokémon and Star Wars to Warhammer and DnD. Stop by to see our premium TCG accessories, meet our team, and connect with fellow enthusiasts. Free entry!",
  type: "convention",
  region: "vastra-gotalands-lan",
  link: "https://needtobegeek.se",
  image: "https://placehold.co/300x200?text=Need+to+be+Geek+Convention"
}, {
  id: "swecard-expo",
  name: "SweCard Expo – Svedala",
  date: "2025-10-11T00:00:00.000Z",
  location: "Svedala (20 minutes from Malmö)",
  description: "We'll be showcasing our full range of TCG accessories alongside international exhibitors like LetsCollect Cards from Denmark. A great opportunity to explore our products and connect with the TCG community!",
  type: "expo",
  region: "skane",
  link: "https://sweCard.org",
  image: "https://placehold.co/300x200?text=SweCard+Expo"
}];