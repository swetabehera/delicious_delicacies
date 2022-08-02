import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg2.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Delicious DELICACIES
          </h2>
          <p className={styles.motto}>
            Working Late ? In mood for Midnight snack ? Want a quick tasty snack ? Well, browse through the delicious dishes available here and order now to have them delivered to the comfort of your home within minutes.  
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            104, Saheed Nagar #234
            <br /> Mumbai, 485022
            <br /> (+91) 768-867-1010
            <br /> customer_care@deliciousdelicacies.com
          </p>
          <p className={styles.text}>
            104, Saheed Nagar #234
            <br /> Mumbai, 485022
            <br /> (+91) 768-867-1011
          </p>
          <p className={styles.text}>
            104, Saheed Nagar #234
            <br /> Mumbai, 485022
            <br /> (+91) 768-867-1012
          </p>
          <p className={styles.text}>
            104, Saheed Nagar #234
            <br /> Mumbai, 485022
            <br /> (+91) 768-867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;