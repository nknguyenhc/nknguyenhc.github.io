import headerItems from './header-items';

export default function Header(): JSX.Element {
    return (
        <header>
            {headerItems.map((item, i) => (
                item.url 
                ? <a href={item.url} key={i}>{item.text}</a>
                : <div key={i}>{item.text}</div>
            ))}
        </header>
    );
}