import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
function CountDownBanner() {
  const { container, containerTimer, title, boxBtn } = styles;
  const targetDate = "2025-12-30T00:00:00";
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The classics make a comeback</p>
      <div className={boxBtn}>
        <Button content={"Buy now"} />
      </div>
    </div>
  );
}

export default CountDownBanner;
