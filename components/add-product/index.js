import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { add, toggleAddState } from "../../store/slices/productsSlice";
import styles from "./styles.module.css";

export default function AddProduct() {
  const state = useSelector((state) => state.products);
  const isAddData = useSelector((state) => state.products.isAddData);

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    category: "",
  });

  const dispatch = useDispatch();

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.productName !== "" &&
      formData.category !== "" &&
      formData.productPrice !== ""
    ) {
      dispatch(
        add({
          productName: formData.productName,
          category: formData.category,
          productPrice: formData.productPrice,
        })
      );
      dispatch(toggleAddState({ ...state, isAddData: false }));
      setFormData({ productName: "", productPrice: "", category: "" });
    } else {
      alert("Please fill the form!");
    }
  }

  return (
    <form
      action=""
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={`${styles.add_form} ${isAddData ? styles.open : null}`}
    >
      <div className={styles.inputs_container}>
        <input
          type="text"
          name="productName"
          placeholder="Product name e.g Duffel bag"
          value={formData.productName}
          onChange={handleFormData}
        />
        <input
          type="text"
          name="productPrice"
          placeholder="Product price e.g 13000"
          value={formData.productPrice}
          onChange={handleFormData}
        />

        <input
          type="text"
          name="category"
          placeholder="Category e.g Fashion"
          value={formData.category}
          onChange={handleFormData}
        />
      </div>

      <button type="submit" className={styles.submit_add_btn}>
        Submit
      </button>
    </form>
  );
}
