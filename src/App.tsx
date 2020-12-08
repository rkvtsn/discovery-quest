import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Theme from './themes/main';

function App() {
  return (
    <Theme>
      <div className="AppWrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </Theme>
  );
}

export default App;
