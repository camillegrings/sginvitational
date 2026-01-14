import { Header, Footer } from '@components'
import styles from './style.module.css'
import { balmy, snowmanGraffiti } from '@fonts'
import Image from 'next/image'
import cintia from '@assets/Cintia.png'
import guigoemargie from '@assets/GuigoeMargie.png'
import daniloebruna from '@assets/DaniloeBruna.png'
import gui from '@assets/GuiMello.png'
import marcel from '@assets/Marcel.png'
import cintiaDJ from '@assets/CintiaDJ.png'
import maruDJ from '@assets/MaruDJ.png'
import nelsonDJ from '@assets/NelsonDJ.png'

export default function InfoPage() {
    return (
        <>
            <Header />
            <main className={`${styles.container}`}>
                <h2 className={`${styles.title} ${snowmanGraffiti.className}`}>Saiba Mais</h2>
                <section id='data' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>Data</h3>
                    <p>24, 25 e 26 de abril</p>
                </section>
                <section id='local' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>Local</h3>
                    <div className={`${styles.placeWrapper}`}>
                        <div>
                            <h4 className={`${styles.subheading}`}>Aulas e</h4>
                            <h4 className={`${styles.subheading}`}>Baile Sexta (24) e Domingo (26):</h4>
                            <p className={`${styles.spacing}`}>Endereço: DANCE 4ALL - R. Domingos de Morais, 2441, Vila Mariana, São Paulo, Brasil</p>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.185103069425!2d-46.63888452461439!3d-23.597693578774884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a342bd71b89%3A0xbe3348249a9049ab!2sDance4all%20Est%C3%BAdio%20de%20Dan%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1767138930414!5m2!1spt-BR!2sbr" width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <div>
                            {/* <h4 className={`${styles.subheading}`}>Baile Sábado (25) - Baile do TEMA X </h4> */}
                            <h4 className={`${styles.subheading}`}>Baile Sábado (25) </h4>
                            {/* <p className={`${styles.theme}`}>Oferecido por: Patrocinador</p> */}
                            {/* <p className={`${styles.spacing}`}>Endereço: DANCE 4ALL - R. Domingos de Morais, 2441, Vila Mariana, São Paulo, Brasil</p> */}
                            <p className={`${styles.spacing}`}>Endereço: EM BREVE!!</p>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.185103069425!2d-46.63888452461439!3d-23.597693578774884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a342bd71b89%3A0xbe3348249a9049ab!2sDance4all%20Est%C3%BAdio%20de%20Dan%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1767138930414!5m2!1spt-BR!2sbr" width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                    </div>
                </section>
                <section id='cronograma' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>Cronograma</h3>
                    <p className={`${styles.spacing}`}>EM BREVE!!</p>
                    {/* <iframe className={`${styles.schedule}`} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSXqtINBON56tkULnSifMhEED_4vmPfQRz5lsCRTjoo7X2HFWT7DS5A01m3tD56iuJuFJztNXz7bT6/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&chrome=false" width="725" height="500" style={{ border: 0 }} ></iframe> */}
                </section>
                <section id='professores' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>Professores</h3>
                    <div className={`${styles.professorsItemLeft}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Cintia Fiaschi</h4>
                        <div className={`${styles.professorsWrapperLeft}`}>
                            <Image alt='' src={cintia} width={280} height={350} />
                            <p className={`${styles.professorsDescLeft}`}>A Cintia é uma das profissionais mais influentes da história do WCS no Brasil. Participou na formação de diversos dançarinos e profissionais e influenciou diretamente a cena com sua presença marcante e charme unânime na dança. Também está diretamente ligada com o desenvolvimento de todos os participantes do grupo SG e, consequentemente, do desenvolvimento do SGI!! <br /> Profissional de nível All-Star já vem para o seu terceiro ano no SGI!!</p>
                        </div>
                    </div>

                    <div className={`${styles.professorsItemRight}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Guigo & Margie</h4>
                        <div className={`${styles.professorsWrapperRight}`}>
                            <p className={`${styles.professorsDescRight}`}>
                                Uma grande e satisfatória novidade no SGI, Guigo e Margie ministram aulas respectivamente em Los Angeles, Califórnia (e anteriormente Porto Alegre) e Chattanooga no Tennessee.<br />
                                O All-Star Guigo trabalha com uma proposta híbrida de &apos;Flow&lsquo; ou &apos;Swouk&lsquo; que consiste em incluir técnicas de Zouk Brasileiro no WCS ao passo que a Margie, que recentemente alcançou a categoria de Champion =D, trabalha com a técnica clássica, dessa forma a dupla traz para o SGI uma grande adição de conhecimento e técnicas para o desenvolvimento da dança no evento.
                            </p>
                            <Image alt='' src={guigoemargie} width={280} height={350} />
                        </div>
                    </div>

                    <div className={`${styles.professorsItemLeft}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Danilo & Bruna</h4>
                        <div className={`${styles.professorsWrapperLeft}`}>
                            <Image alt='' src={daniloebruna} width={280} height={350} />
                            <p className={`${styles.professorsDescLeft}`}>Danilo e Bruna, vindos de lugares completamente diferentes, são a perfeita ilustração do potencial social do WCS. A dupla que já organizou eventos, ministrou aulas para turmas e em eventos e tem grande experiência na vivência competitiva do WCS é referência técnica em São Paulo. Uma lutadora de Kung Fu que se encontrou com um comediante e juntos trazem uma riqueza imensa na visão da dança e na dinâmica de ensino, enriquecendo pelo terceiro ano consecutivo o SGI da melhor forma.</p>
                        </div>
                    </div>

                    <div className={`${styles.professorsItemRight}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Gui Mello</h4>
                        <div className={`${styles.professorsWrapperRight}`}>
                            <p className={`${styles.professorsDescRight}`}>
                                Professor Residente e Membro Grupo SG desde 2015, Gui Mello ministra aulas de dança de diversos ritmos na Dance4All na cidade de São Paulo. Com seu sorriso cativante e energia inigualável, o Gui faz qualquer evento de dança ser único, protagonizando momentos de diversão e descontração.
                            </p>
                            <Image alt='' src={gui} width={280} height={350} />
                        </div>
                    </div>

                    <div className={`${styles.professorsItemLeft}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Marcel</h4>
                        <div className={`${styles.professorsWrapperLeft}`}>
                            <Image alt='' src={marcel} width={280} height={350} />
                            <p className={`${styles.professorsDescLeft}`}>Professor Residente e Membro Fundador do Grupo SG, Marcel é versado em absolutamente qualquer estilo de dança que você consiga imaginar. Professor de dança há mais de uma década e coreógrafo para o Grupo SG, o Marcel é uma das referências técnicas do Grupo. Extremamente elogiado por todos como uma pessoa calorosa e participante em todos os momentos do evento! Procurem ele para dançar! </p>
                        </div>
                    </div>
                </section>
                <section id='djs' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>DJs</h3>
                    <div className={`${styles.djsWrapper}`}>
                        <Image alt='DJ Nelson West' src={nelsonDJ} width={380} height={450} />
                        <Image alt='DJ Maru' src={maruDJ} width={380} height={450} />
                        <Image alt='DJ Cintia' src={cintiaDJ} width={380} height={450} />
                    </div>


                </section>
                {/* <section id='staff' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>Staff</h3>


                </section> */}
            </main>
            <Footer />
        </>
    );
}