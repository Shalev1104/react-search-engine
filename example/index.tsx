import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ResetButton, SearchBar, SearchButton, SearchEngine } from '../src/.'

enum Colors {
  Red = "Red",
  Green = "Green",
  Blue = "Blue"
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
        type='checkbox'
        name='checkbox'
        label='Checkbox'
        width={200}
        />
      
      <SearchBar
        name="colors1"
        label="Select a color"
        type="select"
        value={[Colors.Green]}
        options={Colors}
        multiple
      />
      <SearchBar
        name="colors2"
        label="Select a color"
        type="select"
        value={[Colors.Green]}
        options={Colors}
      />

      <ResetButton />
      <SearchButton />

    </SearchEngine>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

