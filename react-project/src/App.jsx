import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright @{year}</p>
    </header>
  );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Vegetables",
  "Cheese"
];

const dishObjects = items.map((dish,i)=>({
  id:i,
  title: dish
}))
console.log(dishObjects);

function Main({dishes}){
  return(
   <ul>
       {dishes.map((dish) => (
         <li key = {dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
       ))}
     </ul>
  )
}

//The below code is not proper way to display since while displaying we are using key and value , its better to create a stable object before displaying
// function Main({ dishes }) {
//   return (
//     <ul>
//       {dishes.map((dish,i) => (
//         <li key = {i} style={{ listStyleType: "none" }}>{dish}</li>
//       ))}
//     </ul>
//   );
// }

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App;
