import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

import Header from "./comps/Header";
import Path from './comps/Path';

function App() {
    return (
        <div>
            <Header />
            <Path path="/">
                <Home />
            </Path>
            <Path path="/produtos">
                <Produtos />
            </Path>
        </div>
    )
};

export default App;