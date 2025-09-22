import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const STYLES_BY_VARIANT = {
  notice: styles.notice,
  warning: styles.warning,
  success: styles.success,
  error: styles.error,
}

function Toast({ variant, message, }) {
  

  const styleEffect = React.useEffect(() => {
    console.log(STYLES_BY_VARIANT)
  }, [variant])

  const handleClose = () => {
    // setIsToastPopped(false)
    console.log("Closed!")
  }

  return (
    <div className={`${styles.toast} ${STYLES_BY_VARIANT[variant]}`}>
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button onClick={handleClose} className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
