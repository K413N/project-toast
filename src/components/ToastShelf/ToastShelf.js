import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts }) {
  
  return (
    
      <ol className={styles.wrapper}>
        {
          toasts.map((element) => (
        <li key={element.id}>
          <Toast variant={element.variant} message={element.message}/>
        </li>
          ))
        }
      </ol>
    
  );
}

export default ToastShelf;
