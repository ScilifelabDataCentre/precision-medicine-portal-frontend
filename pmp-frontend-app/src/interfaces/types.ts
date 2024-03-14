export interface ILink {
    text: string;
    classes: string;
    link: string;
};

export interface ISVG {
    href: string;
    xmlns: string;
    width: string;
    height: string;
    viewBox: string;
    classes: string;
    svg: string;
};

export interface ICardConfig {
    cardClasses: string;
    titleClasses: string;
    subTitleClasses: string;
    textClasses: string;
    imgClasses: string;
    buttonClasses: string;
    buttonPlacement: string;
};

export interface ICardContent {
    title: string; 
    subTitle: string;
    text: string; 
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
};