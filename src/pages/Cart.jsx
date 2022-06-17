import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import styles from "./cartStyles.module.css";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
function Cart() {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  // console.log(cart.length);
  const addition = (acc, curr) => {
    return acc + curr.price * curr.quantity;
  };
  const total = cart.reduce(addition, 0);
  const tax = (total * (18 / 100)).toFixed(2);
  if (cart.length === 0) {
    return (
      <div className={styles.nothingInCart}>
        <img
          className={styles.nothingInCartIMG}
          src="https://in.sugarcosmetics.com/ic_empty_cart.png"
          alt=""
        />
        <div className={styles.ptag_div}>
          <p className={styles.ptag_div_p}>
            <i>Hey! It's lonely here.</i>
          </p>
          <p className={styles.ptag_div_p}>
            <i>Your bag seems to have no company.</i>
          </p>
          <p className={styles.ptag_div_p}>
            <i>Why not add some products?</i>
          </p>
        </div>
        <button onClick={handleNavigate} className={styles.shopnowBTN}>
          SHOP NOW
        </button>
      </div>
    );
  }
  return (
    <div className={styles.universal}>
      <div>
        <div className={styles.cartContainer}>
          <div className={styles.orderSummary}>
            <div className={styles.orderSummaryInner1}>
              <div className={styles.orderSummaryInner1_div}>
                <p className={styles.orderSummaryInner1_p}>
                  <GrCart />
                  {"   "}
                  Order Summary
                </p>
              </div>
            </div>
            <div className={styles.orderSummaryInner2}>
              <p className={styles.orderSummaryInner2_p}>
                Cart Total : Rs. {total}.00
              </p>
            </div>
          </div>
          <div className={styles.outer_div}>
            {cart.map((item) => {
              return (
                <div className={styles.inner_div} key={item.id}>
                  <div>
                    <img
                      className={styles.image}
                      src={item.src || item.image}
                      alt=""
                    />
                  </div>
                  <h6 className={styles.nametag}>{item.name}</h6>
                  <div className={styles.partOffun}>
                    <div>
                      <button
                        className={styles.deleteBtn}
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: item })
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                    <div className={styles.btn_div}>
                      <button
                        className={styles.btn}
                        onClick={() => {
                          if (item.quantity > 1) {
                            dispatch({ type: "DECREASE", payload: item });
                          } else {
                            dispatch({ type: "REMOVE", payload: item });
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={styles.btn}
                        onClick={() =>
                          dispatch({ type: "INCREASE", payload: item })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className={styles.findAmount}>
                      <p>
                        {item.quantity} x {item.price} ={" "}
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.cartTotalBox}>
            <div className={styles.offerSection}>
              <img
                className={styles.offerSectionIMG}
                src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
                alt=""
              />
              <p className={styles.offerSection_p}>Offers and Price Details</p>
            </div>
            <div className={styles.offerPrice_div}>
              <select className={styles.selectPromo}>
                <option value="option1">
                  Available Offers/Promos for you! (Click to Expand)
                </option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className={styles.applyPromo}>
              <img
                className={styles.applyPromoIMG}
                src="https://in.sugarcosmetics.com/desc-images/GiftCard.svg"
                alt=""
              />
              <p className={styles.applyPromo_P}>Gift Card/Discount Code</p>
              <input
                className={styles.applyPromoInput}
                type="text"
                placeholder="Enter Promo Code"
              />
              <button className={styles.applyPromoBtn}>Apply</button>
            </div>
            <div className={styles.priceDetails}>
              <img
                className={styles.priceDetailsIMG}
                src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                alt=""
              />
              <p className={styles.priceDetails_P}>Price Details</p>
            </div>
            <div>
              <div className={styles.cartPriceDetails}>
                <img
                  className={styles.cartPriceDetailsIMG}
                  src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                  alt=""
                />
                <p className={styles.cartPriceDetails_p}>Cart Sub Total:</p>
                <p>₹ {total}.00</p>
              </div>
              <div className={styles.cartPriceDetails}>
                <img
                  className={styles.cartPriceDetailsIMG}
                  src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                  alt=""
                />
                <p className={styles.cartPriceDetails_p}>Shipping Cost:</p>
                <p>₹ 0.00</p>
              </div>
              <div className={styles.cartPriceDetails}>
                <img
                  className={styles.cartPriceDetailsIMG}
                  src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                  alt=""
                />
                <p className={styles.cartPriceDetails_p}>Discount Applied:</p>
                <p>₹ 0.00</p>
              </div>
              <div className={styles.cartPriceDetails}>
                <img
                  className={styles.cartPriceDetailsIMG}
                  src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                  alt=""
                />
                <p className={styles.cartPriceDetails_p}>Amount Payable:</p>
                <p>₹ {total}.00</p>
              </div>
              <i className={styles.tax}>Including ₹{tax} in taxes</i>
              <div className={styles.delhivery}>
                <button className={styles.continueShop}>
                  <span>{"<"}</span> Continue Shoping
                </button>
                <button className={styles.delhiveryBTN}>
                  Delhivery Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {total > 0 && <h2>Total: {total}</h2>} */}
    </div>
  );
}

export default Cart;
