import Container from 'react-bootstrap/Container';

function About() {
    return (
        <Container>
            <div className="bg-light p-5 rounded-lg m-3">
                <h1 className='display-4'>Ahoj, jsem Lenka</h1>
                <p className="lead">a nejsem vyučená cukrářka. Možná Vás může napadnout, jak jsem se k pečení vůbec dostala, když mé studijní i pracovní úspěchy jsou spíše na poli ekonomiky, ale kupodivu je odpověď na tuto otázku velice jednoduchá - pečení je to, co mě odjakživa naplňuje a plním si tím svůj velký sen. A vlastně nejen můj, ale také mé rodiny.</p>
                <p className="lead">Pamatuji si, že již jako malou mě a mé sestry babička vedla k pečení. Byla to právě babička, s okouzlujícím jménem Vojtěška, která nás k tvorbě cukrářských výrobků inspirovala. Byly to pro nás nezapomenutelné chvíle, strávené v rodinném kruhu. Babička dokázala z mála vždy vykouzlit něco úchvatného a já si řekla, že bych v tom ráda pokračovala, dělala radost ostatním a tím zachovala i její památku.</p>
                <p className='lead'>Cesta ke splnění našeho rodinného snu vždy nebyla jednoduchá. Obrovská podpora mého manžela Petra byla zkouškou našeho pevného vztahu. V našem rodinném domku v Dobré jsme si svépomoci vybudovali výrobnu, aby byla zachována čistota pečení, která je pro mě nesmírně důležitá. Postupně jsem začala tvořit výrobky svým známým a kamarádům, byly to menší zakázky ale vždy byly ohlasy na mou práci plné chvály a další zákazníci na sebe nenechali dlouho čekat.</p>
                <p className='lead'>Časem jsem absolvovala kurz výroby francouzských zákusků, které spoustu zákazníků již oslovilo. Neustále se snažím zdokonalovat v technikách tvoření, zdobení, temperování... Každá zakázka je pro mě výzvou.</p>
                <p className='lead'>Pečení mi není prací ale životní filozofií. Jsem perfekcionista a při výrobě si dávám záležet i na tom nejmenším detailu, vždy ke spokojenosti zákazníka.</p>
            </div>
        </Container>
    );
}

export default About;