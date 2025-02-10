import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface HeroProps {
    id: string;
}

const Hero: FC<HeroProps> = ({ id }) => {
    return (
        <section
            id={id}
            className="relative h-screen flex flex-col items-center justify-center text-center"
        >
            {/* Camadas de fundo */}
            <div className="absolute inset-0 bg-[url('/assets/texture-madeira.jpg')] opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/30" />

            {/* Logo (somente desktop) */}
            <div className="hidden md:block absolute top-8 left-8 z-20 w-80">
                <Image
                    src="/assets/LOGO_full.svg"
                    alt="Igreja Paz e Alegria"
                    width={320}
                    height={100}
                    className="object-contain"
                />
            </div>

            {/* Conteúdo Principal (desktop original) */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo do Coração */}
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-60 h-60 mb-8 relative max-md:w-40 max-md:h-40"
                >
                    <Image
                        src="/assets/logo_heart.svg"
                        alt="Coração"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Texto "Paz e Alegria" */}
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="w-full max-w-3xl mb-8 relative h-48 px-0 max-md:h-32 max-md:w-80"
                >
                    <Image
                        src="/assets/PAZ_E_ALEGRIA.svg"
                        alt="Paz e Alegria"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Textos Descrição */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-xl text-gray-300 font-logo leading-relaxed"
                >
                    {/* Versão Desktop (original) */}
                    <motion.h2
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="text-6xl font-logo tracking-wide text-[#cb0133] text-center pb-4 max-md:text-3xl"
                    >
                        ANSIEDADE E DEPRESSÃO TEM CURA!
                    </motion.h2>

                    {/* Versão Desktop (texto original) */}
                    <motion.p className="hidden md:block text-3xl font-logo font-medium text-center leading-relaxed">
                        Dezenas de pessoas já foram curadas e Jesus quer te
                        curar também.
                        <br />
                        Venha fazer o tratamento{" "}
                        <span className="text-[#3299dc] font-bold">
                            COMPLETAMENTE GRATUITA
                        </span>
                    </motion.p>

                    {/* Versão Mobile (ajustes específicos) */}
                    <motion.p className="md:hidden text-lg font-logo text-center space-y-4 px-4">
                        <span className="block">
                            Dezenas de pessoas já foram curadas
                        </span>
                        <span className="block">
                            e Jesus quer te curar também.
                        </span>
                        <span className="block mt-6 text-2xl font-bold">
                            Venha fazer o tratamento
                            <span className="block mt-2 text-[#3299dc] underline">
                                COMPLETAMENTE GRATUITO
                            </span>
                        </span>
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
