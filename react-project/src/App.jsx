import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}

// function Main(){
//   return (
//     <ul>
//       <li>1</li>
//       <li>2</li>
//     </ul>
//   )
// }


const items = [
  'Brinjal Curry',
  'Alu Gobi Curry',
  'Gongura Pappu'
]

function Main({dishes}){
  return (
  <ul>
    {
      dishes.map((dish) => (
        <li>{dish}</li>
      ))
    }
  </ul>
);
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <main>
        <h2>We serve the most delicious food around</h2>
      </main>
      <Main dishes={items}/>
    </div>
  );
}

export default App;
