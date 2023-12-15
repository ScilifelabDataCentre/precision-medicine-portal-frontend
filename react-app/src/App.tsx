import React from 'react';
import CustomFooter from './CustomFooter';

export default function App() {
  let body = (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
  )
  return (
    <html data-theme="light" className="min-h-screen bg-white">
      {body}
      {CustomFooter()}
    </html>
  );
}