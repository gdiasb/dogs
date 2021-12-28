import React from "react";

function Button({ produto }) {

  const [dados, setDados] = React.useState(null);

  async function fetchClick(){
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/' + produto);

    const json = await response.json();

    setDados(json);
  }

  return(
    <button onClick={fetchClick}>{produto}</button>
  )
}

export default Button;