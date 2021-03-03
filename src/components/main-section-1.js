import React, { Component } from 'react';
// import { Parallax, Background } from 'react-parallax';

import mainSection1Styles from './main-section.module.scss';

import image1 from "../assets/images/IMG_1_S.jpg";
import image2 from "../assets/images/IMG_2_S.jpg";
import image3 from '../assets/images/IMG_3_S.jpg';
import image4 from "../assets/images/IMG_4_S.jpg";
import image5 from "../assets/images/IMG_5_S.jpg";

import SeparatorV from './separator-v';
import SeparatorH from './separator-h';
import ContactForm from './contact-form';
import Image from './ImageMain';

export default class MainSection extends Component {
    render() {
        const props = this.props;
        return (
            <props.ParallaxProvider>
                <div className={mainSection1Styles.container}>
                    <div className='title grid-12 mb-120 mt-60'>
                        <p className="grid-1-13">
                            {/* REPENSER L’INFLUENCE */}
                            {props.intl.formatMessage({ id: 'main.scrollContent.title1' })}
                        </p>
                    </div>


                    <props.Parallax y={['-100px', '100px']} tagOuter="figure" className="image-parallaxe">
                        <div className='grid-12'>
                            <div className="grid-2-12 small-grid-1-13">
                                <Image src={image1} alt="two girls in a garden"></Image>
                            </div>
                        </div>
                    </props.Parallax>


                    <div className='title title-empty grid-12 mt-120 mb-60'>
                        <p className="grid-3-11">
                            {/* UNE AUDIENCE À LA RECHERCHE D’AUTHENTICITÉ */}
                            {props.intl.formatMessage({ id: 'main.scrollContent.title2' })}
                        </p>
                    </div>


                    {/* <Parallax y={[35, -30]} tagOuter="figure" className="mt-60 mb-60"> */}
                    <div className={mainSection1Styles.horizontalDisplay + ' grid-12 mb-60'}>
                        <div className={mainSection1Styles.horizontalDisplayImage + ' small-grid-3-11'}>
                            {/* <img src={image2} alt="girl wearing black in front of a white wall"></img> */}
                            <Image src={image2} alt="two girls in a garden" classes=""></Image>
                        </div>

                        <div className={mainSection1Styles.horizontalDisplayLeft}>
                            <div className={mainSection1Styles.horizontalDisplayLeftTitle + ' text-bold'}>
                                {/* L’époque des unboxings et placements de produits trop évidents est révolue. */}
                                {props.intl.formatMessage({ id: 'main.scrollContent.horizontalDisplay1.text1' })}
                            </div>
                            <div className='text'>
                                {/* Allegria souhaite proposer aux marques et aux influenceurs la création de contenus authentiques, premiums et engageants, en utilisant des codes simples, empruntés au luxe qui rafraichissent les contenus sponsorisés. */}
                                {props.intl.formatMessage({ id: 'main.scrollContent.horizontalDisplay1.text2' })}
                            </div>
                        </div>
                        <div className={mainSection1Styles.separator}><div></div></div>
                        <div className={mainSection1Styles.horizontalDisplayRight}>
                            <div className={mainSection1Styles.horizontalDisplayImageParallaxG}>
                                {/* <img src={image2} alt="girl wearing black in front of a white wall" style={{ width: '100%' }}></img> */}
                                <Image src={image2} alt="two girls in a garden" classes="" style={{ width: '100%' }}></Image>
                            </div>
                            {/* </div> */}
                            {/* <img src={image2} alt="girl wearing black in front of a white wall"></img> */}
                        </div>
                    </div>
                    {/* </Parallax> */}

                    <props.Parallax y={['-100px', '100px']} tagOuter="figure" className="image-parallaxe">
                        <div className=' title title-empty grid-12 mt-150 mb-90'>
                            <p className="grid-2-12">
                                {/* DES INFLUENCEURS IMPLIQUÉS POUR DES ABONNÉS PLUS ENGAGÉS */}
                                {props.intl.formatMessage({ id: 'main.scrollContent.title3' })}
                            </p>
                        </div>
                    </props.Parallax>

                    <div className={mainSection1Styles.wideImage + ' mt-150'}>
                        {/* <img src={image3} alt="two girls looking at the camera"></img> */}
                        <Image src={image3} alt="two girls in a garden" classes=""></Image>
                    </div>

                    <div className={mainSection1Styles.horizontalDisplay2 + ' grid-12 mt-150 mb-150'}>
                        <div className={mainSection1Styles.horizontalDisplay2Left}>
                            {/* <img src={image4} alt="girl's face wearing red"></img> */}
                            <Image src={image4} alt="two girls in a garden" classes=""></Image>
                        </div>
                        <div className={mainSection1Styles.horizontalDisplay2Right}>
                            <div className={mainSection1Styles.horizontalDisplay2RightTitle + ' text-bold'}>
                                {/* La voix des prescripteurs, qu’ils soient YouTubeurs, Instagrameurs, experts ou célébrités, est désormais un outil marketing incontournable. Pourtant, ils sont souvent peu consultés lors de l’élaboraton des briefs... */}
                                {props.intl.formatMessage({ id: 'main.scrollContent.horizontalDisplay2.text1' })}
                            </div>
                            <div className='text'>
                                {props.intl.formatMessage({ id: 'main.scrollContent.horizontalDisplay2.text2' })}
                                {/* Allegria souhaite replacer les influenceurs au centre du processus stratégique et créatif des campagnes de marque. Connaissant leurs audiences mieux que quiconque leur avis est précieux. Réellement Impliqués, les collaborations n’en seront que plus réussies ! */}
                            </div>
                        </div>
                        <div className={mainSection1Styles.horizontalDisplay2Image}>
                            {/* <img src={image4} alt="girl's face wearing red"></img> */}
                            <Image src={image4} alt="two girls in a garden" classes=""></Image>
                        </div>
                    </div>
                    <props.Parallax y={['-100px', '100px']} tagOuter="figure" className="image-parallaxe">
                        <div className={'title title-empty grid-12 mb-60'}>
                            <p className="grid-3-11">
                                {/* UN SERVICE  */}
                                {props.intl.formatMessage({ id: 'main.scrollContent.title4.1' })}
                                <span className="text-joined">
                                    {/* E-PRDE */}
                                    {props.intl.formatMessage({ id: 'main.scrollContent.title4.2' })}
                                </span>
                                {/* QUALITÉ */}
                                {props.intl.formatMessage({ id: 'main.scrollContent.title4.3' })}
                            </p>
                        </div>
                        <div className={'grid-12 text-centered small-text-left'}>
                            <p className={'text-bold grid-3-11 mb-30 small-grid-1-13 p-15'}>
                                {props.intl.formatMessage({ id: 'main.scrollContent.verticalDisplay.text1.1' })}
                                <span className="text-joined">
                                    {props.intl.formatMessage({ id: 'main.scrollContent.verticalDisplay.text1.2' })}
                                </span>
                                {/* Chez Allegria, nous aimons faire de belles rencontres, c’est pourquoi nous privilégions les rapports humains par-dessus tout ! */}
                            </p>
                            <p className={'text grid-3-11 small-grid-1-13 p-15'}>
                                {props.intl.formatMessage({ id: 'main.scrollContent.verticalDisplay.text2' })}
                                {/* Plutôt que de signer une multitude d’influenceurs en exclusivité, ou de meWre en relation les marques et les influenceurs de façon hasardeuse via des plateformes en ligne, Allegria s’engage a proposer un casting sur mesure, avec des talents fiables que nous connaissons personnellement, et dont nous garantissons le sérieux et l’engagement. */}
                            </p>
                        </div>
                    </props.Parallax>

                    <div className={mainSection1Styles.imageFull + ' grid-12 mb-90 mt-150'}>
                        {/* <img src={image5} alt="two girls in a garden" className="grid-1-13"></img> */}
                        <Image src={image5} alt="two girls in a garden" classes="grid-1-13"></Image>
                    </div>
                    {/* </Parallax> */}
                    <div className={mainSection1Styles.separatorContainer}>
                        <SeparatorH></SeparatorH>
                    </div>
                    <div className={mainSection1Styles.subtitle + ' title title-empty grid-12'}>
                        <p className="grid-3-11">
                            {/* ON RESTE EN CONTACT */}
                            {props.intl.formatMessage({ id: 'main.scrollContent.title5' })}
                        </p>
                    </div>
                    <ContactForm intl={props.intl}></ContactForm>
                </div>
            </props.ParallaxProvider>
        )
    }
}