import React from 'react';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ArticleComponent from './components/ArticleComponent';

export default function App() {
  let body = (
      <h1 className="text-3xl font-bold underline">
        Under Construction
      </h1>
  )
  return (
    <html data-theme="light" className="min-h-screen bg-white">
      {HeaderComponent()}
      {body}
      {ArticleComponent()}
      {FooterComponent()}
    </html>
  );
}