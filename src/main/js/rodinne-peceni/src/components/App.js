import Home from "./Home";
import Menu from "./Menu";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route index element={<Home />} />
                        <Route path="footer" element={<Footer />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;