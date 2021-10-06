import * as React from 'react';
import './Header.scss';

interface INavLink {
    href: string;
    name: string;
    isActive: boolean;
}

export const Header: React.FunctionComponent = () => {

    const [navLinks, setNavLinks] = React.useState<INavLink[]>([]);

    const onHeaderLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        for (let navLink of navLinks) {

            const hrefAttribute = e.currentTarget.attributes.getNamedItem('href');

            navLink.isActive = hrefAttribute != null && hrefAttribute.nodeValue === navLink.href;
        }

        setNavLinks(navLinks);
    }

    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="header-componnent">
        <a className="navbar-brand" href="/">React Typescript - Starter</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {
                    navLinks.map(w => (
                        <li className={`nav-item${(w.isActive ? ' active' : '')}`} key={w.name}>
                            <a className="nav-link" href={w.href} onClick={onHeaderLinkClick}>{w.name}</a>
                        </li>))
                }
            </ul>
        </div>
    </nav>
}