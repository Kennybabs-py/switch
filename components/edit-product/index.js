import React from "react";
import styles from "./styles.module.css";

export default function EditProduct() {
  return (
    <form action="" className={styles.edit_form}>
      <div className={styles.inputs_container}>
        <input type="text" name="productName" placeholder="e.g Duffel bag" />
        <input type="text" name="productPrice" placeholder="e.g 13000" />
      </div>

      <button type="submit" className={styles.submit_edit_btn}>
        Submit
      </button>
    </form>
  );
}
