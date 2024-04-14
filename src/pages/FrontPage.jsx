import React from 'react'
import Header from '../components/Header';
import jakkara1 from '../assets/images/jakkara1.png';
import finland from '../assets/images/finland.png';
import star from '../assets/images/star.png';
import pinecone from '../assets/images/pinecone.png';
import SocialLinks from '../components/SocialLinks';

const FrontPage = () => {
    const heroTitle = `Innovaatio sydämmessä`
    const heroText1 = ` hyödyntää kotimaista männyn sydänpuuta kaluste- ja tuotemuotoilussa.
                    Puuta on paikka, missä luovuus sekä teknologia kohtaavat kestävässä muotoilussa.
                    Yrityksen tavoitteena on ollut kehittää uusia, innovatiivisia tuotteita ja ratkaisuja,
                    jotka hyödyntävät sydänpuun ainutlaatuisia ominaisuuksia monipuolisesti.`;

    const heroText2 = ` jakkara on vain alkusoitto sille, mitä Puuta voi tulevaisuudessa tarjota
                    kestävän kehityksen kentällä. Puuta haluaa olla eturintamassa rakentamassa
                    kestävämpää ja kauniimpaa tulevaisuutta yhdessä muiden vastuullisten toimijoiden kanssa`;

    const aboutUsText = `Puuta on syntynyt kahden muotoilijan
                        intohimosta kotimaiseen puuhun ja
                        suomalaiseen muotoiluun. Puuta-tiimin
                        ammatillinen osaaminen sisältää
                        tuotemuotoilun, käyttökokemuksen
                        suunnittelun, sisustusarkkitehtuurin ja
                        kalustesuunnittelun osaamisen.
                        `

    return (
        <div className='firstPageContent'>
            <Header />
            {/* <div className='header'>
                <div class="image-container">
                    <img src={logo} alt="Puuta Design Logo" />
                </div>
            </div> */}
            <div className='heroWrapper'>
                <div className='heroSection'>
                    <div className='heroText'>
                        <p>
                            <strong>PUUTA</strong> / 2024
                        </p>
                        <h1>
                            {heroTitle}
                        </h1>
                        <p>
                            <span class='first-word'>Puuta</span>{heroText1}
                        </p>
                        <p>
                            <span class='first-word'>Sydänpuu</span>{heroText2}
                        </p>
                    </div>
                    <div class="image-container">
                        <img src={jakkara1} alt="Puuta Jakkara" />
                    </div>
                </div>
                <div class='middleSection'>
                    <div class='infoCircleContainer'>
                        <div class='infoCircle'>
                            <div class="image-container">
                                <img src={finland} alt="Finland" />
                            </div>
                            <p>Kotimainen<br />männyn<br />sydänpuu</p>
                        </div>
                        <div class='infoCircle'>
                            <div class="image-container">
                                <img src={star} alt="Star" />
                            </div>
                            <p>Kestävä<br />muotoilu</p>
                        </div>
                        <div class='infoCircle'>
                            <div class="image-container">
                                <img src={pinecone} alt="Pinecone" />
                            </div>
                            <p>Luonnonvoimaa<br />modernilla<br />otteella
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottomSection'>
                <div className='aboutUs'>
                    <h3>Meidän tarina</h3>
                    <p>
                        {aboutUsText}
                    </p>
                </div>
                <div className='contactUs'>
                    <h3>OTA YHTEYTTÄ</h3>
                    <p>
                        sannarytkonen3@gmail.com
                    </p>
                    <p>
                        janna.rissanen@gmail.com
                    </p>
                    <SocialLinks />
                </div>
            </div>
        </div>
    );
}

export default FrontPage;