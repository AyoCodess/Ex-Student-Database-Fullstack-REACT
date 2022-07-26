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
  ApiFailed,
} from './components';
import { DataContext } from './Context';

const App = () => {
  const { isLoading, isApiAlive } = useContext(DataContext);

  return (
    <Wrapper>
      {/* {!isLoading && isApiAlive && <ApiFailed />}
      {isLoading && !isApiAlive && <LoadingSpinner />}
      {!isLoading && !isApiAlive && (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )}
      <Modal />
      <Toast /> */}
    </Wrapper>
  );
};

export default App;
