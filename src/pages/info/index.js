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
import shirleiDJ from '@assets/Shirlei.png'
import karenDJ from '@assets/KarenDJ.png'

import { useTranslations } from '@/i18n';

export default function InfoPage() {
    const translation = useTranslations('InfoPage');
    return (
        <>
            <Header />
            <main className={`${styles.container}`}>
                <h2 className={`${styles.title} ${snowmanGraffiti.className}`}>{translation('title')}</h2>
                <section id='data' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>{translation('subtitle-date')}</h3>
                    <p>{translation('date')}</p>
                </section>
                <section id='local' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>{translation('subtitle-place')}</h3>
                    <div className={`${styles.placeWrapper}`}>
                        <div>
                            <h4 className={`${styles.subheading}`}>{translation('subheading-class')}</h4>
                            <h4 className={`${styles.subheading}`}>{translation('subheading-dance-1')}</h4>
                            <p className={`${styles.spacing}`}>{translation('address-1')}</p>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.185103069425!2d-46.63888452461439!3d-23.597693578774884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a342bd71b89%3A0xbe3348249a9049ab!2sDance4all%20Est%C3%BAdio%20de%20Dan%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1767138930414!5m2!1spt-BR!2sbr" width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <div>
                            {/* <h4 className={`${styles.subheading}`}>Baile Sábado (25) - Baile do TEMA X </h4> */}
                            <h4 className={`${styles.subheading}`}>{translation('subheading-dance-2')}</h4>
                            {/* <p className={`${styles.theme}`}>Oferecido por: Patrocinador</p> */}
                            {/* <p className={`${styles.spacing}`}>Endereço: DANCE 4ALL - R. Domingos de Morais, 2441, Vila Mariana, São Paulo, Brasil</p> */}
                            <p className={`${styles.spacing}`}>{translation('address-2')}</p>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.185103069425!2d-46.63888452461439!3d-23.597693578774884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a342bd71b89%3A0xbe3348249a9049ab!2sDance4all%20Est%C3%BAdio%20de%20Dan%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1767138930414!5m2!1spt-BR!2sbr" width="100%" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                    </div>
                </section>
                <section id='cronograma' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>{translation('subtitle-schedule')}</h3>
                    <p className={`${styles.spacing}`}>{translation('schedule')}</p>
                    {/* <iframe className={`${styles.schedule}`} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSSXqtINBON56tkULnSifMhEED_4vmPfQRz5lsCRTjoo7X2HFWT7DS5A01m3tD56iuJuFJztNXz7bT6/pubhtml?gid=0&amp;single=true&amp;widget=false&amp;headers=false&chrome=false" width="725" height="500" style={{ border: 0 }} ></iframe> */}
                </section>
                <section id='professores' className={`${styles.info} ${styles.professors}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}  ${styles.professors}`}>{translation('subtitle-teachers')}</h3>
                    <div className={`${styles.professorsItemLeft}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Cintia Fiaschi</h4>
                        <div className={`${styles.professorsWrapperLeft}`}>
                            <Image alt='' src={cintia} width={280} height={350} />
                            <p className={`${styles.professorsDescLeft}`}>{translation('cintia-desc')}</p>
                        </div>
                    </div>

                    <div className={`${styles.professorsItemRight}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Guigo & Margie</h4>
                        <div className={`${styles.professorsWrapperRight}`}>
                            <p className={`${styles.professorsDescRight}`}>{translation('guigo-margie-desc')}</p>
                            <Image alt='' src={guigoemargie} width={280} height={350} />
                        </div>
                    </div>

                    <div className={`${styles.professorsItemLeft}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Danilo & Bruna</h4>
                        <div className={`${styles.professorsWrapperLeft}`}>
                            <Image alt='' src={daniloebruna} width={280} height={350} />
                            <p className={`${styles.professorsDescLeft}`}>{translation('danilo-bruna-desc')}</p>
                        </div>
                    </div>

                    <div className={`${styles.professorsItemRight}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Gui Mello</h4>
                        <div className={`${styles.professorsWrapperRight}`}>
                            <p className={`${styles.professorsDescRight}`}>{translation('gui-desc')}</p>
                            <Image alt='' src={gui} width={280} height={350} />
                        </div>
                    </div>

                    <div className={`${styles.professorsItemLeft}`}>
                        <h4 className={`${styles.professorsSubheading}`}>Marcel</h4>
                        <div className={`${styles.professorsWrapperLeft}`}>
                            <Image alt='' src={marcel} width={280} height={350} />
                            <p className={`${styles.professorsDescLeft}`}>{translation('marcel-desc')}</p>
                        </div>
                    </div>
                </section>
                <section id='djs' className={`${styles.info}`}>
                    <h3 className={`${styles.subtitle} ${balmy.className}`}>DJs</h3>
                    <div className={`${styles.djsWrapper}`}>
                        <Image alt='DJ Nelson West' src={nelsonDJ} width={380} height={450} />
                        <Image alt='DJ Maru' src={maruDJ} width={380} height={450} />
                        <Image alt='DJ Cintia' src={cintiaDJ} width={380} height={450} />
                        <Image alt='DJ Shirlei' src={shirleiDJ} width={380} height={450} />
                        <Image alt='DJ Karen' src={karenDJ} width={380} height={450} />
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