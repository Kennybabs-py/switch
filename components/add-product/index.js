import React from "react";
import styles from "./styles.module.css";

export default function AddProduct(props) {
  const { showEdit } = props;
  return (
    <form
      action=""
      className={`${styles.add_form} ${showEdit ? styles.open : null}`}
    >
      <div className={styles.inputs_container}>
        <input
          type="text"
          name="productName"
          placeholder="Product name e.g Duffel bag"
        />
        <input
          type="text"
          name="productPrice"
          placeholder="Product price e.g 13000"
        />

        <input type="text" name="category" placeholder="Category e.g Fashion" />
      </div>

      <button type="submit" className={styles.submit_add_btn}>
        Submit
      </button>
    </form>
  );
}
