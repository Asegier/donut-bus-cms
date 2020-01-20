/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    FormControlFeedback
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";

import { withTranslation } from "react-i18next";

class ForgotPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        cardHidden: true,
        email: "",
        password: "",
        checkInput: false,
        error: "hidden",
        errorClass: "formError",
        complete: false,
        req1: "",
        req2: "",
        req3: "",
        req4: "",
        };
        // this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
        this.passwordAgainInput = React.createRef();
    }

    hasLowerCase = (str) => {
        return (/[a-z]/.test(str));
    }
    hasUpperCase = (str) => {
        return (/[A-Z]/.test(str));
    }
    hasSymbolOrNumber = (str) => {
        return (/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]|[0-9]/.test(str));
    }

    onType = () => {
        const pass = this.passwordInput.value;
        const pass2 = this.passwordAgainInput.value;
        if(this.passwordInput.value){
            if(pass.length > 7 && this.state.req1 !== "checked"){
                console.log("length longer than 7");
                this.setState({req1: "checked"});
            } else if (pass.length < 8 && this.state.req1 === "checked"){
                this.setState({req1: ""})
            }
            if(this.hasUpperCase(pass) && this.state.req2 !== "checked"){
                console.log("upper case");
                this.setState({req2: "checked"});
            } else if (!this.hasUpperCase(pass) && this.state.req2 === "checked") {
                this.setState({req2: ""})
            }
            if(this.hasLowerCase(pass) && this.state.req3 !== "checked"){
                console.log("lower case");
                this.setState({req3: "checked"});
            } else if (!this.hasLowerCase(pass) && this.state.req3 === "checked") {
                console.log("no lower case");
                this.setState({req3: ""})
            }
            if(this.hasSymbolOrNumber(pass) && this.state.req4 !== "checked"){
                console.log("this is symbol or number");
                this.setState({req4: "checked"});
            } else if(!this.hasSymbolOrNumber(pass) && this.state.req4 === "checked") {
                this.setState({req4: ""})
            }
        } else {
            this.setState({
                req1: "",
                req2: "",
                req3: "",
                req4: "",
            })
        }
        if(this.state.req1 === "checked" && this.state.req2 === "checked" && this.state.req3 === "checked" && this.state.req4 === "checked" && pass === pass2){
            this.setState({checkInput: true});
        } else {
            this.setState({checkInput: false});
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({complete: true});
    }


render() {
    const { t } = this.props;
    let loginBtn;
    if (this.state.checkInput){
        loginBtn = <Button bsStyle="login" fill wd onClick={this.handleSubmit} type="submit">
        {t('resetBtn')}
    </Button>
    } else {
        loginBtn = <Button bsStyle="login" fill wd disabled >
        {t('resetBtn')}
    </Button>
    }
    return (
        <div className="loginPage">
            {!this.state.complete &&
                <form onSubmit={this.handleSubmit}>
                    <Card
                        title={t('resetTitle')}
                        reset
                        content={
                        <div style={{width: "100%"}}>
                            <Grid style={{maxWidth: "100%"}}>
                                <FormGroup validated>
                                    <Row>
                                        <Col md="3" style={{paddingLeft: 0}}>
                                            {t('resetPassword')}
                                        </Col>
                                        <Col md="9">
                                            <FormControl inputRef={ref => { this.passwordInput = ref; }} placeholder={t('resetPasswordPlaceholder')} type="password" onKeyUp={this.onType}  className={`formError`}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup validated>
                                    <Row>
                                        <Col md="3" style={{paddingLeft: 0}}>
                                            {t('resetPasswordAgain')}
                                        </Col>
                                        <Col md="9">
                                            <FormControl inputRef={ref => { this.passwordAgainInput = ref; }} placeholder={t('resetPasswordPlaceholder')} type="password" onKeyUp={this.onType} className={`formError`}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <Row>
                                        <Col md="3" style={{paddingLeft: 0}}>
                                        </Col>
                                        <Col md="9">
                                            <ul className="resetList">
                                                <li className={` ${this.state.req1}`}>
                                                    {t('resetRequirements1')}
                                                </li>
                                                <li className={`${this.state.req2}`}>
                                                    {t('resetRequirements2')}
                                                </li>
                                                <li className={`${this.state.req3}`}>
                                                    {t('resetRequirements3')}
                                                </li>
                                                <li className={`${this.state.req4}`}>
                                                    {t('resetRequirements4')}
                                                </li>                                                
                                            </ul>
                                        </Col>
                                    </Row>
                            </Grid>
                            
                        </div>
                        }
                        legend={ loginBtn }
                        ftTextCenter
                    />
                </form>
            }
            
            {this.state.complete &&
                <Card
                hidden={this.state.cardHidden}
                title={t('forgotCompleteTitle')}
                forgetComplete
                content={
                <div style={{width: "100%"}}>
                    <Grid style={{maxWidth: "100%"}}>
                        <FormGroup validated>
                            <Row>
                                <div className="forgotText"> {t('forgotCompleteText')} </div>
                            </Row>
                        </FormGroup>
                    </Grid>
                    
                </div>
                }
                ftTextCenter
            />
            }
            
        </div>

        );
    }
}

export default withTranslation()(ForgotPasswordPage);
