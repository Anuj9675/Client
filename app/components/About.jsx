import styles, { layout } from "../style";
import { Billing} from "../components";


const About = () => (
  <section id="Scrims" className={layout.sectionReverse}>
    
      <div className={styles.flexCenter}>
        <div className={`${styles.boxWidth}`}>

          <Billing />
          
        </div>
      </div>
      
  </section>
);

export default About;
