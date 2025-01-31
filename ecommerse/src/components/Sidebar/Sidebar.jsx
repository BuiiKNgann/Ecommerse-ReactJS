import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "@components/contexts/SidebarProvider";
import classNames from "classnames";
import BoxIcon from "@components/Header/BoxIcon/BoxIcon";
import { IoMdClose } from "react-icons/io";
import Login from "@components/ContentSideBar/Login/Login";

function Sidebar() {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <IoMdClose />
          </div>
        )}
        <Login />
      </div>
    </div>
  );
}
export default Sidebar;
