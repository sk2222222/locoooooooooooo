import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./TypePhotoSize32pxCircle.module.css";

type TypePhotoSize32pxCircleType = {
  iconId?: string;
  component1?: string;

  /** Style props */
  typePhotoSize32pxCirclePosition?: CSSProperties["position"];
  typePhotoSize32pxCircleBorderRadius?: CSSProperties["borderRadius"];
  typePhotoSize32pxCircleWidth?: CSSProperties["width"];
  typePhotoSize32pxCircleHeight?: CSSProperties["height"];
  imageIconHeight?: CSSProperties["height"];
  imageIconWidth?: CSSProperties["width"];
  imageIconBorderRadius?: CSSProperties["borderRadius"];
};

const TypePhotoSize32pxCircle: NextPage<TypePhotoSize32pxCircleType> = ({
  iconId,
  component1,
  typePhotoSize32pxCirclePosition,
  typePhotoSize32pxCircleBorderRadius,
  typePhotoSize32pxCircleWidth,
  typePhotoSize32pxCircleHeight,
  imageIconHeight,
  imageIconWidth,
  imageIconBorderRadius,
}) => {
  const typePhotoSize32pxCircleStyle: CSSProperties = useMemo(() => {
    return {
      position: typePhotoSize32pxCirclePosition,
      borderRadius: typePhotoSize32pxCircleBorderRadius,
      width: typePhotoSize32pxCircleWidth,
      height: typePhotoSize32pxCircleHeight,
    };
  }, [
    typePhotoSize32pxCirclePosition,
    typePhotoSize32pxCircleBorderRadius,
    typePhotoSize32pxCircleWidth,
    typePhotoSize32pxCircleHeight,
  ]);

  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: imageIconHeight,
      width: imageIconWidth,
      borderRadius: imageIconBorderRadius,
    };
  }, [imageIconHeight, imageIconWidth, imageIconBorderRadius]);

  return (
    <div
      className={styles.typephotoSize32pxCircle}
      style={typePhotoSize32pxCircleStyle}
    >
      <img
        className={styles.imageIcon}
        alt=""
        src={iconId}
        style={imageIconStyle}
      />
      <img className={styles.component1Icon} alt="" src={component1} />
    </div>
  );
};

export default TypePhotoSize32pxCircle;
