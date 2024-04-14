import woodprint from '../assets/images/woodprint.png'
import jannasanna from '../assets/images/jannasanna.png'

const AboutPage = () => {
    return (
        <div className='aboutContainer'>
            <div className="jannasanna">
                <div className='image-container'>
                    <img src={jannasanna} alt="Foreground" className="foreground-image" />
                </div>
                <div className='textArea'>
                    <h1>
                        Kaiken alku  <br /> ja juuri
                    </h1>
                    <p>
                        Elokuussa 2020 muotoilun opintojen ensimmäisellä tunnilla satuimme istumaan vierekkäin muotoilupiirtämisen
                        tunnille. Kaikki oli uutta, eikä tunnettu ketään. Muotoilun lehtori kysyi keitä olimme,
                        mistä tulemme ja mihin olemme menossa. <br /><br />Meidä molempien vastauksen loppu oli sama:<br/> "Vähän tuo puu kyllä kiinnostaa..."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;