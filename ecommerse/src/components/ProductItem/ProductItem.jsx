import styles from "./styles.module.scss";
import reLoadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heart.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceCl,
  } = styles;

  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt="Product Image 1" />
        <img
          src={prevSrc}
          alt="Product Image 2"
          className={showImgWhenHover} // Sử dụng đúng lớp từ CSS Module
        />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt="Cart Icon" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="Heart Icon" />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt="Reload Icon" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="Cart Icon" />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceCl}>{price}</div>
    </div>
  );
}

export default ProductItem;
