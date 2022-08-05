import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ResetButton, SearchBar, SearchButton, SearchEngine } from '../src/.'

enum Colors {
  Red,
  Green,
  Blue
}

const App = () => {
  return (
    <SearchEngine>
      
      <SearchBar 
        name="name" 
        label="Full Name" 
        type="text" 
        placeholder="Type your name..." 
      />

      <SearchBar 
        name="id" 
        label="Identity Card" 
        type="number"
        placeholder="Type your ID..."
        max={10}
        min={0} 
        step={5}
      />

      <SearchBar
        name="colors"
        label="Select a color"
        type="select"
        value={Colors.Green}
        options={Colors}
      />

      <SearchBar
        type='checkbox'
        name='checkbox'
        label='Checkbox'
      />

      <ResetButton />
      <SearchButton />

    </SearchEngine>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

