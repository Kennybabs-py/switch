import { AiOutlinePlus, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { del, toggleAddState } from "../../store/slices/productsSlice";

import AddProduct from "../add-product";
import styles from "./products.module.css";

export default function Products() {
  const state = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  return (
    <main className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.header}>Products</h2>

        <div className={styles.add_product}>
          <button
            onClick={() => {
              dispatch(toggleAddState({ ...state, isAddData: true }));
            }}
          >
            <AiOutlinePlus /> Add Product
          </button>

          <div className={styles.add_form_container}>
            <AddProduct />
          </div>
        </div>

        <div className={styles.products_list}>
          {products?.length > 0 ? (
            <>
              {products?.map((item) => {
                return (
                  <div key={item.id} className={styles.product_item}>
                    <h2> {item.productName}</h2>
                    <div className={styles.price_category}>
                      <span>#{item.productPrice}</span>{" "}
                      <span>{item.category}</span>
                    </div>

                    <div className={styles.del_edit__btns}>
                      <button
                        onClick={() => {
                          dispatch(del({ id: item.id }));
                        }}
                      >
                        <AiFillDelete />
                      </button>
                      <button>
                        <AiFillEdit />
                      </button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <h2>No product here. Add Product</h2>
          )}
        </div>
      </div>
    </main>
  );
}
