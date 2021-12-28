import React from "react";
import Description from './Description';
import Card from "./Card";

function App() {

  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(null);

  async function fetchData(event) {    
    setIsLoading(true);

    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/' + event.target.innerText );
    // + document.getElementsByTagName('button')[1].innerText
    const json = await response.json();

    setData(json);
    setIsLoading(false);
  }
  return (
    <>
  <Card>
    {isLoading && <p>Carregando..</p>}
    {!isLoading && data && <Description data={data} />}
  </Card>
    <button onClick={fetchData}>Smartphone</button>
    <button onClick={fetchData}>Tablet</button>
    <button onClick={fetchData}>Notebook</button>
  </>
  )
}

export default App;