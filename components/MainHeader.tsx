import type { NextPage } from "next";
import TypePhotoSize32pxCircle from "./TypePhotoSize32pxCircle";
import styles from "./MainHeader.module.css";

const MainHeader: NextPage = () => {
  return (
    <div className={styles.divNavbarapp}>
      <div className={styles.seaclubLogos}>
        <div className={styles.logoMobile}>
          <img className={styles.icon} alt="" src="/11.svg" />
        </div>
        <div className={styles.logoDesktop}>
          <div className={styles.logoDesktopInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-15202.svg"
                />
              </div>
              <img className={styles.layer2Icon} alt="" src="/layer-21.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divLinks}>
        <div className={styles.messages}>
          <img className={styles.messageIcon} alt="" src="/message1.svg" />
        </div>
        <div className={styles.notification}>
          <img className={styles.messageIcon} alt="" src="/notification1.svg" />
        </div>
        <div className={styles.avatarProfile} id="Avatar profile">
          <TypePhotoSize32pxCircle
            iconId="/image1@2x.png"
            component1="/component-11.svg"
            typePhotoSize32pxCirclePosition="relative"
            typePhotoSize32pxCircleBorderRadius="86.96px"
            typePhotoSize32pxCircleWidth="27.83px"
            typePhotoSize32pxCircleHeight="27.83px"
            imageIconHeight="calc(100% + 0.17px)"
            imageIconWidth="calc(100% + 0.17px)"
            imageIconBorderRadius="86.96px"
          />
        </div>
      </div>
      <button
        className={styles.menuDefaultMobile}
        autoFocus={true}
        disabled={true}
      >
        <img
          className={styles.menuDefaultMobileChild}
          alt=""
          src="/group-15203.svg"
        />
      </button>
    </div>
  );
};

export default MainHeader;
