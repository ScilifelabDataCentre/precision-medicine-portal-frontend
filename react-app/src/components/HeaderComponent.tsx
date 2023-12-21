import {ILink} from '../interfaces/types';

export default function HeaderComponent() {
    var links: { [id: string] : ILink; } = {
        'l1': { text: 'Random text for now', classes: 'pointer-events-none', href: '/#' },
        'l2': { text: 'Data', classes: 'link link-hover', href: '/#' },
        'l3': { text: 'Events & News', classes: 'link link-hover', href: '/#' },
        'l4': { text: 'Contact', classes: 'link link-hover', href: '/#' },
        'l5': { text: 'About', classes: 'link link-hover', href: '/#' },
    };

    var buttons: { [id: string] : ILink; } = {
        'b1': { text: 'Sign In', classes: 'btn bg-fuchsia-950 text-white', href: '/#' },
    };

    return (
        // use bg-zinc-200 instead? similar to daisyUI light-theme footer
        <div className="navbar h-[8rem] bg-black text-white">
            <div className="navbar-start">
                <a href="/">
                    <img className="w-[340px] h-[82px] border border-black" src="/images/scilifelogo.jpg" alt="SciLifeLab Logo" />
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
  