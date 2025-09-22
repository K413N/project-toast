import React from "react";

import { ToastContext } from "../ToastProvider";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext)
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  

  const handleVariant = (event) => {
    setVariant(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleCreateToast = (event) => {
    event.preventDefault()
    createToast(message, variant)
    
  };



  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={handleMessage}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <label name="variant-notice" htmlFor="variant-notice">
              {VARIANT_OPTIONS.map((element) => (
                <div key={element}>
                  <input
                    id={element}
                    type="radio"
                    name="variant-notice"
                    value={element}
                    checked={variant === element}
                    onChange={handleVariant}
                  />
                  <label>{element}</label>
                </div>
              ))}
            </label>

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
