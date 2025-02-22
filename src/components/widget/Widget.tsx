import LinkItem from "../LinkItem";

type WidgetType = {
    link: string,
    name: string,
    text: string,
    children?: React.ReactNode
}

const Widget = ({ children, link, name, text }: WidgetType) => {
    return (
        <div className="widget">
            { children }
            <LinkItem link={link} name={name} />
            <p>{ text }</p>
        </div>
    );
}

export default Widget;