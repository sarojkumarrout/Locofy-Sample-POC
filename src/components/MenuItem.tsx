import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MenuItem.module.css";

export type MenuItemType = {
  className?: string;
  option?: string;

  /** Variant props */
  disabled?: boolean;
  icon?: boolean;

  /** Style props */
  menuItemWidth?: CSSProperties["width"];
  menuItemAlignSelf?: CSSProperties["alignSelf"];
  menuItemHeight?: CSSProperties["height"];
};

const MenuItem: FunctionComponent<MenuItemType> = ({
  className = "",
  disabled = false,
  icon = true,
  menuItemWidth,
  menuItemAlignSelf,
  option,
  menuItemHeight,
}) => {
  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      width: menuItemWidth,
      alignSelf: menuItemAlignSelf,
      height: menuItemHeight,
    };
  }, [menuItemWidth, menuItemAlignSelf, menuItemHeight]);

  return (
    <div
      className={[styles.menuitem, className].join(" ")}
      data-disabled={disabled}
      data-icon={icon}
      style={menuItemStyle}
    >
      <div className={styles.option}>{option}</div>
    </div>
  );
};

export default MenuItem;
