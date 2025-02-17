import { motion } from "framer-motion";
import { FC } from "react";

const Sobre: FC<{ id: string }> = ({ id }) => {
    return (
        <section
            id={id}
            className="relative min-h-screen py-20 px-4 md:px-8 bg-black text-white"
        >
            {/* Container principal */}
            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-logo text-[#cb0133] text-center mb-16"
                >
                    Quem Somos
                </motion.h2>

                {/* História */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="space-y-6 text-lg text-justify px-4 md:px-0"
                >
                    <p>
                        Somos um casal de pastores, Aldo e Joana Ribeiro, pais
                        de Lude e Zeke Ribeiro. O Ministério inicial do casal,
                        juntamente com os filhos, teve início com reuniões no
                        lar, a partir de 2003, evangelizando e ganhando almas
                        para o Senhor, quando, naquela época, Deus enviava
                        pessoas de várias localidades, de dentro e fora do
                        Distrito Federal, para ouvirem a Palavra e receberem
                        ministrações de curas e libertações.
                    </p>
                    <p>
                        Em 2010 surgiu o Ministério “Vasos Puros”, agregando o
                        louvor ao evangelismo, que crescia tanto no número de
                        pessoas alcançadas quanto na abrangência geográfica, e o
                        trabalho era realizado em nosso lar, nos lares das
                        pessoas e em igrejas para as quais éramos convidados.
                    </p>
                    <p>
                        Por volta de 2012, o Senhor deu início ao envio de
                        pessoas com problemas de depressão e ansiedade, ainda
                        que nós tenhamos nos dado conta dessa especialidade
                        somente mais tarde, quando surgiu o Ministério Depressão
                        Tem Cura, em 2014, trazendo o entendimento de que esse
                        chamado tem relação com nossa cura no início da
                        caminhada cristã.
                    </p>
                    <p>
                        No final do ano de 2019, quando começava a pandemia da
                        Covid, o Senhor falou conosco, por meio de sonhos, que
                        deveríamos abrir a Igreja Paz e Alegria, cujo nome,
                        também dado por Ele, faz referência ao que Deus tem
                        feito ao longo dos anos, quando nos cura da depressão e
                        ansiedade, tirando a tristeza e o desespero, e nos enche
                        exatamente de Sua paz e alegria.
                    </p>
                    <p>
                        Com o fim do isolamento social, a Igreja Paz e Alegria
                        teve suas portas abertas para não mais fechar, cujos
                        membros são, na maioria, ex-depressivos que viram o Sol
                        da Justiça brilhar em suas vidas e tem atraído outras
                        pessoas que vão se somando a esse ministério cheio da
                        graça de Deus.
                    </p>
                    <p>
                        Se você conhece alguém que sofre com depressão ou
                        ansiedade, não hesite em indicar a Igreja Paz e Alegria,
                        pois o Senhor está aqui e só Ele pode curar e libertar
                        desse mal que assola a humanidade.
                    </p>
                </motion.div>

                {/* Missão e Visão */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Missão */}
                        <div className="space-y-6 px-4 md:px-0 transform transition-all duration-300 md:hover:scale-105 md:hover:z-10 md:hover:shadow-lg md:hover:backdrop-blur-sm">
                            <h3 className="text-3xl font-logo text-[#3299dc] text-center">
                                Missão
                            </h3>
                            <p className="text-lg text-justify">
                                A Igreja Paz e Alegria tem como missão pregar a
                                Palavra de Deus de forma simples e genuína,
                                apresentando as boas novas do Senhor Jesus
                                Cristo. Cumprimos o chamado do Senhor para
                                libertar e curar pessoas de males como
                                depressão, ansiedade, outras doenças da alma e
                                do corpo. Praticamos e ensinamos adoração ao
                                Senhor e a unidade como família de Deus.
                                Buscamos e promovemos o crescimento espiritual,
                                de conhecimento e humano, para serviço a Deus e
                                ao próximo, com o fortalecimento dado pelos dons
                                espirituais, para que o nome do Senhor seja
                                glorificado.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="space-y-6 px-4 md:px-0 transform transition-all duration-300 md:hover:scale-105 md:hover:z-10 md:hover:shadow-lg md:hover:backdrop-blur-sm">
                            <h3 className="text-3xl font-logo text-[#08ad9c] text-center">
                                Visão
                            </h3>
                            <p className="text-lg text-justify">
                                Ser uma igreja inserida e relevante na
                                comunidade, que cresce integralmente em
                                quantidade e qualidade, composta de pessoas
                                transformadas, espiritual, emocional, moral,
                                física e socialmente, cuja adoração
                                caracteriza-se por uma vivência devocional,
                                pessoal e coletiva da manifestação da presença
                                de Deus, plena de relacionamento com Deus e com
                                todas as pessoas, e que seus dons e talentos
                                dados por Deus sejam conhecidos de todos.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Valores */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20"
                >
                    <h3 className="text-3xl font-logo text-[#cb0133] text-center mb-12">
                        Valores
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Santidade */}
                        <div className="p-6 bg-white/10 rounded-xl border border-[#3299dc]/30 text-center relative min-h-[280px]">
                            <div className="pb-12">
                                {" "}
                                {/* Adicionado padding-bottom */}
                                <h4 className="text-xl font-logo text-[#3299dc]">
                                    Santidade
                                </h4>
                                <p className="mt-4 text-gray-300 ">
                                    Esforcem-se para viver em paz com todos e
                                    para serem santos; sem santidade ninguém
                                    verá o Senhor.
                                </p>
                            </div>
                            <p className="absolute bottom-6 left-0 right-0 text-sm text-gray-400">
                                Hebreus 13.14
                            </p>
                        </div>

                        {/* Compromisso */}
                        <div className="p-6 bg-white/10 rounded-xl border border-[#08ad9c]/30 text-center relative min-h-[280px]">
                            <div className="pb-12">
                                {" "}
                                {/* Adicionado padding-bottom */}
                                <h4 className="text-xl font-logo text-[#08ad9c]">
                                    Compromisso
                                </h4>
                                <p className="mt-4 text-gray-300">
                                    E Jesus lhe disse: Ninguém, que lança mão do
                                    arado e olha para trás, é apto para o reino
                                    de Deus.
                                </p>
                            </div>
                            <p className="absolute bottom-6 left-0 right-0 text-sm text-gray-400">
                                Lucas 9.62
                            </p>
                        </div>

                        {/* Misericórdia */}
                        <div className="p-6 bg-white/10 rounded-xl border border-[#cb0133]/30 text-center relative min-h-[280px]">
                            <div className="pb-12">
                                {" "}
                                {/* Adicionado padding-bottom */}
                                <h4 className="text-xl font-logo text-[#cb0133]">
                                    Misericórdia
                                </h4>
                                <p className="mt-4 text-gray-300">
                                    Então Pedro, aproximando-se dele, disse:
                                    Senhor, até quantas vezes pecará meu irmão
                                    contra mim, e eu lhe perdoarei? Até sete?
                                    Jesus lhe disse: Não te digo que até sete;
                                    mas, até setenta vezes sete.
                                </p>
                            </div>
                            <p className="absolute bottom-6 left-0 right-0 text-sm text-gray-400">
                                Mateus 18.21-22
                            </p>
                        </div>

                        {/* Amor */}
                        <div className="p-6 bg-white/10 rounded-xl border border-[#f8b76c]/30 text-center relative min-h-[280px]">
                            <div className="pb-12">
                                {" "}
                                {/* Adicionado padding-bottom */}
                                <h4 className="text-xl font-logo text-[#f8b76c]">
                                    Amor
                                </h4>
                                <p className="mt-4 text-gray-300">
                                    Com toda a humildade e mansidão, com
                                    longanimidade, suportando-vos uns aos outros
                                    em amor.
                                </p>
                            </div>
                            <p className="absolute bottom-6 left-0 right-0 text-sm text-gray-400">
                                Efésios 4.2
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Sobre;
