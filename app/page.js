import styles from "./style";
import { Billing, Footer, Navbar, Hero, Register, Members  } from "./components";
import ScrollUpButton from "./components/ScrollUpButton";


export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter} ${styles.paddingY}`}>
        <Navbar />
      </div>
  
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}` }>
        <div className={`${styles.boxWidth}`}>
          <Billing />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}` }>
        <div className={`${styles.boxWidth}`}>
          <Members/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Register />
          <Footer />
          <ScrollUpButton />
        </div>
      </div>
    </div>
  );
}

