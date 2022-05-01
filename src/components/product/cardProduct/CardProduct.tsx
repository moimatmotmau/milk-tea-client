import { AddCircle } from "@mui/icons-material";
import React from "react";
import "./cardProduct.css";

export default function CardProduct({
  productImg,
  productName,
  price,
  salePrice,
  item,
  handleOpen,
  handleShowDetail,
}: {
  productImg: any;
  productName: any;
  price: any;
  salePrice: any;
  item: any;
  handleOpen: any;
  handleShowDetail: any;
}) {
  return (
    <div
      className="card custom-card col-lg-3 col-4"
      onClick={() => {
        handleOpen();
        handleShowDetail();
      }}
    >
      <div className="custom-card-img-top mb-1">
        <img className="card-img-top" src={productImg} alt="" />
      </div>
      <div className="card-body">
        <h5 className="card-title p-0">{productName}</h5>
        <div className="card-text row p-0  d-flex align-items-center text-left">
          <div className="col-5 p-0 " style={{textAlign: "left"}}>
            {salePrice
              ? salePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            đ{" "}
          </div>
          <div className="col-5 p-0 ">
            <del>
              {salePrice && price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")|| '0'}đ
            </del>
          </div>
          <div className="card-icon p-0 col-1 ">
            <AddCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
