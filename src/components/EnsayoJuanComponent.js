import { useState, useEffect } from "react"
import DataService from '../services/DataService';

export const LibroComponent = () => {

    return (
        <div>
            <h1>Edge Computing</h1>
            <h4>Ensayo de Juan Manuel Torres:</h4>
            <h5> 
                <br></br><br></br>
                ¿Qué es?<br></br><br></br>
                Edge computing se puede definir como servicios informáticos que son ejecutados lo más cercanamente posible al usuario final. Esta tecnología provee sistemas descentralizados con baja latencia y bajo consumo de banda ancha, lo que los hace una elección excelente para dispositivos IoT, y servicios para casi todas las industrias que requieran de automatización.
                ¿Cómo se usa?<br></br><br></br>
                En caso de que una empresa lo considere necesario y mejor que las alternativas basadas únicamente en la nube, se deberá proceder a la creación de un nuevo software que se encargue de procesar los datos entrantes, la conexión con otros nodos del “Edge” y la comunicación con un servidor central, el cual se encargará de los datos más importantes.
                <br></br><br></br>
                Una vez se cumplan estos requisitos, se puede proceder a desplegar estos sistemas en el “Edge”. Para distribuir estos sistemas se hace uso de tecnologías basadas en contenedores como Docker y Kubernetes que facilitan la distribución de aplicaciones.
                ¿Para qué sirve?<br></br><br></br>
                Su principal uso actualmente es obtener datos en tiempo real desde dispositivos IoT y realizar análisis en tiempo real sobre los datos recogidos por sensores. Debido a la proximidad que tienen estos servidores con los dispositivos IoT se presenta un ahorro considerable en recursos computacionales.
                <br></br><br></br>
                Adicionalmente, el Edge Computing es usado en la industria de los videojuegos, productos como el “geforce-now” de NVIDIA permite a sus clientes jugar títulos de videojuegos en computadores remotos que están alojados en Edge computing lo que permite la retransmisión de imagen y audio casi instantánea a diferencia de los servicios de streaming convencionales que no proveen una latencia adecuada para este caso de uso.
                <br></br><br></br>
                Ventajas y desventajas<br></br>
                Ventajas<br></br>
                Baja latencia:  Estos servidores, al estar lo más cerca posible del usuario final producen una reducción de la latencia por lo que la comunicación se puede efectuar de una manera más inmediata.
                <br></br><br></br>
                Bajo uso de banda ancha: Este se aplica sobre todo en lugares con mala conectividad, pues los servicios desplegados en el Edge tienen la capacidad de procesar los datos en zonas con poca conectividad bajo la condición de que cuando haya disponibilidad de red, estos servicios enviaran los datos pertinentes a servicios en la nube.
                <br></br><br></br>
                Desafíos<br></br>
                Disponibilidad: En caso de que uno de los nodos del Edge Computing pare de funcionar, produciría que todos los usuarios de cierta zona se queden sin servicio. Una mala gestión de los sistemas distribuidos podría aumentar el tiempo en que el servicio está deshabilitado.
                <br></br><br></br>
                Datos: Las empresas que utilicen Edge Computing deben analizar muy bien qué datos deben ser remitidos a sus servidores principales, pues se estima que menos del 1% de estos datos son realmente usados para la toma de decisiones (Manyika et al., 2015), la tecnología de Edge Computing no se limita a ser un simple "proxy", entre dos servidores en la web sino que su propósito es el análisis y procesamiento de datos de manera automática.
                <br></br><br></br>
                Seguridad: El uso de Edge computing en la actualidad se basa en dispositivos IoT que son inherentemente inseguros por su incapacidad para realizar procesos de actualización automática, las empresas deben prestar mucha atención a los detalles de encripción y transmisión de datos.
                ¿Quiénes lo están usando?<br></br><br></br>
                Actualmente empresas como Azure e IBM están a la vanguardia para proveer soluciones basadas en Edge Computing, especialmente para dispositivos IoT, estos servicios cuentan con almacenamiento, análisis y transmisión de datos en tiempo real. Adicionalmente empresas como NVIDIA utilizan esta tecnología, tal como se mencionó anteriormente.


            </h5>
        </div >
    )
}
export default LibroComponent