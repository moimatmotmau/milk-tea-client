import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ListIcon from "@mui/icons-material/List";
import axios from "axios";
import React, { memo, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { ICart, IOrders, IProduct, IState } from "../../interfaces";
import { productState } from "../../recoilProvider/productProvider";
import { accountState } from "../../recoilProvider/userProvider";
import { getProduct, ordersApi } from "../../api/index";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import CardProduct from "./cardProduct/CardProduct";
import Cart from "./cart/Cart";
import BasicModal from "./modal/BasicModal";
import "./product.css";
import { usersApi, productsApi } from "../../api/index";

import ConfirmIcon from "./confirm.png";

const Product: React.FC = memo(() => {
  const INIT_DATA: IState = {
    id: 0,
    name: "",
    productImg: "",
    price: 0,
    quantitySelect: 1,
    size: "m",
    sugar: "100sugar",
    ice: "100ice",
    topping: [],
    cart: [],
  };

  var context: any = useRef({});

  const [datas, setData] = useState<IProduct[] | null>([]);
  const [open, setOpen] = useState(false);
  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const [productDetail, setProductDetail] = useState<any>([]);
  // get value search
  const [searchValue, setSearchValue] = useState<string | null>("");
  //gio hang
  const [productCarts, setProductCarts] = useState<IState[]>([]);
  const [checkEmpty, setCheckEmpty] = useState<string | null>();
  //san pham da chon
  const [seletedProduct, setSeletedProduct] = useState<IState>(INIT_DATA);
  const [showCartUp, setShowCartUp] = useState<boolean>(true);
  const [showCategory, setShowCategory] = useState<boolean>(true);
  const [account, setAccount] = useRecoilState(accountState);
  //su kien khi click vao danh muc san pham
  const monnoibatSection = useRef<HTMLDivElement | null>(null);
  const trasuaSection = useRef<HTMLDivElement | null>(null);
  const freshteaSection = useRef<HTMLDivElement | null>(null);
  const MacchiatoCreamCheeseSection = useRef<HTMLDivElement | null>(null);
  const suachuadeoSection = useRef<HTMLDivElement | null>(null);

  const [product, setProduct] = useRecoilState(productState);

  const navigate = useNavigate();

  useEffect(() => {
    if (product.name) {
      setProductDetail(product);
      setSeletedProduct({
        ...seletedProduct,
        productImg: product.image,
        name: product.name,
        price: Number(product.salePrice),
        id: productCarts.length + 1,
      });
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const response = await getProduct();
      const data = await response.data;
      setData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getContext = async () => {
      const res = await axios.get(`${usersApi}/${account?.id}`);
      context.current = await res.data;
    };
    getContext();
  }, []);

  //show text khi không có data
  useEffect(() => {
    if (productCarts.length === 0) {
      setCheckEmpty("\xa0\xa0\xa0\xa0" + " Chưa có sản phẩm nào!");
    } else {
      setCheckEmpty("");
    }
  }, [productCarts?.length]);

  useEffect(() => {
    if (!account._id) {
      navigate("/login");
    }
  }, [account, navigate]);

  useEffect(() => {
    //lay cart user dang nhap
    if (account?._id !== "") {
      const getContext = async () => {
        try {
          const res = await axios.get(`${usersApi}/${account?._id}`);
          const data = await res.data;
          setProductCarts(data.cart);
        } catch (error) {
          console.log(error);
        }
      };
      getContext();
    }
  }, [account]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleGoToSection = (section: any) => {
    return window.scrollTo({ top: section.current.offsetTop - 85 });
  };
  const handleShowDetail = (item: any) => {
    setProductDetail(item);
    setSeletedProduct({
      ...seletedProduct,
      id: productCarts.length + 1,
      name: item.name,
      productImg: item.image,
      price: item.salePrice ? item.salePrice : item.price,
    });
  };
  const soLuongSanPham = (type: string | boolean) => {
    if (datas !== null) {
      const sl = datas?.filter((a) =>
        typeof type === "boolean" ? a.hot === type : a.category === type
      );
      return sl!.length;
    }
  };

  // tang so luong
  const increase = (i: any) => {
    let items = [...productCarts];
    let item = { ...items[i] };
    item.quantitySelect = item.quantitySelect! + 1;
    items[i] = item;
    setProductCarts([...items]);
    //cap nhat lai local storage

    localStorage.setItem("cart", JSON.stringify([...items]));

    //cap nhat lai cart tren api user
    if (account?._id) {
      axios.put(`${usersApi}/${account._id}`, {
        ...context.current,
        cart: [...items],
      });
      const getContext = async () => {
        const res = await axios.get(`${usersApi}/${account._id}`);
        context.current = res.data;
        return context.current;
      };
      getContext();
    }
  };
  // giam so luong
  const decrease = (i: any) => {
    let items = [...productCarts];
    let item = { ...items[i] };
    item.quantitySelect = item.quantitySelect! - 1;
    items[i] = item;
    setProductCarts([...items]);
    if (item.quantitySelect <= 0) {
      items.splice(i, 1);
      setProductCarts([...items]);
    }
    // cap nhat lai local storage
    localStorage.setItem("cart", JSON.stringify([...items]));

    //cap nhat lai cart tren api user
    if (account?._id) {
      axios.put(`${usersApi}/${account._id}`, {
        ...context.current,
        cart: [...items],
      });
      const getContext = async () => {
        const res = await axios.get(`${usersApi}/${account._id}`);
        context.current = res.data;
        return context.current;
      };
      getContext();
    }
  };

  const [queried, setQueried] = useState<boolean>(false);

  useEffect(() => {
    if (!queried) {
      return;
    }
    const getData = async () => {
      await axios.get(productsApi).then((res: any) => {
        const searchItem = res.data.filter((product: any) =>
          product.name
            .toLowerCase()
            .includes(searchValue ? searchValue.toLowerCase() : "")
        );
        setData(searchItem);
      });
    };
    getData();
  }, [queried, searchValue]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setQueried(true);
  };

  const deleteAllCart = () => {
    setProductCarts([]);
    localStorage.setItem("cart", JSON.stringify([]));
    //cap nhat lai cart tren api user
    if (account?._id) {
      axios.put(`${usersApi}/${account.id}`, { ...context.current, cart: [] });
      const getContext = async () => {
        const res = await axios.get(`${usersApi}/${account.id}`);
        context.current = res.data;
        return context.current;
      };
      getContext();
    }
  };

  const api = axios.create({
    baseURL: `${usersApi}`,
  });
  const orderApi = axios.create({
    baseURL: `${ordersApi}`,
  });

  const updateCart = async (value: ICart[]) => {
    await api
      .put(`/${account._id}`, { ...account, cart: value })
      .catch((err) => console.log(err));
  };

  const updateOrder = async (value: IOrders[]) => {
    await api
      .put(`/${account._id}`, { ...account, orders: value, cart: [] })
      .catch((err) => console.log(err));
  };

  const updateOrders = async (value: IOrders) => {
    await orderApi.post(`/`, { ...value }).catch((err) => console.log(err));
  };

  const handleClose = () => {
    setOpenCheckoutModal(false);
  };

  const handleOrders = () => {
    const value2 = productCarts.map((value) => {
      return {
        name: value.name,
        size: value.size,
        ice: value.ice,
        sugar: value.sugar,
        quantitySelect: Number(value.quantitySelect),
        price: Number(value.price),
        total: Number(value.quantitySelect) * Number(value.price),
        topping: value.topping,
      };
    });

    const time = new Date();

    let hour =
      time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`;
    let minute =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    let second =
      time.getSeconds() < 10 ? `0${time.getSeconds()}` : `${time.getSeconds()}`;

    const orders: any = {
      username: account.username,
      phone: account.phone,
      address: account.address,
      orders: value2,
      paid: false,
      status: "1",
      fullName: account.fullName,
      time: `${hour}:${minute}:${second}  ${time.getDate()}/${
        time.getMonth() + 1
      }/${time.getFullYear()}`,
    };
    try {
      updateCart([]);
      updateOrder(orders);
      setOpenCheckoutModal(false);
      updateOrders(orders);
      setProductCarts([]);
      alert("Thành công !");
      localStorage.removeItem("cart");
    } catch (error) {
      alert("Có Lỗi hãy thử lại !");
    }
  };

  const handleClickOpen = () => {
    setOpenCheckoutModal(true);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between custom-navbar"></nav>

      <div className="custom-product-container container">
        <div className="row">
          <div className="col-lg-3">
            {showCategory && (
              <div className="categories container">
                <p>DANH MỤC</p>
                <hr />
                <div className="category-quantity row">
                  <div
                    className="category col-sm-6"
                    onClick={() => {
                      handleGoToSection(monnoibatSection);
                    }}
                  >
                    Món nổi bật
                  </div>
                  <div className="quantity col-sm-6">
                    {soLuongSanPham(true)}
                  </div>
                </div>
                <hr />
                <div
                  className="category-quantity row"
                  onClick={() => {
                    handleGoToSection(trasuaSection);
                  }}
                >
                  <div className="category col-sm-6">Trà sữa</div>
                  <div className="quantity col-sm-6">{soLuongSanPham("1")}</div>
                </div>
                <hr />
                <div
                  className="category-quantity row"
                  onClick={() => {
                    handleGoToSection(freshteaSection);
                  }}
                >
                  <div className="category col-sm-6">Fresh Fruit Tea</div>
                  <div className="quantity col-sm-6">{soLuongSanPham("2")}</div>
                </div>
                <hr />
                <div
                  className="category-quantity row"
                  onClick={() => {
                    handleGoToSection(MacchiatoCreamCheeseSection);
                  }}
                >
                  <div className="category col-sm-10">
                    Macchiato Cream Cheese
                  </div>
                  <div className="quantity col-sm-2">{soLuongSanPham("3")}</div>
                </div>
                <hr />
                <div
                  className="category-quantity row"
                  onClick={() => {
                    handleGoToSection(suachuadeoSection);
                  }}
                >
                  <div className="category col-sm-6">Sữa chua dẻo</div>
                  <div className="quantity col-sm-6">{soLuongSanPham("4")}</div>
                </div>
                <br />
              </div>
            )}
          </div>
          <div className="col-lg-6">
            <div className="custom-form-search ">
              <form onSubmit={handleSubmit} className="input-group">
                <input
                  type="text"
                  className="custom-form-input search"
                  placeholder="Tìm kiếm sản phẩm..."
                  onChange={(e) => setSearchValue(e.target.value.trim())}
                />
              </form>
            </div>
            <div className="products row">
              <p ref={monnoibatSection}>Món nổi bật</p>
              {datas!
                .filter((data) => data.hot === true)
                .map((item) => (
                  <CardProduct
                    key={item._id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p ref={trasuaSection}>Trà sữa</p>
              {datas!
                .filter((data) => data.category === "1")
                .map((item) => (
                  <CardProduct
                    key={item._id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p ref={freshteaSection}>Fresh Fruit Tea</p>
              {datas!
                .filter((data) => data.category === "2")
                .map((item) => (
                  <CardProduct
                    key={item._id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p className="products-scd" ref={MacchiatoCreamCheeseSection}>
                Macchiato Cream Cheese
              </p>
              {datas!
                .filter((data) => data.category === "3")
                .map((item) => (
                  <CardProduct
                    key={item._id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
              <hr style={{ marginTop: "3%", marginBottom: "0" }} />
              <p className="products-scd" ref={suachuadeoSection}>
                Sữa chua dẻo
              </p>
              {datas!
                .filter((data) => data.category === "4")
                .map((item) => (
                  <CardProduct
                    key={item._id}
                    productImg={item.image}
                    productName={item.name}
                    price={item.price}
                    salePrice={item.salePrice}
                    item={item}
                    handleOpen={() => handleOpen()}
                    handleShowDetail={() => handleShowDetail(item)}
                  />
                ))}
            </div>
          </div>
          <div className="col-lg-3 col-12">
            <div className="cart container p-0 col-12 ">
              {showCartUp && (
                <div className="custom-cart-up col-12 row">
                  <div className="row-3 p-0 row custom-cart-header text-center">
                    <div className="col-7 p-0 ">GIỎ HÀNG</div>
                    <div
                      className="col-5 p-0"
                      onClick={() => {
                        deleteAllCart();
                      }}
                    >
                      Xóa tất cả
                    </div>
                  </div>
                  <hr />

                  {(productCarts &&
                    productCarts.map((item, index) => {
                      return (
                        <Cart
                          key={item.id}
                          cartName={item.name}
                          cartPrice={item.price}
                          cartSize={item.size}
                          cartTopping={item.topping.map((t: string) => {
                            return t === "1"
                              ? "trân châu sương mai"
                              : t === "2"
                              ? "hạt rẻ"
                              : "trân châu baby";
                          })}
                          cartIce={item.ice === "100ice" ? "100" : "50"}
                          cartSugar={item.sugar === "100sugar" ? "100" : "50"}
                          cartQuantity={item.quantitySelect}
                          handleIncrease={() => increase(index)}
                          handleDecrease={() => decrease(index)}
                        />
                      );
                    })) ||
                    checkEmpty}
                </div>
              )}
              <div className="custom-cart-down row p-0 d-flex align-items-center">
                <div
                  className="col-lg-12 col-5 custom-card-quantity p-0 d-flex align-items-center "
                  onClick={() => setShowCartUp(!showCartUp)}
                >
                  <img
                    src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-glass-tea.png"
                    alt=""
                  ></img>
                  x{" "}
                  {productCarts.length > 0
                    ? productCarts.reduce(
                        (total, currentValue) =>
                          (total = total + currentValue.quantitySelect!),
                        0
                      )
                    : null}
                  ={" "}
                  {productCarts.length > 0 &&
                    productCarts
                      .reduce(
                        (total, currentValue) =>
                          (total =
                            total +
                            currentValue.quantitySelect! *
                              (+currentValue.price! +
                                currentValue.topping.length * 9000)),
                        0
                      )
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                </div>
                <div className="col-lg-12 col-5">
                  <button
                    type="button"
                    className="btn custom-btn-pay"
                    onClick={handleClickOpen}
                    disabled={!productCarts.length}
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="custom-button-show-categories"
        onClick={() => setShowCategory(!showCategory)}
      >
        <ListIcon className="custom-list-icon" />
      </div>
      <ScrollToTop />
      <BasicModal
        setOpen={setOpen}
        open={open}
        productDetail={productDetail}
        productCarts={productCarts}
        setProductCarts={setProductCarts}
        INIT_DATA={INIT_DATA}
        seletedProduct={seletedProduct}
        setSeletedProduct={setSeletedProduct}
        context={context}
      />

      <div>
        <Dialog
          open={openCheckoutModal}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <div className="confirm-modal-wrap">
              <img
                src={ConfirmIcon}
                className="confirm-icon"
                alt="confirm -icon"
              />
              <h3 className="confirm-title">Xác nhận đặt hàng</h3>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Number order</TableCell>
                      <TableCell align="right">Image</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Size</TableCell>
                      <TableCell align="right">ToTal Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {productCarts.map((product, index) => (
                      <TableRow
                        key={product.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell align="right">
                          <img
                            src={product.productImg}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                            alt="product-img"
                          />
                        </TableCell>
                        <TableCell align="right">{product.name}</TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">
                          {product.quantitySelect}
                        </TableCell>
                        <TableCell align="right">{product.size}</TableCell>
                        <TableCell align="right">
                          {product.quantitySelect &&
                            product.price &&
                            product.quantitySelect * product.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Quay lại</Button>
            <Button onClick={handleOrders} autoFocus>
              Đặt hàng
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
});

export default Product;
