[33mcommit f2ebd550bab5c9e932c0969f2488d0743fe60b5c[m[33m ([m[1;36mHEAD -> [m[1;32mjan-pre-dev[m[33m, [m[1;31morigin/jan-pre-dev[m[33m)[m
Author: Jan Lorenz <jan.lorenz@scilifelab.se>
Date:   Fri Apr 12 13:36:37 2024 +0200

    Only the header text changed
    
    Signed-off-by: Jan Lorenz <jan.lorenz@scilifelab.se>

[33mcommit 3f2da9bead15c04f44260585fa3fc8a06a357124[m[33m ([m[1;33mtag: v0.3.2[m[33m, [m[1;31morigin/dev[m[33m, [m[1;31morigin/HEAD[m[33m, [m[1;32mdev[m[33m)[m
Merge: e576e13 f31cb5d
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 14:44:14 2024 +0100

    Merge pull request #34 from ScilifelabDataCentre/pre-dev
    
    Fixed public key in wrong place for recaptcha

[33mcommit f31cb5dd364938612c114dd4346a60e99143bd92[m[33m ([m[1;31morigin/pre-dev[m[33m, [m[1;32mpre-dev[m[33m)[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 14:39:09 2024 +0100

    Fixed public key in wrong place for recaptcha

[33mcommit e576e13d2dc3678180f022297b27d8a9c464ea48[m[33m ([m[1;33mtag: v0.3.1[m[33m)[m
Merge: 4aef118 baa7c7d
Author: Jan Lorenz <47724583+JanProgrammierung@users.noreply.github.com>
Date:   Tue Mar 19 13:59:30 2024 +0100

    Merge pull request #33 from ScilifelabDataCentre/pre-dev
    
    Bugfixing new Vite deployment

[33mcommit baa7c7d18fa183d7282e3bedcc4d3ac96ff20bec[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 13:49:52 2024 +0100

    Something went wrong with the kubernetes deployment after switching to Vite. Tried some solutions and seems to be working on a local k8s cluster currently. Trying to push again

[33mcommit 4aef1188e17e6d2eb8171380551a4feec9e3c6a3[m[33m ([m[1;33mtag: v0.3.0[m[33m)[m
Merge: 1ae131c bc9a3c9
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 12:32:29 2024 +0100

    Merge pull request #32 from ScilifelabDataCentre/pre-dev
    
    Types bugfix

[33mcommit bc9a3c93b1807d2a7ce257333726067a6881c0bb[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 12:29:22 2024 +0100

    Fixed bug introduced when changing custom types

[33mcommit 1ae131c0ea4dc69fcadd524aec697e2d333c45ea[m[33m ([m[1;33mtag: v0.2.2[m[33m)[m
Merge: 3280856 2397eb7
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 12:17:33 2024 +0100

    Merge pull request #31 from ScilifelabDataCentre/pre-dev
    
    Work on using form manager to send forms as emails

[33mcommit 2397eb7b07c593e10533149888a1bc4c64a698ae[m
Merge: 3280856 efa55b9
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 12:07:33 2024 +0100

    Merge branch 'form_manager' into pre-dev
    Changes made to contact form component and contact page implementing sending forms as emails using the DC form manager app.

[33mcommit efa55b9d8b7ddde60ad8b3db20ad8e135aef8fcb[m[33m ([m[1;31morigin/form_manager[m[33m)[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 19 12:07:01 2024 +0100

    Adding reCaptcha v2 functionality, unable to test locally because of how form manager works, so will have to push to the web page to see if it works.

[33mcommit 3280856ada62cafa7cec931cbe82ba0fb8b8518f[m
Merge: 8186a42 65bdb4a
Author: Jan Lorenz <47724583+JanProgrammierung@users.noreply.github.com>
Date:   Thu Mar 14 17:40:20 2024 +0100

    Merge pull request #30 from ScilifelabDataCentre/pre-dev
    
    Merged work from branches working on footer, team description cards, some other restructuring.

[33mcommit 65bdb4a1d532b5419a029a6555899f746b6a5eaa[m
Merge: 1f57bfc e17754f
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 14:42:38 2024 +0100

    Merge branch 'team_desc' into pre-dev
    Merged work on team cards.

[33mcommit e17754f37346a878942d66b300d46e57a229e9de[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 14:41:46 2024 +0100

    New pic for Sebbe, recropping of all pics to not be cut off

[33mcommit 1f57bfc65d4bb152d9c678cfb874b65f91ff5f3b[m
Merge: 942104f d38d6fa
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 14:09:44 2024 +0100

    Merge branch 'footer_links' into pre-dev
    Merged minor changes to footers.

[33mcommit d38d6fa3155f90f6808d6c03d3f70cfe16de120b[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 14:09:16 2024 +0100

    Changed visual design of github links below footer

[33mcommit 942104fdb3545cb18a46cb6c53bc44e4604cce17[m
Merge: c65aad9 6d657f3
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 14:07:01 2024 +0100

    Merge branch 'team_desc' into pre-dev
    Merged work on team cards in about page.

[33mcommit 6d657f3855b561f05bd966709ee5ecc0e7a99cce[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 14:04:34 2024 +0100

    Adjusted image sizes, changed JSX structure to grid and used automatic output of team members in grid

[33mcommit ec9b00e654d02135562c726195033295ddf2ca78[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 14 13:02:23 2024 +0100

    Added preliminary team pics to repo and content.ts

[33mcommit bcf2cc0e1ab0cd9830b44a90f6234240b5b97e9a[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 16:54:37 2024 +0100

    Added Seb and Natashia team pics to content.ts  and prepared content.ts for consumption of team images once we have all of them.

[33mcommit c65aad9d1e6f5e1f684937bf99beb1198e138d80[m
Merge: ec7d69d b8e7a72
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 15:36:00 2024 +0100

    Merge branch 'footer_links' into pre-dev
    Merging work done on footer to pre-dev.

[33mcommit b8e7a7286cf44ce61e9bcdddad97c6a59336e407[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 15:35:21 2024 +0100

    Added link to DC twitter, linked in, fixed a linked in SVG icon, removed some unused stuff from footer.

[33mcommit 628f69f7089617390aca5ceab3292e902a6cbb8d[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 15:18:51 2024 +0100

    Added links to frontend and backend in footer. Not sure about styling.

[33mcommit ec7d69d2d7d11de53a2a136ad7d301e141996d38[m
Merge: daa2dee 2e68e46
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 14:59:43 2024 +0100

    Merge branch 'content_setup' into pre-dev
    Merging to my working branch to continue working on other tasks while waiting for slightly blocked task.

[33mcommit 2e68e46a90b2b66787f8dbd63e95cdf7f88cdf6c[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 14:58:17 2024 +0100

    Fixed some of the previous pages to collect content in separate file and consume from there. Added team member descriptions to content to be consumed by the AboutPage later.

[33mcommit f4b0ce5c3c2dbdb34a2c62b4c211a4f3a7453f13[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 14:23:26 2024 +0100

    Restructured content to it's own file, can be imported as a JS object to the target page. Will work similarly once we start consuming content from backend.

[33mcommit daa2deec13edeb19875da0b54414b9b499c3a3f8[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 14:09:30 2024 +0100

    Fixing duplicate gitignore file and changing gitignore file for new vite project setup

[33mcommit 8186a4258a845c466274a90125517f3a2ab5d384[m
Merge: 127971c 59a24b3
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 13 09:18:54 2024 +0100

    Merge pull request #29 from ScilifelabDataCentre/vite_rebuild
    
    Recreated the project using Vite

[33mcommit 59a24b3b766faecbf95566905a731340c71308f0[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 12 14:57:44 2024 +0100

    Recreated the project using Vite, moved all the files, fixed configurations and Dockerfile settings. Works when running a test server and when using the docker image locally.

[33mcommit 127971c4c7b7968d79a476cceee8d78b87870a91[m
Merge: 6bab974 e35f478
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Mon Mar 11 09:02:51 2024 +0100

    Merge pull request #28 from ScilifelabDataCentre/sebbe-pre-dev_branch
    
    Sebbe pre dev branch

[33mcommit e35f478489476daa53c313cacaa262ba2a7009b7[m
Merge: e15ab0a 065d02a
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Fri Mar 8 09:01:47 2024 +0100

    Merge branch 'minor_fixes' into sebbe-pre-dev_branch
    Merging minor fixes in preparation for PR to dev. Mnior fixes contains various small bug fixes.

[33mcommit 065d02a0cd15623acaf9806dad68d3dd15b3091d[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 16:48:11 2024 +0100

    Removed another unused import that I previously missed.

[33mcommit 4a32488c140ff9848cf6ced33f3b229179b4254c[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 16:46:11 2024 +0100

    Made the two columns on home page 'justify-between' so that they change distance depending on window size and spread out more. Will look very weird on large monitors so we need to fix breakpoints later.

[33mcommit 8da93eb47c8a501b7c2f62b5197e8d00b8465f0c[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 16:40:06 2024 +0100

    Removed commented out code in App.tsx. Fixed issue where a non-link element was highlighted on home page.

[33mcommit fac1836b3bdd30ef0286c7709176e5418c5da5ad[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 16:32:59 2024 +0100

    Removed a bunch of unused imports

[33mcommit e15ab0a7360135a68bc285242e6f4c39c4fc48d6[m
Merge: a75edff 14be6e3
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 14:38:27 2024 +0100

    Merge branch 'contact_component_branch' into sebbe-pre-dev_branch
    Adding work done on Contact Form Component and Contact Page. Input, validation and responsiveness working as intended, but not actually connectedto an email server yet so not used on the actual page.

[33mcommit 14be6e3d49c9f6076d8a4a51b2ca89bcaead0429[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 14:37:29 2024 +0100

    Mostly finished contact form with validation (some minor details might need adjusting. Currently used on the page since it is not connected to an email server yet, so we don't want people to think that it's working

[33mcommit ad7bb12b4ab1b6e976a9b2717edc7d8fc74297a0[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Mar 7 11:30:18 2024 +0100

    Basic functionality in place. Will start working on the visual layout

[33mcommit 4d8c59b261bf008845cfae3c9fba05d04581dd92[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Wed Mar 6 17:35:26 2024 +0100

    Got the basic functionality in, it now tells you if your input is wrong while you write and the onSubmit function correctly notices if there are errors.

[33mcommit 1b1962070c9da8af9cfed82f81571f65814e569c[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Mar 5 15:48:38 2024 +0100

    Some initial work on creating a form for contacting us. Almost works, but having problems with updating app state.

[33mcommit a75edff26815a85d79ab1ad36a4534bf794ab3d3[m
Merge: 6bab974 bbfaafc
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Fri Feb 16 16:55:06 2024 +0100

    Merge branch 'matomo_branch' into sebbe-pre-dev_branch
    Merging work from Matomo branch. Now the tracking cookie and UI text changes between opting in/opting out on click, so the user can choose
    to opt out and opt in to tracking again if they wish.

[33mcommit bbfaafca82b4abcf702589c31e2b2b55b40c5f3f[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Fri Feb 16 16:54:39 2024 +0100

    Added possibility to opt in, as well as text indicating if you're opting in or out

[33mcommit 6bab9748711d207666dd9dd244e27cd4cb845478[m[33m ([m[1;33mtag: v0.2.1[m[33m)[m
Merge: eec29ac e9d5868
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Fri Feb 16 11:50:56 2024 +0100

    Merge pull request #27 from ScilifelabDataCentre/sebbe-pre-dev_branch
    
    js-cookie package was installed in the wrong dir, fixed now

[33mcommit e9d58687443ab4eb2deae4661f8882c149e8ef94[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Fri Feb 16 11:35:10 2024 +0100

    js-cookie package was installed in the wrong dir, fixed now

[33mcommit eec29acff3c5c49425a785ed67770cb37cdfe75f[m[33m ([m[1;33mtag: v0.2.0[m[33m)[m
Merge: c79c41a 361bba2
Author: Jan Lorenz <47724583+JanProgrammierung@users.noreply.github.com>
Date:   Thu Feb 15 18:47:42 2024 +0100

    Merge pull request #26 from ScilifelabDataCentre/sebbe-pre-dev_branch
    
    Cookies for handling tracking in Matomo, some organizing of code

[33mcommit 361bba2a6c3f80c63264f2023c55cb3a372cbcda[m
Merge: 7f13d3a 555f3c3
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Feb 15 16:11:43 2024 +0100

    Merge branch 'matomo_branch' into sebbe-pre-dev_branch
    Merging work on Matomo branch, where I have introduced cookies as well as tried to organize the matomo code better. Unsure of the whole
    Matomo part still and not sure how to test it without running in production, so we'll see if it works.
    
    Cookies has been tested and seems to be working correctly, should write actual tests for them though.

[33mcommit 555f3c3887992f499f8a2852eaf4574a2c1952dd[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Feb 15 16:10:51 2024 +0100

    Tried to collect the code for the tracking react event to one file, as well as doing some checks to see if the cookie exists before doing anything. Due to the way cookies are set had to do a workaround when creating the matomo instance in index.tsx. The cookie part of the code seems to be working, but can't be sure about the Matomo part yet.

[33mcommit 5f0090cd931a42383903d8a31caa7ef95fd8e0db[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Feb 15 13:37:36 2024 +0100

    Tracking cookie expires after 365 days (GDPR sets 12 month limit on cookies)

[33mcommit 274fa98fb17c1736a0ff10a2107426a741dd98b3[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Feb 15 12:26:51 2024 +0100

    Clicking on opt out on privacy page now sets trackingEnabled to False

[33mcommit f34024286fcb78ec62b90f58e8adcab628b4d3da[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Thu Feb 15 11:56:28 2024 +0100

    Initial setup of cookies package and setting basic cookie in App.tsx

[33mcommit 7f13d3ae39ea15074e5cb02013fc04fc1ee66c64[m
Merge: c79c41a ac95547
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Feb 13 13:32:47 2024 +0100

    Merge branch 'code_organizing_branch' into sebbe-pre-dev_branch
    Changing 'var' to 'let' because it's scoped.

[33mcommit ac9554796f9bef0dc4d5452c56d4d2efe82073e9[m
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Tue Feb 13 13:30:18 2024 +0100

    Changing 'var' variable declaration to 'let', which is scoped. Not of huge importance but might help in the future to keep track of code and bug hunting.

[33mcommit c79c41acaecd6d84393d20a153ed3dfb29b073c5[m[33m ([m[1;33mtag: v0.1.1[m[33m)[m
Merge: d983348 c313f37
Author: Sebastian <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Mon Feb 12 15:42:40 2024 +0100

    Merge pull request #25 from ScilifelabDataCentre/sebbe-pre-dev_branch
    
    Fixed Routing issue, making it possible to load page routes directly without going through the index page

[33mcommit c313f37dfa7a9446951e2c950cb15d7071d8cf30[m
Merge: 6c4b851 4519175
Author: SevLG <sebastian.gunnari.lindbom@scilifelab.se>
Date:   Mon Feb 12 15:02:04 2024 +0100

    Merge branch 'dockerfile_branch' into sebbe-pre-dev_branch
    Editing config in Dockerfile to fix an issue with React routing. When the React app
    is built and run on the nginx image, by default only the index page (or "/" path) is
    actually stored on the server. The other routed paths are handled by the client. As a result
    you can visit the page and visit different paths while in the app, but if you try to request
    the adress of a path other than the index, you'll be met by 404. This change sends all requests
    back to index, so if you visit address.com/about the server will send you back the index page + "/about"
    as expected.
