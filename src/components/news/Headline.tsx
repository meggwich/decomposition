import HeadlineType from "../../types/HeadlineType";

const Headline = ({ iconLink, title, link }: HeadlineType) => {
    return (
        <div className="headline-box">
            <img className="headline-icon" src={ iconLink }/>
            <a className="plot-header" href={ link }>{ title }</a>
        </div>
    );
};

export default Headline;