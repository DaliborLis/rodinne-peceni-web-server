import Home from "./Home";
import Menu from "./Menu";
import Section from "./Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route index element={<Home />} />
                        <Route path="dorty" element={<Section title="Dorty" />} />
                        <Route path="zakusky" element={<Section title="Zákusky" />} />
                        <Route path="fr_zakusky" element={<Section title="Francouzské zákusky" />} />
                        <Route path="chlebicky" element={<Section title="Chlebíčky" />} />
                        <Route path="cukrovi" element={<Section title="Cukroví" />} />
                        <Route path="kolace" element={<Section title="Koláče" />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;