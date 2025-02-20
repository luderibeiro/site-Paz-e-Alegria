import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

const Testemunhos: FC<{ id: string }> = ({ id }) => {
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
                    Testemunhos de Transformação
                </motion.h2>

                {/* Descrição */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xl text-gray-300 mb-12"
                >
                    Veja como o poder e o amor de Cristo tem transformado vidas.
                    Venha ter a sua história trasnformada também!
                </motion.p>

                {/* Testemunho Destaque */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-white/10 rounded-xl p-8 mb-12 text-left"
                >
                    {/* Layout para desktop (imagem ao lado do texto) */}
                    <div className="md:flex md:items-start">
                        {/* Imagem com legenda */}
                        <div className="md:w-1/3 md:pr-8 mb-8 md:mb-0">
                            <Image
                                src="/assets/testemunho-geovana-foto.jpg"
                                alt="Foto do testemunho, Geovana Coimbra"
                                width={400}
                                height={400}
                                className="rounded-lg"
                            />
                            <p className="text-gray-400 text-sm mt-2 text-center">
                                Na foto, da esquerda para a direita: Pastora
                                Joana, Geovana Coimbra e Pastor Aldo.
                            </p>
                        </div>

                        {/* Texto e informações */}
                        <div className="md:w-2/3">
                            {/* Link para o Instagram */}
                            <a
                                href="https://www.instagram.com/p/CByQdNogP0r/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mb-6 hover:underline"
                            >
                                <Image
                                    src="/assets/instagram-icon.svg"
                                    alt="Instagram"
                                    width={40}
                                    height={40}
                                    className="mr-4"
                                />
                                <h3 className="text-2xl font-logo text-[#E1306C]">
                                    @geocoimbra
                                </h3>
                            </a>

                            {/* Texto do testemunho */}
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Hoje fazem 2 anos.
                                <br />
                                <br />
                                Dois anos que, um dia, depois de internação,
                                depois de 6 tentativas de — como os médicos
                                dizem — auto-extermínio, depois de vários
                                psicológicos e uma psicanalista que conseguiu
                                sugar o restinho das minhas forças, ELE me
                                encontrou. Eu estava de pijama, tinha chorado a
                                tarde inteira e no final de semana anterior
                                tinha reunido meus pais e minhas irmãs
                                implorando para que me deixassem ir, porque era
                                injusto demais me deixarem viver assim, era
                                injusto demais não viver, apenas acordar e
                                dormir sabendo que não tinha como fazer parar de
                                doer, e eu sabia bem, já tomava 9 remédios por
                                dia, mal trabalhava já tinha largado a faculdade
                                e tinha o psiquiatra e a rede de apoio mais
                                incrível que alguém poderia ter (obrigada
                                família) e mesmo assim eu queria mais que tudo
                                morrer. Mas ELE não desistiu de mim, numa terça
                                feira, minha mãe me implorou pela última vez
                                para acompanha-la, disse que não teria como ser
                                pior do que já era. E não foi.
                                <br />
                                <br />
                                A primeira vez que sentei com Pastor Aldo e a
                                Pastora Joana, eles não me perguntaram se eu
                                queria aceitar Jesus, ou se eu tinha fé, ou
                                qualquer outra coisa, eles só me perguntaram se
                                eu realmente queria ficar bem, e eu queria.
                                <br />
                                <br />
                                Para mim é muito estranho, até hoje falar de
                                como foi a mudança e ela foi rápida, movida a
                                amor, um amor que eu nem sabia que podia
                                existir. Um amor que não me cobra nada, que não
                                exclui ninguém, um amor que me aproxima e não me
                                afasta, um amor que me faz melhor. A 2 anos eu
                                renasci nesse amor, fazem 2 anos que tento
                                explicar como Jesus me ama tanto (e não só a
                                mim) a 2 anos essas pessoas me fortalecem na
                                minha caminhada com Cristo e são um dos meus
                                grandes exemplos a seguir.
                                <br />
                                <br />A depressão me tirou do controle, o Amor
                                de Cristo fez eu entender que eu sempre precisei
                                é que ELE quem estivesse.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Chamada para Ação */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12"
                >
                    <h3 className="text-2xl font-logo text-[#3299dc] mb-4">
                        Essa história te motivou?
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Venha receber também a cura de uma vez por todas! Não
                        deixe para depois, você também pode ser curado.
                    </p>
                    <a
                        href="https://wa.me/+5561981838717"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#25D366] text-white px-8 py-4 rounded-lg font-logo text-lg hover:bg-[#128C7E] transition-all duration-300"
                    >
                        Entrar em contato
                    </a>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Testemunhos;
