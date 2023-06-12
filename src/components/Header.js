import avatar from './../images/avatar.png';

const Header = () => {
  return (
    <header className='App-header'>
    <h1>Nilambar Sharma</h1>
    <p>Since 1985</p>
    <img src={avatar} className="App-avatar" alt="avatar" />
    </header>
  );
}

export default Header;
