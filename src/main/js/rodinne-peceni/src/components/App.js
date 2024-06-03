import React, { useEffect } from 'react';
import Home from "./Home";
import Layout from "./Layout";
import Section from "./Section";
import About from './About';
import Pricing from "./Pricing";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {

    useEffect(() => {
        fetch("/navstevnost/increment")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
            //    console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="dorty" element={<Section origin="dorty" />} />
                        <Route path="zakusky" element={<Section origin="zakusky" />} />
                        <Route path="fr_zakusky" element={<Section origin="fr_zakusky" />} />
                        <Route path="chlebicky" element={<Section origin="chlebicky" />} />
                        <Route path="cukrovi" element={<Section origin="cukrovi" />} />
                        <Route path="kolace" element={<Section origin="kolace" />} />
                        <Route path="onas" element={<About />} />
                        <Route path="cenik" element={<Pricing />} />
                        <Route path="kontakt" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;