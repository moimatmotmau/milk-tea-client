import { AddCircle, Close, RemoveCircle } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  INIT_PRODUCT,
  productState,
} from "../../../recoilProvider/productProvider";
import { accountState } from "../../../recoilProvider/userProvider";
import "./basicModal.css";
import style from "./styleBox";
import {usersApi} from '../../../api/index'

export default function BasicModal({
  open,
  setOpen,
  productDetail,
  productCarts,
  setProductCarts,
  INIT_DATA,
  seletedProduct,
  setSeletedProduct,
  context,
}: {
  open: boolean;
  setOpen: any;
  productDetail: any;
  productCarts: any;
  setProductCarts: any;
  INIT_DATA: any;
  seletedProduct: any;
  setSeletedProduct: any;
  context: any;
}) {
  const [quantity, setQuantity] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);

  const [totalAProduct, setTotalAProduct] = useState<number>(0);

  const [account, setAccount] = useRecoilState(accountState);
  const [product, setProduct] = useRecoilState(productState);

  useEffect(() => {
    setSeletedProduct({
      ...seletedProduct,
      price: total !== seletedProduct.price ? seletedProduct.price : total,
      quantitySelect: quantity,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, +productDetail.price, quantity]);

  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
    setTotal(0);
    setTotalAProduct(0);
    setSeletedProduct(INIT_DATA);
    setProduct(INIT_PRODUCT);
  };
  // tang so luong

  const increase = () => {
    setQuantity(quantity + 1);
    if (seletedProduct.quantitySelect === 1) {
      total ? setTotal(2 * +total) : setTotal(2 * +seletedProduct.price);
    } else {
      console.log(
        "seletedProduct.quantitySelect",
        seletedProduct.quantitySelect
      );
      totalAProduct === 0
        ? setTotal((seletedProduct.quantitySelect + 1) * seletedProduct.price)
        : setTotal((seletedProduct.quantitySelect + 1) * totalAProduct);
    }
  };
  // giam so luong
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (quantity === 1 && total === 0) {
        setTotal(+seletedProduct.price);
      } else {
        totalAProduct === 0
          ? setTotal(total - +productDetail.salePrice)
          : setTotal((seletedProduct.quantitySelect - 1) * totalAProduct);
      }
    }
  };

  //them topping
  const plusTopping = (e: any) => {
    const checked = e.target.checked;

    //Kiem tra xem checkbox la checked or not
    if (checked) {
      setTotalAProduct(+seletedProduct.price + 9000);
      if (totalAProduct !== 0) {
        setTotalAProduct(totalAProduct + 9000);
      }
      if (seletedProduct.quantitySelect === 1) {
        total !== 0
          ? setTotal(total + 9000)
          : setTotal(+seletedProduct.price + 9000);
      } else {
        totalAProduct === 0
          ? setTotal(
              (+seletedProduct.price + 9000) * seletedProduct.quantitySelect
            )
          : setTotal((+totalAProduct + 9000) * seletedProduct.quantitySelect);
      }
    } else {
      setTotalAProduct(totalAProduct - 9000);

      if (seletedProduct.quantitySelect === 1) {
        setTotal(total - 9000);
      } else {
        setTotal((+totalAProduct - 9000) * seletedProduct.quantitySelect);
      }
    }
  };
  const handleSelectRadio = (e: any) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setSeletedProduct({
        ...seletedProduct,
        [name]: value,
      });
    }
  };

  // xu li select radio button click
  const handleSelectCheckbox = (e: any) => {
    const { value, checked } = e.target;
    const { topping } = seletedProduct;

    if (checked) {
      if (!topping.includes(value)) {
        setSeletedProduct({
          ...seletedProduct,
          topping: [...topping, value],
        });
      }
    } else {
      setSeletedProduct({
        ...seletedProduct,
        topping: topping.filter((t: any) => t !== value),
      });
    }
  };
  //Đẩy cart vào local storage
  const putCart = () => {
    localStorage.setItem("cart", JSON.stringify(productCarts));
    if (account.id) {
      axios.put(
        `${usersApi}/${account.id}`,
        { ...context.current, cart: productCarts }
      );
      const getContext = async () => {
        const res = await axios.get(
          `${usersApi}/${account.id}`
        );
        context.current = res.data;
      };
      getContext();
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="custom-box-modal p-0">
          <div className="modal-content-up container-fruid row d-flex">
            <div className="modal-img col-lg-4 col-6">
              <img
                style={{ height: "200px", objectFit: "cover" }}
                src={productDetail.image}
                alt=""
              />
            </div>
            <div className="modal-info col-lg-7 col-6 p-0">
              <div className="modal-info-title">{productDetail.name}</div>
              <div className="modal-info-price">
                {" "}
                {productDetail.salePrice
                  ? productDetail?.salePrice
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : productDetail?.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                đ{" "}
                <del>
                  {(productDetail.salePrice &&
                    productDetail?.price
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")) ||
                    "0"}
                  đ
                </del>
              </div>
              <div
                className="modal-info-description"
                style={{ fontSize: "95%" }}
              >
                Chưa có thông tin
              </div>
              <div className="modal-info-quantity-total  row">
                <div className="modal-info-quantity col-lg-4 col-md-4 row d-flex align-items-center justify-content-left">
                  <div className=" col-4 p-0" style={{ marginLeft: "0" }}>
                    <RemoveCircle className="custom-icon " onClick={decrease} />
                  </div>
                  <div className=" col-4 p-0">{quantity}</div>
                  <div className=" col-4 p-0">
                    <AddCircle className="custom-icon" onClick={increase} />
                  </div>
                </div>
                {/*  */}
                <div className="row col-lg-8 col-md-8 p-0 m-0">
                  <div className="custom-modal-total-pay col-lg-7 col-md-7 p-0">
                    <button
                      type="button"
                      className="btn btn-warning custom-info-total"
                      onClick={() => {
                        handleClose();
                        productCarts.push(seletedProduct);
                        setProductCarts([...productCarts]);

                        putCart();
                      }}
                    >
                      {total! === 0
                        ? `+ ${
                            (productDetail.salePrice &&
                              productDetail?.salePrice
                                ?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")) ||
                            productDetail?.price
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          }đ `
                        : `+ ${total
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ`}
                    </button>
                  </div>
                  <div className="custom-modal-btn-pay col-lg-5 col-md-5 p-0">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        handleClose();
                        productCarts.push(seletedProduct);
                        setProductCarts([...productCarts]);

                        putCart();
                      }}
                    >
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Close
            className="custom-icon-close"
            fontSize="large"
            onClick={handleClose}
          />

          <div className="modal-content-down container p-0">
            <div className="modal-select row col-12 p-0">
              <p>Chọn Size</p>
              <div className="wrap-input row">
                {productDetail.sizeM && (
                  <div className="custom-modal-input col-5">
                    <input
                      type="radio"
                      name="size"
                      className="custom-input"
                      id="sizem"
                      value="m"
                      checked={seletedProduct.size === "m"}
                      onChange={(e) => handleSelectRadio(e)}
                    />
                    <label htmlFor="sizem">Size M</label>
                  </div>
                )}
                {productDetail.sizeL && (
                  <div className="custom-modal-input col-5">
                    <input
                      type="radio"
                      name="size"
                      className="custom-input"
                      id="sizel"
                      value="l"
                      checked={seletedProduct.size === "l"}
                      onChange={(e) => handleSelectRadio(e)}
                    />
                    <label htmlFor="sizel">Size L</label>
                  </div>
                )}
              </div>
            </div>
            <div className="modal-select row col-12">
              <p>Chọn đường</p>
              <div className="wrap-input row">
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="sugar"
                    className="custom-input"
                    id="100sugar"
                    value="100sugar"
                    checked={seletedProduct.sugar === "100sugar"}
                    onChange={(e) => handleSelectRadio(e)}
                  />
                  <label htmlFor="100sugar">100% đường</label>
                </div>
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="sugar"
                    className="custom-input"
                    id="50sugar"
                    value="50sugar"
                    checked={seletedProduct.sugar === "50sugar"}
                    onChange={(e) => handleSelectRadio(e)}
                  />
                  <label htmlFor="50sugar">50% đường</label>
                </div>
              </div>
            </div>
            <div className="modal-select row col-12">
              <p>Chọn đá</p>
              <div className="wrap-input row col-12">
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="ice"
                    className="custom-input"
                    id="100ice"
                    value="100ice"
                    checked={seletedProduct.ice === "100ice"}
                    onChange={(e) => handleSelectRadio(e)}
                  />
                  <label htmlFor="100ice">100% đá</label>
                </div>
                <div className="custom-modal-input col-5">
                  <input
                    type="radio"
                    name="ice"
                    className="custom-input"
                    id="50ice"
                    value="50ice"
                    checked={seletedProduct.ice === "50ice"}
                    onChange={(e) => handleSelectRadio(e)}
                  />
                  <label htmlFor="50ice">50% đá</label>
                </div>
              </div>
            </div>
            <div className="modal-select row col-12 p-0 ">
              <p>Chọn topping</p>
              <div className="custom-select-topping container p-0">
                <div className="wrap-input row">
                  <div className="custom-modal-checkbox row col-9 ">
                    <div className="col-1 p-0  ">
                      <input
                        type="checkbox"
                        name="topping"
                        className="custom-checkbox"
                        id="tranchausuongmai"
                        value="1"
                        onClick={(e) => plusTopping(e)}
                        onChange={(e) => handleSelectCheckbox(e)}
                      />
                    </div>
                    <div className="col-11 p-0 ">
                      <label
                        htmlFor="tranchausuongmai"
                        style={{ margin: "0 1%" }}
                      >
                        Thêm Trân Châu Sương Mai
                      </label>
                    </div>
                  </div>
                  <div className="custom-modal-checkbox-price col-3 p-0">
                    + 9.000đ
                  </div>
                </div>
                <div className="wrap-input row">
                  <div className="custom-modal-checkbox row col-9 ">
                    <div className="col-1 p-0  ">
                      <input
                        type="checkbox"
                        name="topping"
                        className="custom-checkbox"
                        id="hatre"
                        value="2"
                        onClick={(e) => plusTopping(e)}
                        onChange={(e) => handleSelectCheckbox(e)}
                      />
                    </div>
                    <div className="col-11 p-0 ">
                      <label htmlFor="hatre" style={{ margin: "0 1%" }}>
                        Thêm Hạt Rẻ
                      </label>
                    </div>
                  </div>
                  <div className="custom-modal-checkbox-price col-3 p-0">
                    + 9.000đ
                  </div>
                </div>
                <div className="wrap-input row">
                  <div className="custom-modal-checkbox row col-9 ">
                    <div className="col-1 p-0  ">
                      <input
                        type="checkbox"
                        name="topping"
                        className="custom-checkbox"
                        id="tranchaubaby"
                        value="3"
                        onClick={(e) => plusTopping(e)}
                        onChange={(e) => handleSelectCheckbox(e)}
                      />
                    </div>
                    <div className="col-11 p-0 ">
                      <label htmlFor="tranchaubaby" style={{ margin: "0 1%" }}>
                        Thêm Trân Châu Baby
                      </label>
                    </div>
                  </div>
                  <div className="custom-modal-checkbox-price col-3 p-0">
                    + 9.000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
