import Header from './components/Header'
import Bio from './components/Bio';
import Social from './components/Social';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add( fab, fas );

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Social />
    </div>
  );
}

export default App;
