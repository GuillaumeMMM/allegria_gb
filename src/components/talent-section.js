import React, { Component } from 'react';

import talentSectionStyles from './talent-section.module.scss';

import image6 from '../assets/images/IMG_6_S.jpg';
import image7 from '../assets/images/IMG_7_S.jpg';
import image8 from '../assets/images/IMG_8_S.jpg';
import image9 from '../assets/images/IMG_9_S.jpg';
import image10 from '../assets/images/IMG_10_S.jpg';
import image11 from '../assets/images/IMG_11_S.jpg';

import SeparatorV from './separator-v';
import SeparatorVM from './separator-v-m';
import SeparatorH from './separator-h';
import ContactForm from './contact-form';
import Image from './ImageTalent';


export default class TalentSection extends Component {
    render() {
        const props = this.props;
        return (
            <props.ParallaxProvider>
                <div className={talentSectionStyles.container} style={{ zIndex: 0 }}>
                    <div className={talentSectionStyles.smallImage}>
                        {/* <img src={image6} alt="two girls in a garden" style={{ width: '100%' }}></img> */}
                        <Image src={image6} alt="blond girl's face" style={{ width: '100%' }}></Image>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mt-120 mb-120  small-mb-60'} style={{ position: 'relative' }}>
                            <p className="grid-1-13">
                                {/* PAS D'EXCLU */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title1' })}
                            </p>
                        </div>
                    </props.Parallax>
                    <div className="mt-150 mb-150 small-mt-90">
                        <SeparatorV></SeparatorV>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mt-120 mb-120 small-mb-60'}>
                            <p className="grid-1-13">
                                {/* UN ACCOMPAGNEMENT SUR MESURE SELON  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title2.1' })}
                                <span className="text-joined">
                                    {/* TES BESOINS */}
                                    {props.intl.formatMessage({ id: 'talent.scrollContent.title2.2' })}
                                </span>
                            </p>
                        </div>
                    </props.Parallax>
                    <div className="mt-150 mb-150 small-mt-90">
                        <SeparatorV></SeparatorV>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mt-120 mb-120'}>
                            <p className="grid-1-13">
                                {/* DES COLLABORATIONS EXCITANTES ET AUTHENTIQUES */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title3' })}
                            </p>
                        </div>
                    </props.Parallax>
                    {/* <SeparatorVM></SeparatorVM> */}
                    <div className={'grid-12 mt-150 mb-60'}>
                        <img src={image7} alt="redhead girl looking at the camera" className="grid-2-12 small-grid-1-13" style={{ width: '100%' }}></img>
                    </div>
                    <SeparatorV></SeparatorV>

                    <div className={'title title-empty grid-12 mt-120 mb-120 small-mt-60 small-mb-60'}>
                        <p className="grid-1-13">
                            {/* NOTRE EXPERIENCE  */}
                            {props.intl.formatMessage({ id: 'talent.scrollContent.title4.1' })}
                            <span className="text-joined">
                                {/* A TON SERVICE */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title4.2' })}
                            </span>
                        </p>
                    </div>

                    <SeparatorH></SeparatorH>
                    <div className={'grid-12 mt-60 mb-60'}>
                        <img src={image8} alt="blond girl holding a rose" style={{ width: '100%' }} className="grid-4-10"></img>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title grid-12 mt-120 mb-30'}>
                            <p className="grid-1-13">
                                {/* PAS D’EXCLU */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title5' })}
                            </p>
                        </div>
                        <div className={'text text-centered grid-12 mt-30 mb-120'}>
                            <p className="grid-3-11">
                                {/* Liberté garantie  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.text1.1' })}
                                <span className="smile">
                                    ;)
                        </span>
                            </p>
                            <p className="grid-3-11">
                                {/* Fais nous signe seulement quand tu en as besoin ! */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.text1.3' })}
                            </p>
                        </div>
                    </props.Parallax>
                    <div className={'title grid-12 mt-150 mb-30'}>
                        <p className="grid-1-13">
                            {/* DES COLLABORATIONS AUTHENTIQUES */}
                            {props.intl.formatMessage({ id: 'talent.scrollContent.title6' })}
                        </p>
                    </div>
                    <div className={'text grid-12 text-centered mt-30 mb-150'}>
                        <p className="grid-3-11">
                            {/* Chez Allegria, il nous tient à cœur de trouver le juste équilibre entre les besoins des marques  et ta ligne éditoriale, pour créer des contenus qui te ressemblent ! */}
                            {props.intl.formatMessage({ id: 'talent.scrollContent.text2' })}
                        </p>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title grid-12 mt-120 mb-30'}>
                            <p className="grid-1-13">
                                {/* UN ACCOMPAGNEMENT SUR MESURE SELON  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title7.1' })}
                                <span className="text-joined">
                                    {/* TES BESOINS */}
                                    {props.intl.formatMessage({ id: 'talent.scrollContent.title7.2' })}
                                </span>
                            </p>
                        </div>
                        <div className={'text grid-12 text-centered mt-30 mb-120'}>
                            <p className="grid-3-11">
                                {/* Tu cherches de nouvelles marques avec lesquelles collaborer ? Tu aimerais booster ton feed avec des contenus WOW produits en collaboration avec nos équipes créatives ? Tu as envie d’organiser ta soirée d’anniversaire dans un cadre de rêve ? Nous serons ravis de t’aider ! */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.text3' })}
                            </p>
                        </div>
                    </props.Parallax>
                    <div className={talentSectionStyles.wideImage + ' mt-150'}>
                        <img src={image9} alt="two girls looking at the camera"></img>
                    </div>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mt-120 mb-60'}>
                            <p className="grid-1-13">
                                {/* NOTRE PHILOSOPHIE : SANS INFLUENCEURS,  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title8.1' })}
                                <span className="text-joined">
                                    {/* PAS D’INFLUENCE */}
                                    {props.intl.formatMessage({ id: 'talent.scrollContent.title8.2' })}
                                </span>
                            </p>
                        </div>
                        <div className={'text-bold grid-12 mt-60 mb-120 text-centered small-light-font'}>
                            <p className="grid-3-11">
                                {/* Chez Allegria, nous pensons que chaque projet, chaque collaboration doit être le fruit d’une réflexion commune entre les marques et les influenceurs. Personne ne sait mieux que vous ce qu’attendent vos abonnés, votre avis est donc  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.text4.1' })}
                                <span className="text-joined">
                                    {/* très précieux ;) */}
                                    {props.intl.formatMessage({ id: 'talent.scrollContent.text4.2' })}
                                </span>
                            </p>
                        </div>
                    </props.Parallax>
                    <div className={talentSectionStyles.horizontalDisplay + ' grid-12 mt-150'}>
                        <div className={talentSectionStyles.displayImage}>
                            <img src={image10} alt="blond girl looking away"></img>
                        </div>
                    </div>
                    <div className={'text-bold grid-12 mt-60 mb-30 text-centered'}>
                        <p className="grid-3-11">
                            {/* Notre offre influenceur propose, En plus des opérations commerciales classiques, un accompagnement personnalisé */}
                            {props.intl.formatMessage({ id: 'talent.scrollContent.text5' })}
                        </p>
                    </div>
                    <SeparatorVM></SeparatorVM>
                    <props.Parallax y={['-100px', '100px']}>
                        <div className={'title title-empty grid-12 mb-30 mt-120'}>
                            <p className="grid-1-13">
                                {/* EVENEMENTIEL */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title9' })}
                            </p>
                        </div>
                        <div className={'text grid-12 mt-30 mb-60 text-centered'}>
                            <p className="grid-3-11">
                                {/* Tu peux faire appel à Allegria pour organiser un évènement ou un voyage,  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.text6.1' })}
                                <span className="text-joined">
                                    {/* à des fins pro ou perso  */}
                                    {props.intl.formatMessage({ id: 'talent.scrollContent.text6.2' })}
                                    <span className="smile">
                                        {/* ;) */}
                                        {props.intl.formatMessage({ id: 'talent.scrollContent.text6.3' })}
                                    </span>
                                </span>
                            </p>
                        </div>
                        <div className={'title title-empty grid-12 mb-30 mt-60'}>
                            <p className="grid-1-13">
                                {/* SHOOTING  */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title10.1' })}
                                <span className="text-joined">
                                    {/* PHOTO & VIDEO */}
                                    {props.intl.formatMessage({ id: 'talent.scrollContent.title10.2' })}
                                </span>
                            </p>
                        </div>
                        <div className={'text grid-12 mt-30 mb-120 text-centered'}>
                            <p className="grid-3-11">
                                {/* Nous travaillons avec de nombreux photographes, vidéastes stylistes, monteurs... L’image étant notre point fort, nous serons ravis de te conseiller et de collaborer sur des contenus sponsorisé ou non, selon tes envies et tes besoins */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.text7' })}
                            </p>
                        </div>
                    </props.Parallax>
                    <div className={'grid-12 mt-150 mb-60'}>
                        <img src={image11} alt="girl sitted on a car" style={{ width: '100%' }} className="grid-1-13"></img>
                    </div>
                    <SeparatorH></SeparatorH>
                    <div className={'title title-empty grid-12'}>
                        <p className="grid-1-13">
                            {/* N’hésite pas à nous écrire si tu as un projet, ou si tu souhaites juste discuter, nous serons ravis  */}
                            {props.intl.formatMessage({ id: 'talent.scrollContent.title11.1' })}
                            <span className="text-joined">
                                {/* de te lire ! */}
                                {props.intl.formatMessage({ id: 'talent.scrollContent.title11.2' })}
                            </span>
                        </p>
                    </div>
                    <ContactForm intl={props.intl}></ContactForm>
                </div >
            </props.ParallaxProvider>
        )
    }
}