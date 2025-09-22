import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: "oh no!",
      variant: "error",
    },
    {
      id: crypto.randomUUID(),
      message: "logged in!",
      variant: "success",
    },
  ]);

  const handleVariant = (event) => {
    setVariant(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handlePop = () => {
    // setIsToastPopped(true)
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

        <ToastShelf toasts={toasts} />

      <div className={styles.controlsWrapper}>
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
            <Button onClick={handlePop}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
