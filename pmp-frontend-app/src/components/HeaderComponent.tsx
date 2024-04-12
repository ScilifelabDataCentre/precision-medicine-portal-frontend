import { Link, NavLink } from 'react-router-dom';
import { ILink } from '../interfaces/types';
import { BUTTON_TYPE_ONE, LINK_CLASSES } from '../constants';
import sciLifeLogo from '../assets/SciLifeLab logo/NEG/Digital/SciLifeLab_Logotype_NEG.png';

export default function HeaderComponent() {
    
    let links: { [id: string] : ILink; } = {
        'l1': { text: 'Data Sources', classes: LINK_CLASSES, link: 'datasources' },
        'l2': { text: 'Events & Trainings', classes: LINK_CLASSES, link: 'eventsandtrainings' },
        'l3': { text: 'Contact', classes: LINK_CLASSES, link: 'contact' },
        'l4': { text: 'About Us', classes: LINK_CLASSES, link: 'about' },
    };
    
    {/*
            // This is the signin button. We  can add this again once we have a user page, login, registration and features for users.
    let buttons: { [id: string] : ILink; } = {
        'b1': { text: 'Sign In', classes: BUTTON_TYPE_ONE, link: 'signin' },
    };
    */}

    return (
        // use bg-zinc-200 instead? similar to daisyUI light-theme footer
        <div className="navbar bg-gradient-to-b from-neutral-500 to-teal-800 px-8">
            <div className="navbar-start">
                <Link to="/">
                    <img className="h-auto w-80" src={sciLifeLogo} alt="SciLifeLab Logo" />
                </Link>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal">
                {Object.keys(links).map( key => (
                    <li>{<NavLink className={links[key].classes} to={links[key].link}>{links[key].text}</NavLink>}</li>
                ))}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
            {/*
            // This is the signin button. We  can add this again once we have a user page, login, registration and features for users.
            {Object.keys(buttons).map( key => (
                <div className="navbar-end">
                    {<Link className={buttons[key].classes} to={buttons[key].link}>{buttons[key].text}</Link>}
                </div>
            ))} */}
        </div>
    )
  }
  