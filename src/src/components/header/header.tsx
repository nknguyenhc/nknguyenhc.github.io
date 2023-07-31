import headerItems from './header-items';
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
    return (
        <header>
            {headerItems.map((item, i) => (
                item.url 
                ? <Link to={item.url}>
                    <div className="header-item" key={i}>{item.text}</div>
                </Link>
                : <div className="header-item" key={i}>{item.text}</div>
            ))}
        </header>
    );
}