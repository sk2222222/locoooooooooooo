import type { NextPage } from "next";
import Property1Default7 from "./Property1Default7";
import TypeSecondaryColorSizesm from "./TypeSecondaryColorSizesm";
import styles from "./ProjectPreview.module.css";

type ProjectPreviewType = {
  onClose?: () => void;
};

const ProjectPreview: NextPage<ProjectPreviewType> = ({ onClose }) => {
  return (
    <div className={styles.projectPreview}>
      <div className={styles.close}>
        <Property1Default7 />
      </div>
      <div className={styles.contentProjectCard}>
        <div className={styles.headline}>
          <div className={styles.thisIsA}>
            This is a preview of what service providers will see.
          </div>
        </div>
        <div className={styles.cardproject}>
          <div className={styles.companyInfo}>
            <img
              className={styles.pitchPng0}
              alt=""
              src="/pitch--png-0@2x.png"
            />
            <div className={styles.info}>
              <div className={styles.projectsName}>
                <div className={styles.thisIsA}>Web3 Marketing Specialist</div>
              </div>
              <div className={styles.clientsName}>
                <div className={styles.thisIsA}>Access Protocol</div>
              </div>
            </div>
          </div>
          <div className={styles.infoAboutProject}>
            <div className={styles.location}>
              <div className={styles.icon}>
                <img
                  className={styles.locationIcon}
                  alt=""
                  src="/location.svg"
                />
              </div>
              <div className={styles.projectsName}>
                <div className={styles.thisIsA}>Canada (Remote)</div>
              </div>
            </div>
            <div className={styles.location}>
              <div className={styles.icon}>
                <img className={styles.locationIcon} alt="" src="/coin.svg" />
              </div>
              <div className={styles.projectsName}>
                <div className={styles.thisIsA}>$25 - $50/hr</div>
              </div>
            </div>
            <div className={styles.location}>
              <div className={styles.icon}>
                <img className={styles.locationIcon} alt="" src="/clock.svg" />
              </div>
              <div className={styles.projectsName}>
                <div className={styles.thisIsA}>1-4 weeks</div>
              </div>
            </div>
          </div>
          <div className={styles.cta}>
            <TypeSecondaryColorSizesm
              heroiconsOutlineenvelope="/heroiconsoutlineenvelope.svg"
              text="Edit project"
              heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright.svg"
              rightIcon={false}
              leftIcon={false}
              typeSecondaryColorSizesmBackgroundColor="#f9f9f9"
              typeSecondaryColorSizesmBoxSizing="border-box"
              typeSecondaryColorSizesmCursor="unset"
              typeSecondaryColorSizesmBorder="unset"
              heroiconsOutlineenvelopeOverflow="hidden"
              heroiconsOutlineenvelopeFlexShrink="0"
              buttonFontWeight="unset"
              buttonFontFamily="'Helvetica Now Text '"
              buttonColor="#151920"
              buttonDisplay="inline-block"
            />
          </div>
        </div>
      </div>
      <div className={styles.cta1}>
        <TypeSecondaryColorSizesm
          heroiconsOutlineenvelope="/heroiconsoutlineenvelope1.svg"
          text="Close preview"
          heroiconsOutlinearrowRigh="/heroiconsoutlinearrowright2.svg"
          rightIcon={false}
          leftIcon={false}
          typeSecondaryColorSizesmBackgroundColor="#151920"
          typeSecondaryColorSizesmBoxSizing="border-box"
          typeSecondaryColorSizesmCursor="pointer"
          typeSecondaryColorSizesmBorder="none"
          heroiconsOutlineenvelopeOverflow="hidden"
          heroiconsOutlineenvelopeFlexShrink="0"
          buttonFontWeight="500"
          buttonFontFamily="'DM Sans'"
          buttonColor="#fff"
          buttonDisplay="inline-block"
        />
      </div>
    </div>
  );
};

export default ProjectPreview;
