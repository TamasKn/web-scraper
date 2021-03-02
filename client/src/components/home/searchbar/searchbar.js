const Searchbar = ({onInputChange, onSubmit}) => (
    <div className="searchbar__container">
        <input
            className="searchbar__inputfield"
            type="text" placeholder="URL"
            onChange={onInputChange}
        />
        <div
            className="button-cta"
            onClick={onSubmit}
        >Scraping</div>
    </div>
)

export default Searchbar
