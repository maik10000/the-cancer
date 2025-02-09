import { useState } from "react"
import './Consulta.css'
export default function Consulta() {

    const [img, setImg] = useState(null);
    const [srcImg, setScr] = useState("https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg");
    const [data, setData] = useState({TypeOfCancer:"---",confidence:"---%"})
    const [load, setLoad] = useState(false)
    const handleFileChange = (e) => {

        setData({TypeOfCancer:"---",confidence:"---%"})
        console.log(e.target.files[0])
        preview(e.target.files[0])
        setImg(e.target.files[0]);
    };

    const preview = (file) => {

        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
              // Crear un lector de archivos
            reader.onload = function(e) {

                setScr(e.target.result)
            };

            reader.readAsDataURL(file);  // Leer el archivo como una URL de datos
        }
    }
    const enviar = async (e) => {

        e.preventDefault();
        const formData = new FormData();
        formData.append("file1", img);

        setLoad(true)
       await request(formData)
       setLoad(false)
    }

    const request = async (formData) => {
        try {
            const response = await fetch("https://nvsr904s-8000.use2.devtunnels.ms/model/", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            setData(result)
            console.log("Imagen subida:", result);
        } catch (error) {
            console.error("Error al subir la imagen:", error);
        }
        
    }

    return (
        <div className="consulta">
            <div className="c">
                <div className="form">
                    
                </div>
                <div className="form">
                   <h2>Resultados del analisis</h2>
                </div>
            </div>
            <div className="contain">
                <div className="formulario">
                   

                </div>
                <div className="respuesta">
                    <div className="sec-r">
                      <p>Resonancia</p>
                      <div className="img-rat">
                            <img src={srcImg} alt="default" />  
                      </div>
                    </div>
                    <div className="sec-r">
                    <p>Tipo de Cancer</p>
                    <div className="child-sec">
                        {
                            load ? <div className="spinner"></div>:<p className="detal">{data?.TypeOfCancer}</p>
                        }
                    </div >
                    </div>
                    <div className="sec-r">
                    <p>Confidence</p>
                    <div className="child-sec">
                        {
                            load ? <div className="spinner"></div>:<p className="detal">{data?.confidence}</p>
                        }
                    </div>
                    </div>
                </div>
              
            </div>
            <div className="c space">
                <div className="form">
                </div>
                <div className="form">
                <h5>Sube una Resonancia magnetica para diagnosticar a tu paciente</h5>
                    <form className="formulario-api" onSubmit={enviar} action="" method="post" >
                            <div className="sec-form">
                                <label className="btn-label" htmlFor="file1">Seleccione una imagen</label>
                                <label className="box-label" htmlFor="file1">{img?.name}</label>
                                <input
                                    required
                                    type="file"
                                    name="file1"
                                    id="file1"
                                    onChange={handleFileChange}
                                    className="file-input"
                                    accept="image/*"
                                />
                                
                            </div>
                            <div className="sec-form">
                                <button type="submit">Analizar</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}