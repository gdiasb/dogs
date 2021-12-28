import React from "react";

function App() {

    const [dados, setDados] = React.useState(null);
    async function fetchClick() {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/' + );

        const json = await response.json();
    
        setDados(json);
    }

    return (
        <div>
            <button>Tablet</button>
            <button>Smartphone</button>
            <button>Notebook</button>
        </div>
    )
};

export default App;