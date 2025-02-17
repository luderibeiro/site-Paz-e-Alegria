import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sobre from "../components/About";
import Cultos from "../components/Cultos";
// import Testemunhos from "../components/Testemunhos";
// import Contato from "../components/Contato";

export default function Home() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Seções da página */}
            <Hero id="home" />
            <Sobre id="sobre" />
            <Cultos id="cultos" />
            {/* <Testemunhos id="testemunhos" /> */}
            {/* <Contato id="contato" /> */}
        </div>
    );
}
