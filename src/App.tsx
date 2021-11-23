import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <div className="flex flex-col object-contain w-full h-screen text-center bg-broccoli-pattern">
      <Header title={"Broccoli & Co."} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
