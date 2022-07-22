import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SearchEngine } from '../src/SearchEngine';
import { SearchBar } from '../src/SearchBar';
import { SearchButton } from '../src/SearchButton';
import { ResetButton } from '../src/ResetButton';

const App = () => {
  return (
    <SearchEngine>
      
      <SearchBar 
        id="name" 
        label="Full Name" 
        inputType="text" 
        placeholder="Type your name..." 
      />
      <SearchBar
        id="colors"
        label="Select a color"
        inputType="select"
        value='Red'
        options={{
          red: 'Red',
          green: 'Green',
          blue: 'Blue',
        }}
      />

      <ResetButton />
      <SearchButton />

    </SearchEngine>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

