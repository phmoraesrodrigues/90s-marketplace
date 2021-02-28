import picFerrari from "../assets/images/ferrari.jpg";
import picMercedes from "../assets/images/mercedes.jpg";
import picMclaren from "../assets/images/mclaren.jpg";
import picPorsche from "../assets/images/porsche.jpg";

const products = [
  {
    id: 1,
    uid: "ferrari",
    name: "Ferrari LaFerrari 3D model",
    description:
      "All the doors are animated, so if you want to open them just drag the time slider to frame 200 to have every fully door opened. If you find issues with the car model please let me know. Also don't forget to rate this product.",
    price: 104.3,
    picture: picFerrari,
  },
  {
    id: 2,
    uid: "mercedes",
    name: "Mercedes AMG GT 3D model",
    description:
      "The 3D model was created on real car base. It’s created accurately, in real units of measurement, qualitatively and maximally close to the original.",
    price: 52.5,
    picture: picMercedes,
  },
  {
    id: 3,
    uid: "mclaren",
    name: "McLaren Artura 2022 3D model",
    description:
      "The latest and newesr McLaren Artura 2022 sports car med-poly with ( no interior ) included, very good for many purposes including 3d printing, contact us if you have any problem. Model formats are available above.",
    price: 6.99,
    picture: picMclaren,
  },
  {
    id: 4,
    uid: "porsche",
    name: "Porsche 911 Turbo S 3D model",
    description:
      "High detailed model created by SQUIR team. Ready to render at 3dsmax with VRAY 3 and also Corona 2. Two rendering studios are included for VRAY3 and Corona2, with all lightning, materials, background setups",
    price: 118.3,
    picture: picPorsche,
  },
];

export default products;
