import headerItems from './header-items';

export default function Header(): JSX.Element {
    return (
        <header>
            {headerItems.map((item, i) => (
                item.url 
                ? <a className="header-item" href={item.url} key={i}>{item.text}</a>
                : <div className="header-item" key={i}>{item.text}</div>
            ))}
        </header>
    );
}