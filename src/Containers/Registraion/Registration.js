import React, {Component} from  'react'
import Logo from '../../Components/Logo/Logo'
import plus from '../../assets/images/plus-symbol.png'
class Login extends Component {
    render() {
        return (
            <div className={"LoginPage"}>
                <div className={"header"}>
                    <div className={"headerItem"}>
                        <Logo />
                    </div>
                    <div>
                        <h1 className={"registrationButton"}>Войти</h1>
                    </div>
                </div>

                <div className={"registration"}>
                    <h1 className={"title"}>Регистрация</h1>
                    <div className="container">
                        <div className="modal-body row" style={{marginTop: '20px'}}>
                            <div className="col-md-6">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="usrName">Введите Имя:</label>
                                        <input type="text" className="form-control" id="usrName" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="usrSurname">Введите Фамилию:</label>
                                        <input type="text" className="form-control" id="usrSurname" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="usrEmail">E-mail:</label>
                                        <input type="email" className="form-control" id="usrEmail" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="usrTelephone">Телефон:</label>
                                        <input type="text" className="form-control" id="usrTelephone" placeholder={"+7 (7__)___ __ __"} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Введите пароль:</label>
                                        <input type="password" className="form-control" id="pwd" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwdConfirm">Введите пароль еще раз</label>
                                        <input type="password" className="form-control" id="pwdConfirm" required/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 col-md-offset-2 text-center">
                                <div className={"box"}>
                                    <div className={"x"}>
                                        <input type="file" id="file1" name="image" accept="image/*" capture style={{display: 'none'}}/>
                                        <img src={plus} id="upfile1" />
                                    </div>
                                    <div className={""}>
                                        <h1>Добавить фото профиля</h1>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary btn-lg btn-block orange">GO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login