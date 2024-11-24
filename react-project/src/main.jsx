import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [, , thirdAnimal] = ['Giraffe','Lion','Tiger']
console.log(thirdAnimal);

// const [firstAnimal, secondAnimal, thirdAnimal] = ['Giraffe','Lion','Tiger']
// console.log(firstAnimal);
// console.log(thirdAnimal);

// const animals = ['giraffe','elephant','Lion']
// console.log(animals[0]);

createRoot(document.getElementById("root")).render(<App />);
