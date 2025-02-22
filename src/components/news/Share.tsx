import ShareType from "../../types/ShareType";

const Share = ({ currency, quote, change}: ShareType) => {
    return (
        <p>
            <b>{ currency } { quote } {' '}</b>
            { change }
        </p>
    );
};

export default Share;