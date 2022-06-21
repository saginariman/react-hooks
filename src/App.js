import React, { useState } from 'react'
import Hover from './components/Hover';
import Form from './components/Form';
import List from './components/List';
import useDebounce from './hooks/useDebounce';
import SearchLive from './components/SearchLive';
import axios from "axios";
import useRequest from './hooks/useRequest';
import Todos from './components/Todos';

function App() {

  return (
    <div>
      <Todos/>
      <SearchLive/>
      <Form/>
      <Hover/>
      <List/>
    </div>
  );
}

export default App;
