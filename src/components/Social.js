import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = () => {
  return (
    <div className='App-social'>
      <ul>
        <li><a href="https://www.nilambar.net/" target='_blank' without rel="noreferrer"><FontAwesomeIcon icon="fa-globe" style={ { color: '#fff' } } /></a></li>
        <li><a href="https://twitter.com/nilambar" target='_blank' without rel="noreferrer"><FontAwesomeIcon icon="fab fa-twitter" style={ { color: '#fff' } } /></a></li>
        <li><a href="https://www.facebook.com/nilambar.sharma" target='_blank' without rel="noreferrer"><FontAwesomeIcon icon="fab fa-facebook" style={ { color: '#fff' } } /></a></li>
        <li><a href="https://www.linkedin.com/in/nilambar/" target='_blank' without rel="noreferrer"><FontAwesomeIcon icon="fab fa-linkedin" style={ { color: '#fff' } } /></a></li>
        <li><a href="https://www.instagram.com/ernilambar/" target='_blank' without rel="noreferrer"><FontAwesomeIcon icon="fab fa-instagram" style={ { color: '#fff' } } /></a></li>
      </ul>
    </div>
  );
}

export default Social;
