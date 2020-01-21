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

import axios from 'axios';
import oauth from 'axios-oauth-client';

import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";

import { withTranslation } from "react-i18next";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      email: "",
      password: "",
      checkInput: false,
      error: "hidden",
      errorClass: "formError"
    };
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
  }

  onType = () => {
      if(this.emailInput.value && this.passwordInput.value){
          this.setState({checkInput: true});
      } else {
          this.setState({checkInput: false});
      }
}

  handleSubmit = async (e) => {
    e.preventDefault();
    // const encodedUserPass = btoa(`${this.emailInput.value}:${this.passwordInput.value}`);
    const encodedUserPass = btoa("super_admin_1:12qwQW!@");
    const getClientCredentials = oauth.client(axios.create({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${encodedUserPass}`
      }
    }), {
      url: 'http://13.75.68.87:8080/oauth/token',
      grant_type: 'client_credentials',
    })
    const auth = await getClientCredentials();

    console.log('this is the auth', auth);
    this.setState({error: ""});
  }


  render() {
      const { t } = this.props;
      let loginBtn;
      if (this.state.checkInput){
          loginBtn = <Button bsStyle="login" fill wd onClick={this.handleSubmit} type="submit">
          {t('loginBtn')}
      </Button>
      } else {
        loginBtn = <Button bsStyle="login" fill wd disabled >
        {t('loginBtn')}
    </Button>
      }
    return (
        <div className="loginPage">
            <form onSubmit={this.handleSubmit}>
            <Card
                hidden={this.state.cardHidden}
                title={t('loginTitle')}
                login
                content={
                <div style={{width: "100%"}}>
                    <Grid style={{maxWidth: "100%"}}>
                        <FormGroup validated>
                            <Row>
                                <Col md="3">
                                    {t('testing')}
                                </Col>
                                <Col md="9">
                                    <FormControl inputRef={ref => { this.emailInput = ref; }} placeholder={t('emailPlaceholder')} type="email" onChange={this.onType} className={`formError`}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup validated>
                            <Row>
                                <Col md="3">
                                    {t('password')}
                                </Col>
                                <Col md="9">
                                    <FormControl inputRef={ref => { this.passwordInput = ref; }} placeholder={t('passwordPlaceholder')} type="password" autoComplete="off" onChange={this.onType}/>
                                    <p className={`loginError ${this.state.error}`}>{t('errorMsg')}</p>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Grid>
                    
                </div>
                }
                legend={ loginBtn }
                forgotPassword={
                    <div className="text-right"><a href="/forgot" className="forgotPassword">{t('forgotPassword')}</a></div>
                }
                ftTextCenter
            />
            </form>
        </div>
      
    );
  }
}

export default withTranslation()(Login);
