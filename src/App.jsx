import React from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = () => (
  <div className="wrapper">
    <Title title="DAIRY APP" tagline="Comment with no sense"/>
    <ToDo title="Items" commentTitle="Comments"/>
  </div>
);

export default App;
