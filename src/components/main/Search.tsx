const Search = () => {
    return (
        <div className="search-box">
            <form className="form-box" action="onSubmit">
                <input type="text" />
                <button>Найти</button>
            </form>
            <p>Найдется всё. Например, <em>фаза луны сегодня</em></p>
        </div>
    );
}

export default Search;