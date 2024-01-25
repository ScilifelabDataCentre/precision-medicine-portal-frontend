import { Link, NavLink } from 'react-router-dom';
import { ILink } from '../interfaces/types';

export default function HeaderComponent() {
    
    var linkClasses: string = 'link link-hover';
    var links: { [id: string] : ILink; } = {
        'l1': { text: 'Random text for now', classes: 'pointer-events-none', link: '/#' },
        'l2': { text: 'Data', classes: linkClasses, link: 'data' },
        'l3': { text: 'Events & News', classes: linkClasses, link: 'eventsandnews' },
        'l4': { text: 'Contact', classes: linkClasses, link: 'contact' },
        'l5': { text: 'About', classes: linkClasses, link: 'about' },
    };

    var buttonClasses: string = 'btn bg-fuchsia-950 text-white hover:bg-fuchsia-800 active:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300';
    var buttons: { [id: string] : ILink; } = {
        'b1': { text: 'Sign In', classes: buttonClasses, link: 'signin' },
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
  