import Home from "./Home";
import Menu from "./Menu";
import Footer from "./Footer";
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
                        <Route path="footer" element={<Footer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;