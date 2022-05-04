import { useEffect, useState, useRef } from "react";
import style from "./CreateAccount.module.css"
import logo from '../login/img/logo-removebg-preview.png'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { usersApi } from '../../api/index'
import { IUser } from '../../interfaces/models'
import { IoClose } from 'react-icons/io5'

const CreateAccount = () => {
    const [err, setErr] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const validationSchema = Yup.object().shape({

        username: Yup.string()
            .min(5, 'Tài khoản tối thiểu 5 ký tự')
            .max(16, "Tài khoản tối đa 16 ký tự")
            .matches(/^[a-zA-Z0-9]+$/, "Tài khoản không hợp lệ")
            .required('Vui lòng nhập trường này'),
        password: Yup.string()
            .min(6, 'Mật khẩu phải có tối thiểu 6 ký tự')
            .max(16, "Mật khẩu có tối đa 16 ký tự")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, 'Password phải có 1 ký tự viết hoa và 1 ký tự số')
            .required('Vui lòng nhập trường này'),
        email: Yup.string()
            .required('Vui lòng nhập trường này')
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Nhập lại email. VD: anh@gmail.com'),

        phone: Yup.string()
            .typeError("Nhập sai định dạng")
            .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im, "Số điện thoại phải có ít nhất 10 số")
            .required('Vui lòng nhập trường này'),

        fullName: Yup.string()
            .min(3, 'Vui lòng nhập tối thiểu 3 ký tự')
            .matches(/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u, 'Vui lòng nhập đúng định dạng. VD: Nguyễn Văn A')
            .required('Vui lòng nhập trường này'),
        address: Yup.string()
            .min(3, 'Vui lòng nhập tối thiểu 3 ký tự')
            .matches(/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u, 'Vui lòng nhập đúng định dạng. VD: Hà Nội')
            .required('Vui lòng nhập trường này'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

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

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;
    function onSubmit(data: any) {
        setDisabled(true)
        axios.get(`${usersApi}`)
            .then(res => {
                const users = res.data
                const check = users.find((user: IUser) => user.username === data.username)
                if (check) {
                    setErr(true)
                    setDisabled(false)
                } else {
                    const dataPost = { ...data, age: '', avatar: '' }
                    axios.post(`${usersApi}`, dataPost)
                        .then(res => {
                            handleSetMessage('Đăng ký thành công')
                            setDisabled(false)
                            navigate("/login")
                        })
                        .catch(err => { console.log('register error: ', err) })
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
                        <img className={style.logo_toco} src={logo} alt="logo" />
                        <div className={style.popup_login_input}>
                            <input
                                id='username'
                                type="text"
                                {...register('username')}
                                className={`${style.form_control} ${style.form_input} ${errors.username ? 'is-invalid' : ''}`}
                                placeholder="Nhập tài khoản của bạn"
                                onChange={() => setErr(false)}
                            />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                            {err && <span style={{ color: "red" }}>Tài khoản đã tồn tại</span>}
                        </div>

                        <div className={style.popup_login_input}>
                            <input id="password" type="password" {...register('password')} className={`${style.form_control} ${style.form_input} ${errors.password ? 'is-invalid' : ''}`} placeholder="Nhập mật khẩu của bạn" />
                            <div className="invalid-feedback">{errors.password?.message}</div>

                        </div>
                        <div className={style.popup_login_input}>
                            <input id="email" type="email" {...register('email')} className={`${style.form_control} ${style.form_input} ${errors.email ? 'is-invalid' : ''}`} placeholder="Nhập email của bạn" />
                            <div className="invalid-feedback">{errors.email?.message}</div>
                        </div>



                        <div className={style.popup_login_input}>
                            <input type="text" id="phone" {...register('phone')} className={`${style.form_control} ${style.form_input} ${errors.phone ? 'is-invalid' : ''}`} placeholder="Nhập số điện thoại của bạn" />

                            <div className="invalid-feedback">{errors.phone?.message}</div>
                        </div>

                        <div className={style.popup_login_input}>

                            <input type="text" id="fullName" {...register('fullName')} className={`${style.form_control} ${style.form_input} ${errors.fullName ? 'is-invalid' : ''}`} placeholder="Nhập tên đầy đủ của bạn" />
                            <div className="invalid-feedback">{errors.fullName?.message}</div>
                        </div>


                        <div className={style.popup_login_input}>
                            <input type="text" id="address" {...register('address')} className={`${style.form_control} ${style.form_input} ${errors.address ? 'is-invalid' : ''}`} placeholder="Nhập địa chỉ của bạn" />

                            <div className="invalid-feedback">{errors.address?.message}</div>
                        </div>


                        <div className={style.btn}>
                            {
                                disabled ?
                                    <button type="submit" className={`${style.btn_yellow} ${style.buton}`} disabled>Vui lòng chờ...</button>
                                    :
                                    <button type="submit" className={`${style.btn_yellow} ${style.buton}`}>Đăng ký</button>
                            }
                        </div>
                        <div className={style.sugget_text}>
                            <div className={style.text}>
                                <span className={style.span_text}>
                                    <span className={style.span_text}>Bạn đã có tài khoản?</span>
                                </span>
                            </div>
                            <div className={style.link}>
                                <span className={style.span_text}>
                                    <Link to='/Login' className={style.span_text}>Đăng nhập</Link>
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
        </>
    )
}


export default CreateAccount