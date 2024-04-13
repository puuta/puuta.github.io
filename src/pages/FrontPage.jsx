import React from 'react'

const FrontPage = () => {
    const heroTitle = `Innovaatio sydämmessä`
    const heroText = `Puuta hyödyntää kotimaista männyn sydänpuuta kaluste- ja tuotemuotoilussa.
                    Puuta on paikka, missä luovuus sekä teknologia kohtaavat kestävässä muotoilussa.
                    Yrityksen tavoitteena on ollut kehittää uusia, innovatiivisia tuotteita ja ratkaisuja,
                    jotka hyödyntävät sydänpuun ainutlaatuisia ominaisuuksia monipuolisesti.
                    Sydänpuu jakkara on vain alkusoitto sille, mitä Puuta voi tulevaisuudessa tarjota
                    kestävän kehityksen kentällä.Puuta haluaa olla eturintamassa rakentamassa
                    kestävämpää ja kauniimpaa tulevaisuutta yhdessä muiden vastuullisten toimijoiden kanssa`;
        return(
            <div className='firstPageContent'>
                <div className='header'></div>
                <div className='heroSection'>
                    <h1>{heroTitle}</h1>
                    <p>{heroText}</p>
                </div>
                <div className='bottomSection'>
                    <h1>{heroTitle}</h1>
                    <p>{heroText}</p>
                </div>
            </div>
        );
}

export default FrontPage;