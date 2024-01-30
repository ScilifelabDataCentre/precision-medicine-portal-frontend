import { Link, NavLink } from 'react-router-dom';
import { ILink } from '../interfaces/types';
import { BUTTON_TYPE_ONE, LINK_CLASSES } from '../constants';

export default function HeaderComponent() {
    
    var links: { [id: string] : ILink; } = {
        'l1': { text: 'Random text for now', classes: 'pointer-events-none', link: '/#' },
        'l2': { text: 'Data', classes: LINK_CLASSES, link: 'data' },
        'l3': { text: 'Events & News', classes: LINK_CLASSES, link: 'eventsandnews' },
        'l4': { text: 'Contact', classes: LINK_CLASSES, link: 'contact' },
        'l5': { text: 'About', classes: LINK_CLASSES, link: 'about' },
    };

    var buttons: { [id: string] : ILink; } = {
        'b1': { text: 'Sign In', classes: BUTTON_TYPE_ONE, link: 'signin' },
    };

    return (
        // use bg-zinc-200 instead? similar to daisyUI light-theme footer
        <div className="navbar h-[8rem] bg-base-100">
            <div className="navbar-start">
                <Link to="/">
                    <img className="w-[340px] h-[82px]" src="/images/SciLifeLab logo/NEG/Digital/SciLifeLab_Logotype_NEG.png" alt="SciLifeLab Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {Object.keys(links).map( key => (
                    <li>{<NavLink className={links[key].classes} to={links[key].link}>{links[key].text}</NavLink>}</li>
                ))}
                </ul>
            </div>
            {Object.keys(buttons).map( key => (
                <div className="navbar-end">
                    {<Link className={buttons[key].classes} to={buttons[key].link}>{buttons[key].text}</Link>}
                </div>
            ))}
        </div>
    )
  }
  