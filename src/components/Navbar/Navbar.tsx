import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle, AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';
import { TiArrowSortedUp } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';
import {cateSelectedState} from '../../recoilProvider/cateSelectedState'

import style from './Navbar.module.css';
import logo from './logo-removebg-preview.png';
import { accountState, initialValues } from '../../recoilProvider/userProvider';

const Navbar = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [account, setAccount] = useRecoilState(accountState)
  const [cateState, setCateState] = useRecoilState(cateSelectedState)
  const navbar = useRef<any>(null);
  const navMenu = useRef<any>(null);
  const subNavIntro = useRef<any>(null);
  const subNavNew = useRef<any>(null);

  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleOpenMenu = () => {
    navMenu.current.style = "transform: translateX(0); opacity: 1;"
  }

  const handleCloseMenu = () => {
    navMenu.current.style = "transform: translateX(100%); opacity: 0;"
  }

  const handleMoreClick = (e: typeof navMenu, show: boolean, setShow: Function) => {
    setShow(!show)
    if (!show) {
      e.current.style.display = "block";
    } else {
      e.current.style.display = "none";
    }
  }

  const handleScroll = () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 0) {
      navbar.current.style.backgroundColor = "#282828";
    } else {
      navbar.current.style.backgroundColor = "unset";
    }
  }

  const handleLogout = () => {
    setAccount(initialValues);
    localStorage.setItem("account", JSON.stringify(initialValues))
    localStorage.setItem("cart", JSON.stringify([]))
    navigate("/login")
  }


  return (
    <div ref={navbar} className={style.navbar}>
      <Container>
        <div className={style.nav_container}>
          <Link to="/">
            <img src={logo} alt="logo" className={style.logo} />
          </Link>
          <GiHamburgerMenu
            onClick={handleOpenMenu}
            className={style.nav_menu_icon}
          />
          <ul ref={navMenu} className={style.list_nav}>
            <span className={style.nav_close_icon}>
              <AiFillCloseCircle onClick={handleCloseMenu} />
            </span>
            <li className={style.nav_element}>
              <Link to="/" className={style.nav_link}>
                Trang chủ
              </Link>
            </li>
            <li className={style.nav_element}>
              <Link to="/introdution" className={style.nav_link}>
                Giới thiệu
              </Link>
              <AiOutlinePlus
                className={style.nav_icon_more}
                onClick={() => handleMoreClick(subNavIntro, show1, setShow1)}
              />
            </li>
            <li className={style.nav_element}>
              <Link to="/product" className={style.nav_link}>
                Sản phẩm
              </Link>
            </li>
            <li className={style.nav_element}>
              <Link onClick={()=>{setCateState(''); window.scroll(0, 0)}} to="/News" className={style.nav_link}>
                Tin tức
              </Link>
              <AiOutlinePlus
                className={style.nav_icon_more}
                onClick={() => handleMoreClick(subNavNew, show2, setShow2)}
              />
            </li>
            <li className={style.nav_element}>
              <Link to="/historyAndMission" className={style.nav_link}>
                Lịch sử & sứ mệnh
              </Link>
            </li>
            <li className={style.nav_element}>
              <Link to="/recruit" className={style.nav_link}>
                Tuyển dụng
              </Link>
            </li>
            {account.username ?
              <li className={style.nav_element_avatar}>
                <Link to="/account" className={style.nav_link}>
                  <div className={style.avatar_wrap} >
                    <img className={style.avatar} src={`${account.avatar}`} alt="avatar" />
                  </div>
                </Link>
                <div className={style.logout} onClick={handleLogout}>
                  <TiArrowSortedUp className={style.icon_arrow} />
                  <p className={style.logout_text}>
                    <AiOutlineLogout className={style.logout_icon} />
                    Đăng xuất
                  </p>
                </div>
              </li> :
              <li className={style.nav_element}>
                <Link to="/Login" className={style.nav_link}>
                  Đăng nhập
                </Link>
              </li>
            }
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar