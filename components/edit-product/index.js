import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { edit, toggleEditState } from "../../store/slices/productsSlice";
import styles from "./styles.module.css";

function EditProduct() {
  const state = useSelector((state) => state.products);
  const editData = useSelector((state) => state.products.editData);
  const isEditing = useSelector((state) => state.products.isEditing);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: null,
    productName: "",
    productPrice: "",
    category: "",
  });

  useEffect(() => {
    if (Object.keys(editData).length !== 0) {
      setFormData({ ...editData });
    }
  }, [editData]);

  function handleFormData(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      edit({
        ...formData,
      })
    );
    dispatch(toggleEditState({ isEditing: false }));
    setFormData({ productName: "", productPrice: "", category: "" });
  }
  return (
    <section
      className={`${styles.edit_product} ${isEditing ? styles.open : null}`}
    >
      <div className="container">
        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.edit_form}
        >
          <div className={styles.inputs_container}>
            <input
              type="text"
              name="productName"
              placeholder="Product name e.g Duffel bag"
              value={formData && formData.productName}
              onChange={handleFormData}
            />
            <input
              type="text"
              name="productPrice"
              placeholder="Product price e.g 13000"
              value={formData && formData.productPrice}
              onChange={handleFormData}
            />

            <input
              type="text"
              name="category"
              placeholder="Category e.g Fashion"
              value={formData && formData.category}
              onChange={handleFormData}
            />
          </div>

          <button type="submit" className={styles.submit_edit_btn}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditProduct;
