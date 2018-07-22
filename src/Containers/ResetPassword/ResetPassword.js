import React,{Component} from 'react'
import Logo from '../../Components/Logo/Logo'

class ResetPassword extends Component {
    state = {
        shown: false
    }

    showMessageHandler = () => {
        this.setState({
            shown: true
        })
    }
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 content">
                            <div>
                                <h1 className={"title"}>Восстановление пароля</h1>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="usrEmail">Email:</label>
                                        <input type="email" className="form-control" id="usrEmail" required/>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block orange" onClick={() => this.showMessageHandler()}>OK</button>
                                    {this.state.shown && <p className="hidden-message">На вашу почту было отправлено письмо</p>}
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

export default ResetPassword