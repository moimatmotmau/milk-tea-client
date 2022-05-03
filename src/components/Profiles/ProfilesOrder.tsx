import { useRecoilState } from 'recoil';
import { Button, Container, Modal, Table } from "react-bootstrap";
import { accountState } from "../../recoilProvider/userProvider";
import { useState, useEffect } from "react";
import style from './ProfilesOrder.module.css'
import axios from 'axios';
import{usersApi} from '../../api/index'

interface Iproduct {
  fullName: string;
  time: string;
  status: string;
  paid: boolean;
  username: string;
  phone: string;
  address: string;
  orders: Array<{
    name: string;
    size: string;
    ice: string;
    sugar: string;
    quantitySelect: number;
    price: number;
    total: number;
    topping: any[];
  }>;
}

interface IOrders {
  name: string;
  size: string;
  ice: string;
  sugar: string;
  quantitySelect: number;
  price: number;
  total: number;
  topping: any[];
}

const api = `${usersApi}`

function ProfilesOrder() {
  const [dataUser, setDataUser] = useRecoilState(accountState);
  const [show, setShow] = useState<boolean>(false);
  const [dataOrder, setDataOrder] = useState<IOrders[]>([]);
  const [orders, setOrders] = useState<Iproduct[]>([])

  useEffect(() => {
    axios.get(`${api}/${dataUser._id}`)
      .then(res => setOrders(res.data.orders))
  }, [])
  const handleClick = (order: Iproduct) => {
    setShow(true);
    setDataOrder(order.orders);
  };
  return (
    <>
      <Container className={`mt-3 ps-0`} fluid>
        <Table size="lg" className={`${style.tableOrder}`} bordered>
          <thead>
            <tr>
              <th>Người đặt</th>
              <th>Địa chỉ</th>
              <th> Số điện thoại</th>
              <th>Chi tiết</th>
              <th>Trạng thái</th>
              <th>Thanh toán</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order: Iproduct) => {
                return (
                  <tr>
                    <td  >{order.fullName}</td>
                    <td>{order.address}</td>
                    <td>{order.phone}</td>
                    <td>
                      <Button onClick={() => handleClick(order)}>
                        Chi tiết
                      </Button>
                    </td>
                    <td >
                      {order.status === "1" ? (
                        <p className={`text-danger`}>Chờ xác nhận</p>
                      ) : order.status === "2" ? (
                        <p className={`text-warning`}>Đang giao hàng</p>
                      ) : order.status === "3" ? (
                        <p className={`text-success`}>Đã giao hàng</p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      {order.paid ? (
                        <p className={`text-success`}>Đã thanh toán</p>
                      ) : (
                        <p className={`text-danger`}>Chưa thanh toán</p>
                      )}
                    </td>

                  </tr>
                );
              })
            ) : (
              <p className={`py-3`}>không có đơn hàng nào </p>
            )}
          </tbody>
        </Table >
      </Container>
      <Modal show={show} onHide={() => setShow(false)} size="xl" >
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đơn hàng</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
        <Table bordered className="overflow-scroll">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Số lượng</th>
              <th >Size</th>
              <th >Đá</th>
              <th >Đường</th>
              <th >Topping</th>
              <th>Đơn giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {dataOrder.map((item: IOrders) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantitySelect}</td>
                  <td>{item.size ? <span>L</span> : <span>M</span>}</td>
                  <td >
                    {item.ice ? <span>Có đá</span> : <span>Không đá</span>}
                  </td>
                  <td >{item.sugar ? <span>100%</span> : <span>50%</span>}</td>
                  <td >
                    {item.topping.map((tp: any, index: any) =>
                      tp === "1" ? (
                        <span key={index}>Trân châu sương mai   </span>
                      ) : tp === "2" ? (
                        <span key={index}>Hạt dẻ  </span>
                      ) : tp === "3" ? (
                        <span key={index}>Trân châu Baby</span>
                      ) : (
                        ""
                      )
                    )}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.total}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>Tổng thanh toán</td>
              <td>
                {
                  (() => {
                    let totalPrice: number = dataOrder.reduce((a: any, b: any) => a + Number(b.total), 0);
                    return ` ${totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}`
                  })()
                }
              </td>
            </tr>
          </tfoot>
        </Table>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfilesOrder;
