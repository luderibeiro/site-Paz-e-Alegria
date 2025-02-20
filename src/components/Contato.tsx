import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

const Contato: FC<{ id: string }> = ({ id }) => {
    return (
        <section
            id={id}
            className="relative min-h-screen py-20 px-4 md:px-8 bg-black text-white"
        >
            {/* Container principal */}
            <div className="max-w-6xl mx-auto text-center">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-logo text-[#cb0133] mb-8"
                >
                    Entre em Contato Conosco!
                </motion.h2>

                {/* Descrição */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xl text-gray-300 mb-12"
                >
                    Estamos aqui para ajudar! Converse conosco pelo WhatsApp,
                    siga-nos no Instagram ou assista às nossas transmissões ao
                    vivo no Facebook.
                </motion.p>

                {/* Links de Contato */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/+5561981838717"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-8 bg-white/10 rounded-xl border border-[#25D366] hover:bg-[#25D366] transition-all duration-300"
                    >
                        <Image
                            src="/assets/whatsapp-icon.svg"
                            alt="WhatsApp"
                            width={80}
                            height={80}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-logo text-[#25D366] mb-4">
                            WhatsApp
                        </h3>
                        <p className="text-gray-300">
                            Fale Conosco Agora! Vamos marcar o seu tratamento!
                        </p>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/igrejapazealegria/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-8 bg-white/10 rounded-xl border border-[#E1306C] hover:bg-[#E1306C] transition-all duration-300"
                    >
                        <Image
                            src="/assets/instagram-icon.svg"
                            alt="Instagram"
                            width={80}
                            height={80}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-logo text-[#E1306C] mb-4">
                            Instagram
                        </h3>
                        <p className="text-gray-300">
                            Siga-nos e Veja Nossas Novidades!
                        </p>
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/AlegriaePaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-8 bg-white/10 rounded-xl border border-[#1877F2] hover:bg-[#1877F2] transition-all duration-300"
                    >
                        <Image
                            src="/assets/facebook-icon.svg"
                            alt="Facebook"
                            width={80}
                            height={80}
                            className="mx-auto mb-4"
                        />
                        <h3 className="text-2xl font-logo text-[#1877F2] mb-4">
                            Facebook
                        </h3>
                        <p className="text-gray-300">
                            Assista às Nossas Transmissões ao Vivo! Elas são
                            feitas pelo Facebook!
                        </p>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contato;
