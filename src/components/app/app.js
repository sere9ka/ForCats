import React from 'react';
import { Main } from '../main-component/main';
import { Header } from '../header-component/header';
import { Cards } from '../cards-component/cards';

const App = () => {
  return (
   <Main>
      <Header>Ты сегодня покормил кота?</Header>
      <Cards />
   </Main>
  );
}
export default App;