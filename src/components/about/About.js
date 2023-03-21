import './About.css'
import paintingHand from '../../assets/painting_hand.jpg'

const About = () => {
  return ( 
    <div className="about-section">About Content
      <img src={ paintingHand } width="400px" alt="Close-up image of a hand painting a flower" />
      <p className="about-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    
   );
}
 
export default About;