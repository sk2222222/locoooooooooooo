import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./HeroiconsOutlineplusSmall.module.css";

type HeroiconsOutlineplusSmallType = {
  searchStatus?: string;

  /** Style props */
  heroiconsOutlineplusSmallBoxSizing?: CSSProperties["boxSizing"];
};

const HeroiconsOutlineplusSmall: NextPage<HeroiconsOutlineplusSmallType> = ({
  searchStatus,
  heroiconsOutlineplusSmallBoxSizing,
}) => {
  const heroiconsOutlineplusSmallStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: heroiconsOutlineplusSmallBoxSizing,
    };
  }, [heroiconsOutlineplusSmallBoxSizing]);

  return (
    <div
      className={styles.heroiconsOutlineplusSmall}
      style={heroiconsOutlineplusSmallStyle}
    >
      <img className={styles.searchStatusIcon} alt="" src={searchStatus} />
    </div>
  );
};

export default HeroiconsOutlineplusSmall;
