import {
  AiTwotoneHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {ListGroup} from 'react-bootstrap'
import { useRecoilState } from "recoil";
import { accountState, initialValues } from "../../../recoilProvider/userProvider";


function ProfilesCategory() {

  const [account,setAccount] = useRecoilState(accountState)

  const handleLogOut = () => { 
    setAccount(initialValues)
    localStorage.removeItem("account" )
   }

  return (
    <nav>
      <ListGroup>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiTwotoneHome />
          <Link to="/" className={`ms-2 text-decoration-none`}>Trang chủ</Link>
        </ListGroup.Item>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiOutlineUser />
          <Link to="/account/" className={`ms-2 text-decoration-none`}>Thông tin tài khoản</Link>
        </ListGroup.Item>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiOutlineShoppingCart />
          <Link to="/account/order" className={`ms-2 text-decoration-none`}>Đơn hàng</Link>
        </ListGroup.Item>
        <ListGroup.Item className = {`py-3 d-flex`}>
          <AiOutlineLogout />
          <Link to="/" className={`ms-2 text-decoration-none`} onClick = {handleLogOut}>Đăng xuất</Link>
        </ListGroup.Item>
      </ListGroup>
    </nav>
  );
}

export default ProfilesCategory;
