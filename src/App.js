import './App.css';
import React, { useContext } from 'react';
import {
  Header,
  Main,
  Wrapper,
  Footer,
  LoadingSpinner,
  Modal,
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
    </Wrapper>
  );
};

export default App;
