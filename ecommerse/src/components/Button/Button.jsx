import styles from "./styles.module.scss";
import classNames from "classnames";
function Button({ content, isPrimary = true }) {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <button
      className={classNames(btn, {
        // Mặc định không truyền gì là primaryBtn
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary,
      })}
    >
      {content}
    </button>
  );
}

export default Button;
