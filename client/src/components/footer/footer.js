const Footer = () => {
    const current_year = new Date().getFullYear()

    return(
        <footer className="footer__container">
            <div className="footer__container--content">
                <span>Web Scraper &copy; {current_year}</span>
            </div>
        </footer>
    )
}

export default Footer