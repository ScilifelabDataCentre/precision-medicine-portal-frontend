import React from 'react';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ArticleComponent from './components/ArticleComponent';
import CardComponent from './components/CardComponent';

export default function App() {
  let body = (
      <h1 className="text-3xl text-black font-bold underline">
        Under Construction
      </h1>
  )
  
  var headerOne: string = "text-left text-black text-[40px] font-semibold";
  var whiteTextCardClasses: string = "w-[580px] h-20 bg-white text-black bg-opacity-95 shadow-xl border-2 border-zinc-300";
  var blackCardClasses: string = "w-[700px] h-[253px] bg-base-100 bg-opacity-95 rounded-[10px] shadow border-2"

  return (
    <div data-theme="dark" className="bg-white space-y-14">
      {HeaderComponent()}
      {body}
      <div className="grid grid-cols-2 gap4">
        <div className="flex flex-col space-y-1.5 ...">
          <h1 className={headerOne}>Latest News</h1>
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
        </div>
        <div className="flex flex-col space-y-1.5 ...">
          <h1 className={headerOne}>Upcoming Events</h1>
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
          <CardComponent classes={whiteTextCardClasses} title="" text="If a dog chews shoes whose shoes does he choose?" button="" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <CardComponent classes={blackCardClasses} title="Data Search" text="Some text; under development" button="Sign In" />
        <CardComponent classes={blackCardClasses} title="Data Search" text="Some text; under development" button="Sign In" />
      </div>
      {ArticleComponent()}
      {FooterComponent()}
    </div>
  );
}