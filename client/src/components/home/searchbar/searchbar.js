const Searchbar = ({onInputChange, onSubmit}) => {
    return(
        <div className="searchbar__container">
            <input
                className="searchbar__inputfield"
                type="text" placeholder="URL"
                onChange={onInputChange}
            />
            <div
                className="searchbar__btn"
                onClick={onSubmit}
            >Scraping</div>
        </div>
    )
}

export default Searchbar