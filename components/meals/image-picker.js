"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const imagePicker = useRef();

  function handlePickClick() {
    imagePicker.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imagePicker}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick Your Image
        </button>
      </div>
    </div>
  );
}
