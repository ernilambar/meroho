import avatar from './../images/avatar.png';

const Header = () => {
  return (
    <header className='App-header'>
      <img src={avatar} className="App-avatar" alt="avatar" />
      <h1>Nilambar Sharma</h1>
      <p>Since 1985</p>
    </header>
  );
}

export default Header;
