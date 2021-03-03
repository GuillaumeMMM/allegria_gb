import React, { Component } from 'react';

import image13 from "../assets/images/IMG_13_S.jpg";
import image14 from "../assets/images/IMG_14_S.jpg";
import image15 from "../assets/images/IMG_15_S.jpg";
import image16 from "../assets/images/IMG_16_S.jpg";
import image17 from "../assets/images/IMG_17_S.jpg";

import logo_insta from '../assets/images/logo_insta.png';
import logo_fb from '../assets/images/logo_fb.png';

import brandSectionStyles from './brand-section.module.scss';
import SeparatorV from './separator-v';
import SeparatorH from './separator-h';
import ContactForm from './contact-form';

import Image from './ImageBrand';

export default class BrandSection extends Component {
    render() {
        const props = this.props;
        return (
            <props.ParallaxProvider>
                <div className={brandSectionStyles.container}>
                    <props.Parallax y={['-50px', '50px']}>
                        <div className={'title title-empty grid-12 mt-90 mb-150 small-mb-60'}>
                            <p className="grid-1-13">
                                {/* VOUS DÉSIREZ */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title1' })}
                            </p>
                        </div>
                    </props.Parallax>
                    <div className="mt-90 mb-90 small-mt-60">
                        <SeparatorV></SeparatorV>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-uppercase grid-12 mt-120 mb-120 small-mb-60'}>
                            <p className="grid-1-13">
                                {/* Développer votre image de marque et gagner  */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title2.1' })}
                                <span className="text-joined">
                                    {/* en visibilité ? */}
                                    {props.intl.formatMessage({ id: 'brand.scrollContent.title2.2' })}
                                </span>
                            </p>
                        </div>
                    </props.Parallax>
        
                    <div className={brandSectionStyles.imageLeft + ' mt-150 mb-150 small-mt-90'}>
                        <props.Parallax y={['-100px', '100px']}>
                            <Image src={image13} alt="girl sitted wearing green looking at the camera"></Image>
                            {/* <img src={image13} alt="two girls in a garden"></img> */}
                        </props.Parallax>
                    </div>
        
                    <div className={'title title-uppercase grid-12 mt-120 mb-150'}>
                        <p className="grid-1-13">
                            {/* Créer des contenus originaux et de qualité pour vos plateformes  */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.title3.1' })}
                            <span className="text-joined">
                                {/* digitales ? */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title3.2' })}
                            </span>
                        </p>
                    </div>
        
                    <div className={brandSectionStyles.imageLeftRight + ' mt-150 mb-150'}>
                        <props.Parallax y={['-100px', '100px']}>
                            <div className={brandSectionStyles.imageLeftRightR + ' small-no-display'}>
                                <Image src={image15} alt="girl laying down looking at the camera"></Image>
                                {/* <img src={image15} alt="two girls in a garden"></img> */}
                            </div>
                        </props.Parallax>
                        <props.Parallax y={['-100px', '100px']}>
                            <div className={brandSectionStyles.imageLeftRightL}>
                                <Image src={image14} alt="girl in a pink dress in front of a mirror"></Image>
                                {/* <img src={image14} alt="two girls in a garden"></img> */}
                            </div>
                        </props.Parallax>
                    </div>
        
                    <div className={'title title-uppercase grid-12 mt-60 mb-60'}>
                        <p className="grid-1-13">
                            {/* Collaborer avec des influenceurs engagés et  */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.title4.1' })}
                            <span className="text-joined">
                                {/* performants ? */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title4.2' })}
                            </span>
                        </p>
                    </div>
        
                    <SeparatorV></SeparatorV>
        
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mt-120 mb-120'}>
                            <p className="grid-2-12">
                                {/* ALLEGRIA VOUS PROPOSE UN ACOMPAGNEMENT SUR MESURE SELON  */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title5.1' })}
                                <span className="text-joined">
                                    {/* VOS BESOINS ;) */}
                                    {props.intl.formatMessage({ id: 'brand.scrollContent.title5.2' })}
                                </span>
                            </p>
                        </div>
                    </props.Parallax>
        
                    <div className={brandSectionStyles.wideImage + ' mt-150'}>
                        <Image src={image16} alt="girl sitted wearing green looking at the camera"></Image>
                        {/* <img src={image16} alt="two girls looking at the camera"></img> */}
                    </div>
        
                    <div className={'title grid-12 mt-60 mb-90'}>
                        <p className="grid-1-13">
                            {/* NOTRE EXPERTISE ET NOTRE RÉSEAU À VOTRE SERVICE */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.title6' })}
                        </p>
                    </div>
        
                    {/* <div className={brandSectionStyles.social}>
                        <SeparatorV></SeparatorV>
                        <div className={brandSectionStyles.socialLinks}>
                            <a className={brandSectionStyles.socialLink}>
                                <Image src={logo_insta} alt="instagram logo"></Image>
                            </a>
                            <a className={brandSectionStyles.socialLink}>
                                <Image src={logo_fb} alt="facebook logo"></Image>
                            </a>
                        </div>
                    </div> */}
        
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={brandSectionStyles.horizontalDisplay + ' grid-12 mt-120'}>
                            <div className={brandSectionStyles.horizontalDisplayLeft}>
                                <Image src={image17} alt="girl sitted wearing blue looking at the camera"></Image>
                                {/* <img src={image17} alt="two girls in a garden"></img> */}
                            </div>
                            <div className={brandSectionStyles.horizontalDisplayRight}>
                                <div className={'title title-empty text-left mb-60'}>
                                    <p>
                                        {/* STRATEGIE ET MARKETING D’INFLUENCE */}
                                        {props.intl.formatMessage({ id: 'brand.scrollContent.title7' })}
                                    </p>
                                </div>
                                <div className="grid-6">
                                    <p className={'text-bold grid-1-6'}>
                                        {/* Selon vos objectifs et votre budget, nous vous proposons une recommandation sur mesure */}
                                        {props.intl.formatMessage({ id: 'brand.scrollContent.text1' })}
                                    </p>
        
                                    <div className={brandSectionStyles.horizontalDisplayRightList + ' grid-1-6'}>
                                        <p className={brandSectionStyles.horizontalDisplayRightListItem + ' text-bold'}>
                                            {/* Un casting */}
                                            {props.intl.formatMessage({ id: 'brand.scrollContent.text2' })}
                                        </p>
                                        <p className={'text'}>
                                            {/* Micro ou macro influenceurs dont l’audience correspond à votre cible. */}
                                            {props.intl.formatMessage({ id: 'brand.scrollContent.text3' })}
                                        </p>
        
                                        <p className={brandSectionStyles.horizontalDisplayRightListItem + ' text-bold'}>
                                            {/* Des contenus adaptés */}
                                            {props.intl.formatMessage({ id: 'brand.scrollContent.text4' })}
                                        </p>
                                        <p className={'text'}>
                                            {/* Recommandation créative et narrative et mise en forme des briefs destinés aux Influenceurs. */}
                                            {props.intl.formatMessage({ id: 'brand.scrollContent.text5' })}
                                        </p>
        
                                        <p className={brandSectionStyles.horizontalDisplayRightListItem + ' text-bold'}>
                                            {/* Un planning de diffusion */}
                                            {props.intl.formatMessage({ id: 'brand.scrollContent.text6' })}
                                        </p>
                                        <p className={'text'}>
                                            {/* Mécanique, choix des plateformes et calendrier de publication */}
                                            {props.intl.formatMessage({ id: 'brand.scrollContent.text7' })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </props.Parallax>
                    <div className={brandSectionStyles.halfContent + ' title title-empty grid-12 mt-120 mb-30 text-left'}>
                        <p className="grid-5-13">
                            <span className="text-joined"><br></br>
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title8.1' })}
                            </span>
                            <span className="text-joined">
                                {/* DE CONTENU */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title8.2' })}
                            </span>
                        </p>
                    </div>
                    <div className={brandSectionStyles.halfContent + ' text-bold grid-12'}>
                        <p className="grid-5-13">
                            {/* Selon vos besoins, vos plateformes, vos lancements, nous vous proposons de créer du contenu sur mesure grâce à des concepts originaux, pour affirmer votre image et engager votre audience */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.text8' })}
                        </p>
                    </div>
        
                    <div className={brandSectionStyles.halfContent + ' title title-empty grid-12 mt-60 mb-30 text-left'}>
                        <p className="grid-5-13">
                            {/* ORGANISATION D'ÉVÈNEMENTS MÉDIAS */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.title9' })}
                        </p>
                    </div>
                    <div className={brandSectionStyles.halfContent + ' text-bold grid-12 mb-90'}>
                        <p className="grid-5-13">
                            {/* PR et Conseil */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.text9' })}
                        </p>
                    </div>
        
                    <SeparatorV></SeparatorV>
        
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mb-30 mt-120'}>
                            <p className="grid-1-13">
                                {/* NOS FORCES */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.title10' })}
                            </p>
                        </div>
                        <div className={'text-bold grid-12 text-centered small-light-font'}>
                            <p className="grid-3-11 mb-30">
                                {/* Une relation de longue date et de confiance avec des centaines d’Influenceurs */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.text10' })}
                            </p>
                            <p className="grid-3-11 mb-30">
                                {/* Une experience de plusieurs année dans ce milieu en constante mutation */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.text11' })}
                            </p>
                            <p className="grid-3-11 mb-120">
                                {/* Une équipe de créatifs avec des styles affirmés photographes, graphistes, réalisateurs, stylistes, modèles,MUA pour réaliser tous vos projets même  */}
                                {props.intl.formatMessage({ id: 'brand.scrollContent.text12.1' })}
                                <span className="text-joined">
                                    {/* les plus fous ! */}
                                    {props.intl.formatMessage({ id: 'brand.scrollContent.text12.2' })}
                                </span>
                            </p>
                        </div>
                    </props.Parallax>
        
                    <SeparatorH></SeparatorH>
        
                    <div className={'title title-empty grid-12'}>
                        <p className="grid-1-13">
                            {/* ĖCRIVEZ NOUS */}
                            {props.intl.formatMessage({ id: 'brand.scrollContent.title11' })}
                        </p>
                    </div>
        
                    <ContactForm intl={props.intl}></ContactForm>
                </div>
            </props.ParallaxProvider>
        )
    }
}