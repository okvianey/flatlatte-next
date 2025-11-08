import ButtonBox from "@/components/ui/ButtonBox";
import ButtonLine from "@/components/ui/ButtonLine";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonAccent from "@/components/ui/ButtonAccent";
import CopyButton from "@/components/ui/CopyButton";
import ButtonIconR from "@/components/ui/ButtonIconR";
import ButtonIconL from "@/components/ui/ButtonIconL";
import FooterCTAMinimal from "@/components/sections/FooterCTAMinimal"
import WeLoveMinimal from "@/components/ui/WeLoveMinimal";
import WeLove from "@/components/ui/Welove";
import WeLoveCards from "@/components/ui/WeLoveCards";
import Link from "next/link";

export default function Estilo() {
  return (
    <div className="section">

      <div className="container">
        <h1>HOLA</h1>
        <p>ButtonPrimary</p>
        <ButtonPrimary url="#">
          Botón primario
        </ButtonPrimary>

        <div className="my-10 border-b border-gray-200"></div>
        <p>ButtonAccent</p>
        <ButtonAccent url={"#"}>Botón accent</ButtonAccent>
        
        <div className="my-10 border-b border-gray-200"></div>
        <p>ButtonBox</p>
        <ButtonBox url="#">Botón box</ButtonBox>
        <div className="my-10 border-b border-gray-200"></div>
        <p>CopyButton</p>
        <CopyButton>Copy botón</CopyButton>
        <div className="my-10 border-b border-gray-200"></div>
        <p>ButtonLine</p>
        <ButtonLine url={""}>Botón line</ButtonLine>
        
        <div className="my-10 border-b border-gray-200"></div>

        <p>ButtonIconR</p>
        <ButtonIconR url={"/"} icon={'bi bi-arrow-right'}>
          Botón icono a la derecha
        </ButtonIconR>

        <div className="my-10 border-b border-gray-200"></div>

        <p>ButtonIconL</p>
        <ButtonIconL url={"/"} icon={'bi bi-arrow-left'}>
          Botón icono a la izquierda
        </ButtonIconL>

        <div className="my-10 border-b border-gray-200"></div>

        <div data-aos="fade-up">Se desliza hacia arriba</div>
        <div data-aos="fade-down">Se desliza hacia abajo</div>
        <div data-aos="fade-left">Se desliza desde la izquierda</div>
        <div data-aos="fade-right">Se desliza desde la derecha</div>
        <div data-aos="zoom-in">Zoom in</div>
        <div data-aos="zoom-out">Zoom out</div>
        <div data-aos="flip-up">Voltea hacia arriba</div>
        <div data-aos="flip-down">Voltea hacia abajo</div>

        {/* <!-- Con delays --> */}
        <div data-aos="fade-up" data-aos-delay="100">Delay de 100ms</div>
        <div data-aos="fade-up" data-aos-delay="200">Delay de 200ms</div>
        <div data-aos="fade-up" data-aos-delay="300">Delay de 300ms</div>

        {/* <!-- Con duración personalizada --> */}
        <div data-aos="fade-up" data-aos-duration="1000">Duración de 1 segundo</div>

        <WeLove />

        <WeLoveCards />

        <WeLoveMinimal />

        <FooterCTAMinimal />

      </div>
    </div>
  )
}