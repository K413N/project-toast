import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {

  return (
    
      <ol className={styles.wrapper}>
        {
          toasts.map((element) => (
        <li key={element.id}>
          <Toast 
          id={element.id}
          variant={element.variant} 
          message={element.message}
          handleDismiss={handleDismiss}
          />
        </li>
          ))
        }
      </ol>
    
  );
}

export default ToastShelf;
