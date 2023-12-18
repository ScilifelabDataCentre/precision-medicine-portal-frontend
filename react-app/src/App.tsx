import React from 'react';
import FooterComponent from './components/FooterComponent';

export default function App() {
  let body = (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
  )
  return (
    <html data-theme="light" className="min-h-screen bg-white">
      {body}
      {FooterComponent()}
    </html>
  );
}