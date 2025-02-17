import { motion } from "framer-motion";
import { FC } from "react";

const Cultos: FC<{ id: string }> = ({ id }) => {
    return (
        <section
            id={id}
            className="relative min-h-screen py-20 px-4 md:px-8 bg-black text-white"
        >
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-logo text-[#cb0133]">
                    Nossos Cultos
                </h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                    Participe dos nossos encontros e experimente a presença
                    transformadora de Deus.
                </p>
            </motion.div>
            {/* Programação Semanal */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-4xl mx-auto"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Culto de Louvor */}
                    <div className="p-6 bg-white/10 rounded-xl border border-[#08ad9c]/30">
                        <h3 className="text-xl font-logo text-[#08ad9c]">
                            Culto de Louvor e Adoração
                        </h3>
                        <p className="mt-2 text-gray-300">Domingos, 19h30</p>
                        <p className="mt-4 text-sm text-gray-400 text-justify">
                            Venha prestar culto a Deus com louvor e adoração,
                            expressando gratidão pelo que Ele fez e tem feito em
                            sua vida.
                        </p>
                    </div>

                    {/* Culto de Cura */}
                    <div className="p-6 bg-white/10 rounded-xl border border-[#3299dc]/30">
                        <h3 className="text-xl font-logo text-[#3299dc]">
                            Culto de Cura
                        </h3>
                        <p className="mt-2 text-gray-300">
                            Terças-feiras, 19h30
                        </p>
                        <p className="mt-4 text-sm text-gray-400 text-justify">
                            Às terças-feiras temos um breve culto para
                            podermosins expressar nosso louvor e nos encher da
                            graça e da palavra do nosso Senhor Jesus Cristo.
                            Após o culto, realizamos atendimento individualizado
                            para cura e tratamento definitivos de ansiedade,
                            depressão, traumas, vícios, enfermidades e problemas
                            emocionais.
                        </p>
                    </div>

                    {/* Culto de Estudo */}
                    {/* <div className="p-6 bg-white/10 rounded-xl border border-[#cb0133]/30">
                        <h3 className="text-xl font-logo text-[#cb0133]">
                            Culto de Estudo
                        </h3>
                        <p className="mt-2 text-gray-300">
                            Sextas-feiras, 19h30
                        </p>
                        <p className="mt-4 text-sm text-gray-400">
                            Aprofunde-se na Palavra de Deus.
                        </p>
                    </div> */}
                </div>
            </motion.div>
            {/* Galeria de Momentos
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20"
            >
                <h3 className="text-3xl font-logo text-[#f8b76c] text-center mb-8">
                    Momentos Especiais
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
            </motion.div> */}
        </section>
    );
};

export default Cultos;
