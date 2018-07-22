import React, {Component} from  'react'
import Logo from '../../Components/Logo/Logo'

class Login extends Component {
    render() {
        return (
            <div className={"LoginPage"}>
                <div className={"header"}>
                    <div className={"headerItem"}>
                        <Logo />
                    </div>
                    <div>
                        <h1 className={"registrationButton"}>Регистрация</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 content">
                            <div>
                                <h1 className={"title"}>Войдите в аккаунт</h1>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="usr">Name:</label>
                                        <input type="text" className="form-control" id="usr" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password:</label>
                                        <input type="password" className="form-control" id="pwd" required/>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block orange">GO</button>
                                    <p className={"text-right forgetMessage"}>Забыли пароль?</p>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login