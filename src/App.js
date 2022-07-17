import './App.css';
import React, { useContext } from 'react';
import {
  Header,
  Main,
  Wrapper,
  Footer,
  LoadingSpinner,
  Modal,
  Toast,
} from './components';
import { DataContext } from './Context';

const App = () => {
  const { isLoading } = useContext(DataContext);

  return (
    <Wrapper>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
      <Modal />
      <Toast />
    </Wrapper>
  );
};

export default App;
