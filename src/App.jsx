import { Button } from "./components/Button/Button";

function App() {
  const onClickHandler = () => {
    console.log("Hello World!");
  };

  return (
    <div className="App">
      <Button onClick={onClickHandler}>Hello</Button>
      <Button>World</Button>
      <Button>qweryljnkljvscn</Button>
      Hello World!
    </div>
  );
}

export default App;
