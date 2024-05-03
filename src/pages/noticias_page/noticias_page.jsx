import Menu from "../../components/menu/menu";
import Busca from "../../components/busca/busca";
import Noticias from "../../components/noticias/noticias";

function Noticias_Page() {    
  return <>
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            <Menu page="noticias" />
            </div>

            <div className="col py-3 me-3">
                <div className="mb-5">
                    <Busca texto="Busca por Negócios" />
                </div>
                <div className="row">
                  <Noticias/>
                </div>
            </div>
        </div>
    </div>
</>
}

export default Noticias_Page;