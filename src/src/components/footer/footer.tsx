import { Link } from "react-router-dom";
import { footerColumns, socialLinks, contactLinks } from "./data";

export default function Footer(): JSX.Element {
    return <div className="footer">
        {footerColumns.map((column, columnIndex) => (
            <div className="footer-column" key={columnIndex}>
                {column.href
                ? <Link 
                    to={column.href} 
                    className="footer-column-header" 
                    onClick={() => window.scrollTo(0, 0)}
                >
                    {column.top}
                </Link>
                : <div className="footer-column-header">{column.top}</div>}
                <div className="footer-column-items">
                    {column.items.map((item, itemIndex) => (
                        item.newTab
                        ? <a
                            href={item.href} 
                            className="footer-column-item"
                            target="_blank"
                            rel="noreferrer"
                            key={itemIndex}
                        >
                            {item.text}
                        </a>
                        : <Link 
                            to={item.href} 
                            className="footer-column-item" 
                            key={itemIndex}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        ))}
        <div className="footer-column">
            <div className="footer-column-header">Socials</div>
            <div className="footer-column-items">
                {socialLinks.map((link, linkIndex) => (
                    <a href={link.href} className="footer-column-item" key={linkIndex}>
                        <div className="footer-column-item-icon">
                            <img src={link.image} alt={link.text} />
                        </div>
                        <div className="footer-column-item-text">{link.text}</div>
                    </a>
                ))}
            </div>
        </div>
        <div className="footer-column">
            <div className="footer-column-header">Contacts</div>
            <div className="footer-column-items">
                {contactLinks.map((link, linkIndex) => (
                    <a href={link.href} className="footer-column-item" key={linkIndex}>
                        <div className="footer-column-item-icon">
                            <img src={link.image} alt={link.text} />
                        </div>
                        <div className="footer-column-item-text">{link.text}</div>
                    </a>
                ))}
            </div>
        </div>
    </div>;
}