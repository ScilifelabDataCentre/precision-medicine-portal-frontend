import { ReactElement } from 'react';
import {
    BODY_CLASSES,
    H_1,
} from '../constants';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ILink, } from '../interfaces/types';
import { TrackPageViewIfEnabled } from '../util/cookiesHandling';

export default function AboutPage(): ReactElement {
    TrackPageViewIfEnabled();

    var pageTitle: string = "About Us";
    
    var breadcrumbs: { [id: string] : ILink; } = {
        'l1': { text: 'Home', classes: '', link: '/' },
        'l2': { text: 'About', classes: '', link: '' },
    };
    
    return (
        <>
            <div className={BODY_CLASSES}>
                <div className="text-sm breadcrumbs">
                <ul>
                {Object.keys(breadcrumbs).map( key => (
                    <li>{breadcrumbs[key].link ? <Link to={breadcrumbs[key].link}>{breadcrumbs[key].text}</Link> : <>{breadcrumbs[key].text}</>}</li>
                ))}
                </ul>
                </div>
                <div className={H_1}>{pageTitle}</div>
                <div role="tablist" className="tabs tabs-lifted pb-4">
                    <NavLink to='/about/product' role='tab' className={({ isActive }) => `tab ${ isActive ? 'tab-active text-info-content !bg-info' : 'bg-white shadow'}`}>Product</NavLink>
                    <NavLink to='/about/faq' role='tab' className={({ isActive }) => `tab ${ isActive ? 'tab-active text-info-content !bg-info' : 'bg-white shadow'}`}>FAQ</NavLink>
                    <NavLink to='/about/team' role='tab' className={({ isActive }) => `tab ${ isActive ? 'tab-active text-info-content !bg-info' : 'bg-white shadow'}`}>Team</NavLink>
                    <NavLink to='/about/partners' role='tab' className={({ isActive }) => `tab ${ isActive ? 'tab-active text-info-content !bg-info' : 'bg-white shadow'}`}>Partners</NavLink>
                </div>
                <Outlet />
            </div>
        </>
    );
}