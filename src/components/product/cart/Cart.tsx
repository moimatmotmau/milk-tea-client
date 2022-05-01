import { AddCircle, RemoveCircle } from "@mui/icons-material";
import React from "react";
import "./cart.css";

export default function Cart({
  cartName,
  cartPrice,
  cartSize,
  cartTopping,
  cartIce,
  cartSugar,
  cartQuantity,
  handleIncrease,
  handleDecrease,
}: {
  cartName: any;
  cartPrice: any;
  cartSize: any;
  cartTopping: any;
  cartIce: any;
  cartSugar: any;
  cartQuantity: any;
  handleIncrease: any;
  handleDecrease: any;
}) {
  return (
    <>
      <div className="custom-cart-product row-3 row p-0 justify-content-center">
        <div className="custom-cart-main col-7 p-0">
          <div className="custom-cart-title fw-bold">
            {cartName} ({cartSize.toUpperCase()})
          </div>
          <div className="custom-cart-detail">
            Thêm{" "}
            {cartTopping && cartTopping.map((a: string) => (
              <span>{a}, </span>
            ))}
            {cartIce}% đá, {cartSugar}% đường
          </div>
          <div className="custom-cart-price">
            {cartQuantity} x{" "}
            <span>
              {(+cartPrice + cartTopping.length * 9000)
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </span>{" "}
            ={" "}
            {(cartQuantity * (+cartPrice + cartTopping.length * 9000))
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            đ
          </div>
        </div>
        <div className="custom-cart-inDeCrease col-3 row p-0 d-flex align-items-center">
          <div className="custom-icon-decrease col-4 p-0">
            <RemoveCircle
              className="custom-cart-icon "
              onClick={() => handleDecrease()}
            />
          </div>
          <div className="custom-cart-quantity col-5 p-0 text-align-center ">
            {cartQuantity}
          </div>
          <div className="custom-icon-increase col-3 p-0">
            <AddCircle
              className="custom-cart-icon"
              onClick={() => handleIncrease()}
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
