import './About.css'
import paintingHand from '../../assets/painting_hand.jpg'

const About = () => {
  return ( 
    <div className="about">About Content
      <img src={ paintingHand } width="400px" alt="Close-up image of a hand painting a flower" />
    </div>
    
   );
}
 
export default About;