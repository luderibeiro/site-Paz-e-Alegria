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
                            Às terças-feiras temos um breve culto para podermos
                            expressar nosso louvor e nos encher da graça e da
                            palavra do nosso Senhor Jesus Cristo. Após o culto,
                            realizamos atendimento individualizado para cura e
                            tratamento definitivos de ansiedade, depressão,
                            traumas, vícios, enfermidades e problemas
                            emocionais.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Localização e Transmissões */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 max-w-6xl mx-auto"
            >
                <h3 className="text-3xl font-logo text-[#f8b76c] text-center mb-8">
                    Localização e Transmissões
                </h3>

                {/* Mapa */}
                <div className="mb-8">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LOCATION_ID!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_ZOOM_LEVEL!5e0!3m2!1sen!2sus!4vYOUR_TIMESTAMP!5m2!1sen!2sus"
                        width="50%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    ></iframe>
                </div>

                {/* Link para o Facebook */}
                <div className="text-center">
                    <a
                        href="https://www.facebook.com/AlegriaePaz" // Substitua pelo link da página do Facebook
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#1877F2] text-white px-8 py-4 rounded-lg font-logo text-lg hover:bg-[#1652a3] transition-all duration-300"
                    >
                        Assista às Nossas Transmissões ao Vivo no Facebook
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Cultos;
