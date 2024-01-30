import { ReactElement } from 'react';
import {ILink, ISVG} from '../interfaces/types';
import { Link } from 'react-router-dom';

export default function FooterComponent(): ReactElement {

  var footerClasses: string = 'footer p-10 bg-base-100 text-base-content';
  
  var linkClasses: string = 'link link-hover';
  var linksCol1: { [id: string] : ILink; } = {
      'l1': { text: 'Anonymization Tool', classes: linkClasses, link: '/' },
      'l2': { text: 'Data Search', classes: linkClasses, link: '/' },
      'l3': { text: 'Data Types', classes: linkClasses, link: '/' },
      'l4': { text: 'Events & News', classes: linkClasses, link: '/' },
  };

  var linksCol2: { [id: string] : ILink; } = {
      'l1': { text: 'About us', classes: linkClasses, link: '/' },
      'l2': { text: 'Contact', classes: linkClasses, link: '/' },
      'l3': { text: 'Open Source Contribution', classes: linkClasses, link: '/' },
      'l4': { text: 'Privacy Policy', classes: linkClasses, link: '/privacy' },
  };

  var svgConfig: string[] = ['/', 'http://www.w3.org/2000/svg', '24', '24', '0 0 24 24', 'fill-current']
  var svgs: { [id: string] : ISVG; } = {
      'svgX': {href: svgConfig[0], xmlns: svgConfig[1], width: svgConfig[2], height: svgConfig[3], viewBox: svgConfig[4], classes: svgConfig[5], svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'},
      'svgYT': {href: svgConfig[0], xmlns: svgConfig[1], width: svgConfig[2], height: svgConfig[3], viewBox: svgConfig[4], classes: svgConfig[5], svg: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'},
      'svgFB': {href: svgConfig[0], xmlns: svgConfig[1], width: svgConfig[2], height: svgConfig[3], viewBox: svgConfig[4], classes: svgConfig[5], svg: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'},
  };


  return (
    <footer className={footerClasses}>
      <nav>
      {Object.keys(linksCol1).map( key => (
          <Link className={linksCol1[key].classes} to={linksCol1[key].link}>{linksCol1[key].text}</Link>
      ))}
      </nav> 
      <nav>
      {Object.keys(linksCol2).map( key => (
          <Link className={linksCol2[key].classes} to={linksCol2[key].link}>{linksCol2[key].text}</Link>
      ))}
      </nav> 
      <nav>
        <header className="footer-title">Social</header> 
        <div className="grid grid-flow-col gap-4">
          {Object.keys(svgs).map( key => (
            <a href={svgs[key].href}><svg xmlns={svgs[key].xmlns} width={svgs[key].width} height={svgs[key].height} viewBox={svgs[key].viewBox} className={svgs[key].classes}><path d={svgs[key].svg}></path></svg></a>
          ))}
        </div>
      </nav>
    </footer>
  )
}
