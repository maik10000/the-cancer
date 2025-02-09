import { Link } from "react-router-dom"
import "./Home.css"
import img from "./assets/img.jpeg"
import Footer from "./Footer"
export default function Home(){

    return(
        <div className="Home">
            <div className="black-screen">
                <div className="senccion-d">
                    <div className="sec" >
                        <p>
                            Diagnostica a tu paciente antes de tiempo y salva su vida.
                        </p>
                    </div>
                    <div className="sec">
                        <div className="con-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="sec" >
                        <p>
                            Al hacer uso de Deep Learning podras detectar 
                            que tipo de cancer presenta mediante una RM
                        </p>
                    </div>
                </div>
                <div className="senccion-d">
                    <Link rel="stylesheet" to="/consulta">Iniciar</Link>   
                </div>
               
            </div>
        </div>
    )

}