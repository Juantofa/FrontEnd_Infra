import { useState, useEffect } from "react"
import DataService from '../services/DataService';

export const LibroComponent = () => {

    return (
        <div>
            <h1>Nube Híbrida</h1>
            <h4>Ensayo de Antonio Carlos Royo:</h4>
            <h5>¿Qué es?
                <br></br><br></br>
                La nube híbrida es una arquitectura de TI que incorpora cierto grado de gestión, organización y portabilidad de las cargas de trabajo en dos o más entornos. Según a quién le consulte, es posible que esos entornos deban incluir lo siguiente:
                Al menos una nube privada y una pública
                Dos o más nubes privadas
                Dos o más nubes públicas
                Un entorno virtual o sin sistema operativo conectado a al menos una nube, ya sea pública o privada
                <br></br><br></br>
                ¿Cómo se usa?<br></br><br></br>
                La forma en que las nubes públicas y privadas funcionan como parte de una nube híbrida es similar a cómo lo hacen de forma independiente:
                <br></br><br></br>
                Una red de área local (LAN), una red de área amplia (WAN), una red privada virtual (VPN) y las interfaces de programación de aplicaciones (API) conectan varias computadoras entre sí.
                La virtualización, los contenedores o el almacenamiento definido por software extraen los recursos, que pueden agruparse en lagos de datos.
                El sistema de software de gestión asigna esos recursos a entornos donde las aplicaciones pueden ejecutarse, los cuales luego se implementan, según se solicite, con la ayuda de un servicio de autenticación.
                <br></br><br></br>
                Las nubes independientes se vuelven híbridas cuando esos entornos se conectan de la forma más sencilla posible. Esa interconectividad es lo único que permite que las nubes híbridas funcionen, y es por eso que estas nubes son la base del edge computing. Además, determina la forma en que se trasladan las cargas de trabajo, se unifica la gestión y se organizan los procesos. La calidad de las conexiones tiene un efecto directo sobre el funcionamiento de su nube híbrida.
                <br></br><br></br>
                ¿Para qué sirve?<br></br><br></br>
                Las nubes hibridas funcionan principalmente para:<br></br><br></br>
                Conectar varias computadoras a través de una red<br></br><br></br>
                Consolidar los recursos de TI<br></br><br></br>
                Escalar horizontalmente e implementar los recursos nuevos con rapidez<br></br><br></br>
                Poder trasladar las cargas de trabajo entre los entornos<br></br><br></br>
                Incorporar una sola herramienta de gestión unificada<br></br><br></br>
                Organizar los procesos con la ayuda de la automatización<br></br><br></br>
                <br></br><br></br>
                Ventajas y desventajas<br></br><br></br>
                Ventajas<br></br><br></br>
                Amplía o reduce la capacidad sin tener que rediseñar las aplicaciones<br></br><br></br>
                Mejore la estabilidad y la seguridad<br></br><br></br>
                Este tipo de arquitecturas son tan seguros como una infraestructura de TI local.<br></br><br></br>

                Desafíos<br></br><br></br>
                En temas de implementación la infraestructura es muy complicado de implementar, así como de mantener, por lo que preparar esto requiere de un nivel de precisión alto.
                Debido a que se están implementando nuevos diseños la infraestructura, esto también crea nuevas brechas en el sistema que se tienen que empezar a tomar en consideración antes de implementar un servicio de estos.
                <br></br><br></br>
                ¿Quiénes lo están usando?<br></br><br></br>
                ¿Cómo se puede reducir los retrasos en los vuelos en solo 100 días? Lufthansa Technik, el mayor proveedor de mantenimiento del sector de las aerolíneas comerciales, lo logró con la nube híbrida. Gracias a la ayuda de Red Hat, Lufthansa Technik diseñó AVIATAR, una plataforma digital que permite que las aerolíneas tomen decisiones de mantenimiento y programación en función de los datos. Hablando mas de Red Hat, esta es una de las compañías que más le están viendo el valor a el tema de la nube hibrida en donde tienen diseñado una estrategia para construir esta infraestructura y son la empresa líder en el mercado en proveer plataformas basadas en la nube hibrida enfocada en el uso del código abierto, habilitando cargas de trabajo como la inteligencia artificial, herramientas de automatización como lo es Ansible, una plataforma para el desarrollo y modernización de aplicaciones como lo es Openshift y que cada vez más compañías grandes de tecnología están implementando esta plataforma, viéndose el servicio de Amazon Red Hat Openshift y Azure Red Hat Openshift Lo que demuestra que cada vez se está despertando más interés en implementar este tipo de estrategias en todas las compañías grandes de tecnología como una solución eficaz y eficiente para cualquier empresa en el sector de desarrollo y uso de aplicaciones e interesados en como optimizar su arquitectura de microservicios.
                <br></br><br></br>
                Conclusiones:<br></br><br></br>
                Se puede concluir que todas las organizaciones podrán sacar provecho a futuro si empiezan a implementar este tipo de infraestructuras desde ahora debido a la gran velocidad, flexibilidad, escalabilidad y estabilidad que esta ofrece, también que ayuda a las empresas de tecnología a aumentar sus ganancias, tener una gran ventaja competitiva frente a los demás y desarrollar cada vez más rápido aplicaciones en donde se podrá tener integración continua y desarrollo continuo, se podrán acelerar aplicaciones tradicionales implementando estas nuevas herramientas y muy importante que lo que busca la nube hibrida es sacar lo mejor de ambos lados: la gran cantidad de servicios que ofrece la nube publica y la seguridad que ofrece la nube privada. Una infraestructura híbrida es la mejor elección para las empresas que van a tener aplicaciones corriendo en data centers, la nube publica o también que tengan una solución que incluya múltiples nubes.</h5>
        </div >
    )
}
export default LibroComponent