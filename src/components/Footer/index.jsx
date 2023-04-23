import "./Foteer.css";

const Footer = ()=>{
    return (
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            <a href="https://www.github.com/AlexGeovanni" className="git" target="_blank" rel="noreferrer" >
                <img src="/img/github-mark-white.png" alt="" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por  Alex Geovanni || Alura</strong>
    </footer>
    )
}

export default Footer;