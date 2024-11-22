import "./App.css";

let language = "React";
let moon = "🌙";

function Header() {
  return(
    <h1>Eve's Kitchen</h1>
  );
}

function App() {
  return (
    <div>
    <Header/>
    <main>
      We serve the delicious food around
    </main>
    </div>
    
  );
}

export default App;
