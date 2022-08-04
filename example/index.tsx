import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ResetButton, SearchBar, SearchButton, SearchEngine } from '../src/.'

enum Colors {
  red = 'Red',
  green = 'Green',
  blue = 'Blue'
}

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
        id="id" 
        label="Identity Card" 
        inputType="number"
        placeholder="Type your ID..."
        max={10}
        min={0} 
      />

      <SearchBar
        id="colors"
        label="Select a color"
        inputType="select"
        value={Colors.green}
        options={Colors}
      />

      <SearchBar
        inputType='checkbox'
        id='checkbox'
        label='Checkbox'
      />

      <input type='tel' value={'adasd'}/>
      <input type='tel' value={'adasd'}/>
      <input type='tel' value={'adasd'}/>
      <input type='tel' value={'adasd'}/>

      <SearchBar 
        inputType='time'
        id='date'
        max={'06:20'}
        value={'06:20'}
        label='Date List'
      />

      <ResetButton />
      <SearchButton />

    </SearchEngine>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

