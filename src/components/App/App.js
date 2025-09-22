import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';

function App() {
  const variantContext = React.createContext()


  return (
    <>
      <ToastPlayground />
      <Footer />
    </>
  );
}

export default App;
