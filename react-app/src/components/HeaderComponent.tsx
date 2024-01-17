import {ILink} from '../interfaces/types';

export default function HeaderComponent() {
    
    var linkClasses: string = 'link link-hover';
    var links: { [id: string] : ILink; } = {
        'l1': { text: 'Random text for now', classes: 'pointer-events-none', href: '/#' },
        'l2': { text: 'Data', classes: linkClasses, href: '/#' },
        'l3': { text: 'Events & News', classes: linkClasses, href: '/#' },
        'l4': { text: 'Contact', classes: linkClasses, href: '/#' },
        'l5': { text: 'About', classes: linkClasses, href: '/#' },
    };

    var buttonClasses: string = 'btn bg-fuchsia-950 text-white hover:bg-fuchsia-800 active:bg-fuchsia-900 focus:outline-none focus:ring focus:ring-fuchsia-300';
    var buttons: { [id: string] : ILink; } = {
        'b1': { text: 'Sign In', classes: buttonClasses, href: '/#' },
    };

    return (
        // use bg-zinc-200 instead? similar to daisyUI light-theme footer
        <div className="navbar h-[8rem] bg-base-100">
            <div className="navbar-start">
                <a href="/">
                    <img className="w-[340px] h-[82px]" src="/images/SciLifeLab logo/Green_NEG/Digital/SciLifeLab_Logotype_Green_NEG.png" alt="SciLifeLab Logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {Object.keys(links).map( key => (
                    <li>{<a className={links[key].classes} href={links[key].href}>{links[key].text}</a>}</li>
                ))}
                </ul>
            </div>
            {Object.keys(buttons).map( key => (
                <div className="navbar-end">
                    {<a className={buttons[key].classes} href={buttons[key].href}>{buttons[key].text}</a>}
                </div>
            ))}
        </div>
    )
  }
  