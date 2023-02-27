import './Header.css'
import logo from '../../assets/logo.png'


const Header = () => {
  return ( 
    <div className='header'>
      <img src={ logo } width='100px' />
    </div>
   );
}
 
export default Header;