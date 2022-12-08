import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import EditProduct from "../edit-product";
import styles from "./products.module.css";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <main className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.header}>Products</h2>

        <div className={styles.add_product}>
          <button>
            <AiOutlinePlus /> Add Product
          </button>

          <div className={styles.edit_product}>
            <EditProduct />
          </div>
        </div>

        <div className={styles.products_list}>
          {products.map((item) => {
            return <div key={item.id}>{item.productName}</div>;
          })}
        </div>
      </div>
    </main>
  );
}
