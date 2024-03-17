import Home from "./Home";
import Layout from "./Layout";
import Section from "./Section";
import About from './About';
import Pricing from "./Pricing";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="dorty" element={<Section origin="dorty" />} />
                        <Route path="zakusky" element={<Section origin="zakusky" />} />
                        <Route path="fr_zakusky" element={<Section origin="fr_zakusky" />} />
                        <Route path="chlebicky" element={<Section origin="chlebicky" />} />
                        <Route path="cukrovi" element={<Section origin="cukrovi" />} />
                        <Route path="kolace" element={<Section origin="kolace" />} />
                        <Route path="about" element={<About />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;