import LinkItemType from "../types/LinkItemType";

const LinkItem = ({ link, name }: LinkItemType) => {
    return (
        <a className="link-item" href={ link }>{ name }</a>
    );
};

export default LinkItem;
