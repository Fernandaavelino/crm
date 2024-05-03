import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Noticias from "./pages/noticias_page/noticias_page";
import Previsao from "./pages/previsao_page/previsao_page";
import Negocio from "./pages/negocio_page/negocio_page";
import Atividades from "./pages/atividade/atividade";


function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/dashboard" element= {<Dashboard />} />
            <Route path="/" element={<Dashboard/>} />
            <Route path="/noticias" element={<Noticias/>} />
            <Route path="/previsao" element={<Previsao/>} />
            <Route path="/negocio" element={<Negocio/>} />
            <Route path="/atividade" element={<Atividades/>} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;