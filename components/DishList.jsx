import styles from "../styles/DishList.module.css";
import DishCard from "./DishCard.jsx"

const DishList = ({dishList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose from the Featured dishes below !</h1>
      <p className={styles.desc}>
        
      </p> 
      <div className={styles.wrapper}>
          {dishList.map((dish) => (
          <DishCard key={dish._id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default DishList;
