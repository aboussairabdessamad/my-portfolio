import styles from "./ArrowLogo.module.css";

const ArrowLogo = () => {
  return (
    <div className={styles.arrowLogo}>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
    </div>
  );
};

export default ArrowLogo;
