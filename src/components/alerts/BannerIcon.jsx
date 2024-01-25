import { MdCancel, MdWarning, MdInfo, MdCheckCircle } from "react-icons/md";
export default function BannerIcon({ status }) {
  let iconClass = `banner__icon banner__icon--${status.toLowerCase()}`;
  let statusIcon = null;

  switch (status) {
    case "error":
      statusIcon = <MdCancel className={iconClass} />;
      break;
    case "warning":
      statusIcon = <MdWarning className={iconClass} />;
      break;
    case "info":
      statusIcon = <MdInfo className={iconClass} />;
      break;
    case "success":
      statusIcon = <MdCheckCircle className={iconClass} />;
      break;
    default:
      statusIcon = null;
  }

  return statusIcon;
}
