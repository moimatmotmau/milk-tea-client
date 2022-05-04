import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import style from './Login.module.css'
import logo from './img/logo-removebg-preview.png'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { accountState } from '../../recoilProvider/userProvider';
import { IUser } from '../../interfaces';
import { usersApi } from '../../api/index'
import { IoClose } from 'react-icons/io5'


const Login = () => {
    const [account, setAccount] = useRecoilState<IUser>(accountState)

    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        if (account.username) {
            navigate("/")
        }
    }, [])
    const messageModals = useRef<any>()
    const [mess, setMess] = useState<string>("")
    const handleSetMessage = (message: string) => {
        setMess(message);
        messageModals.current.style.opacity = 1;
        messageModals.current.style.transform = 'translate(-50%, 150%)';
        setTimeout(() => {
            messageModals.current.style.opacity = 0;
            messageModals.current.style.transform = 'translate(-50%, -100%)';
        }, 2000);
    }
    const validationSchema = Yup.object().shape({

        userName: Yup.string()
            .required('Vui lòng nhập tài khoản'),

        password: Yup.string()
            .required('Vui lòng nhập mật khẩu'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;


    function onSubmit(data: any) {
        axios.get(`${usersApi}`)
            .then(response => {
                const datas: IUser[] = response.data
                const userFound = datas.find(user => {
                    return user.username === data.userName;
                })
                if (userFound && userFound.password === data.password) {
                    setAccount(userFound);
                    localStorage.setItem("account", JSON.stringify(userFound))
                    localStorage.setItem("cart", JSON.stringify(userFound.cart))
                    navigate("/")
                }
                else {
                    handleSetMessage("Tài khoản hoặc mặt khẩu không chính xác")
                }
            })
    }

    return (
        <>
            <div ref={messageModals} className={style.messageModal}>
                <div className={style.messageMessage}>{mess}</div>
                <div className={style.messageIcon}><IoClose /></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.wrap_popup_login_content}>
                    <div className={style.popup_login_content}>
                        <img className={style.logo_toco} src={logo} alt="" />


                        <div className={style.popup_login_input}>
                            <input id='userName' type="text" {...register('userName')} className={`${style.form_control} ${style.form_input} ${errors.userName ? 'is-invalid' : ''}`} placeholder="Tài khoản" />
                            <div className="invalid-feedback">{errors.userName?.message}</div>
                        </div>


                        <div className={style.popup_login_input}>
                            <input id="password" type="password" {...register('password')} className={`${style.form_control} ${style.form_input} ${errors.password ? 'is-invalid' : ''}`} placeholder="Mật khẩu..." />
                            <div className="invalid-feedback">{errors.password?.message}</div>

                        </div>


                        <div className={style.sugget_text}>
                            <div className={style.link}>
                                <span className={style.span_text}>
                                    <span className={style.span_text}>Quên mật khẩu</span>
                                </span>
                            </div>
                        </div>

                        <div className={style.btn}>
                            <button type="submit" className={`${style.btn_yellow} ${style.buton} `}>Đăng nhập</button>



                        </div>

                        <div className={style.sugget_text}>
                            <div className={style.text}>
                                <span className={style.span_text}>
                                    <a className={`${style.span_text} ${style.alink}`}>Bạn chưa có tài khoản?</a>
                                </span>
                            </div>
                            <div className={style.link}>
                                <span className={style.span_text}>
                                    <Link to='/CreateAccount' className={style.span_text}>Đăng ký</Link>
                                </span>
                            </div>
                        </div>
                        <div className={style.sugget_text}>
                            <a href="#" className={`${style.back_home} ${style.alink}`}>
                                <span className={style.span_text}>
                                    <Link to='/' className={style.span_text}>Quay lại màn hình chính</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </>)
}





export default Login

function typeOf(typeOf: any, username: string): void {
    throw new Error('Function not implemented.');
}
