import { FunctionComponent } from "react";
import MenuItem from "./MenuItem";
import MenuItem1 from "./MenuItem1";
import styles from "./List.module.css";

export type ListType = {
  className?: string;
};

const List: FunctionComponent<ListType> = ({ className = "" }) => {
  return (
    <div className={[styles.list, className].join(" ")}>
      <MenuItem
        disabled={false}
        icon={false}
        option="Singapore - Changi (LAX)"
      />
      <MenuItem1 contentType="Text Only" />
      <section className={styles.menuitemParent}>
        <MenuItem
          disabled={false}
          icon={false}
          menuItemWidth="unset"
          menuItemAlignSelf="stretch"
          option="Mactan International Airport (MIA)"
          menuItemHeight="36px"
        />
        <MenuItem
          disabled={false}
          icon={false}
          menuItemWidth="unset"
          menuItemAlignSelf="stretch"
          option="Clark International Airport (CIA)"
          menuItemHeight="36px"
        />
        <MenuItem
          disabled={false}
          icon={false}
          menuItemWidth="347px"
          menuItemAlignSelf="unset"
          option="Charles de Gaulle Airport (CGA)"
          menuItemHeight="36px"
        />
      </section>
    </div>
  );
};

export default List;
