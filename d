[1mdiff --git a/pmp-frontend-app/src/components/HeaderComponent.tsx b/pmp-frontend-app/src/components/HeaderComponent.tsx[m
[1mindex 84a5412..83b940d 100644[m
[1m--- a/pmp-frontend-app/src/components/HeaderComponent.tsx[m
[1m+++ b/pmp-frontend-app/src/components/HeaderComponent.tsx[m
[36m@@ -6,10 +6,10 @@[m [mimport sciLifeLogo from '../assets/SciLifeLab logo/NEG/Digital/SciLifeLab_Logoty[m
 export default function HeaderComponent() {[m
     [m
     let links: { [id: string] : ILink; } = {[m
[31m-        'l1': { text: 'Data', classes: LINK_CLASSES, link: 'data' },[m
[31m-        'l2': { text: 'Events & News', classes: LINK_CLASSES, link: 'eventsandnews' },[m
[32m+[m[32m        'l1': { text: 'Data Sources', classes: LINK_CLASSES, link: 'data' },[m
[32m+[m[32m        'l2': { text: 'Events & Training', classes: LINK_CLASSES, link: 'eventsandnews' },[m
         'l3': { text: 'Contact', classes: LINK_CLASSES, link: 'contact' },[m
[31m-        'l4': { text: 'About', classes: LINK_CLASSES, link: 'about' },[m
[32m+[m[32m        'l4': { text: 'About Us', classes: LINK_CLASSES, link: 'about' },[m
     };[m
 [m
     let buttons: { [id: string] : ILink; } = {[m
[36m@@ -26,7 +26,6 @@[m [mexport default function HeaderComponent() {[m
             </div>[m
             <div className="navbar-center lg:flex">[m
                 <ul className="menu menu-horizontal">[m
[31m-                    <li><p className="pointer-events-none">Random text for now</p></li>[m
                 {Object.keys(links).map( key => ([m
                     <li>{<NavLink className={links[key].classes} to={links[key].link}>{links[key].text}</NavLink>}</li>[m
                 ))}[m
