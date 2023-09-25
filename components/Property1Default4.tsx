import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./Property1Default4.module.css";

type Property1Default4Type = {
  dimensionCode?: string;

  /** Style props */
  property1DefaultBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property1Default4: NextPage<Property1Default4Type> = ({
  dimensionCode,
  property1DefaultBackgroundColor,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
    };
  }, [property1DefaultBackgroundColor]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <img className={styles.profileIcon} alt="" src={dimensionCode} />
    </div>
  );
};

export default Property1Default4;
