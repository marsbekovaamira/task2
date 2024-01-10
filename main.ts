// task 1
let num: number = 12345;
let str: string = "qwerty";
let bln: boolean = true;
// task 2
type infoReturn = {
  radius: number;
  area: number;
};

type functionArea = (radius: number) => infoReturn;

const calculeitArea: functionArea = (radius) => {
  let area = Math.PI * Math.pow(radius, 2);
  return { radius, area };
};
console.log(calculeitArea(11234));
// task 3
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    title: "кофе",
    description: "горькое",
    price: 298,
    colors: ["Коричневый"],
  },
  {
    id: 2,
    title: "сахар",
    description: "сладкое",
    price: 1234,
    colors: ["белое"],
  },
];
console.log(products);
