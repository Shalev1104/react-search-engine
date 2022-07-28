import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ResetButton, SearchBar, SearchButton, SearchEngine } from '../src/.'

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
        value={1}
        options={{
          red: 1,
          green: 2,
          blue: 3,
        }}
      />

      <ResetButton />
      <SearchButton />

    </SearchEngine>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

