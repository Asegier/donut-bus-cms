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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true,
      email: "",
      password: "",
      checkInput: false
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
    console.log(this.emailInput.value)
}

  handleSubmit = () => {
    console.log('submitting');
  }


  render() {
      const { t } = this.props;
      let loginBtn;
      if (this.state.checkInput){
          loginBtn = <Button bsStyle="login" fill wd >
          {t('loginBtn')}
      </Button>
      } else {
        loginBtn = <Button bsStyle="login" fill wd disabled >
        {t('loginBtn')}
    </Button>
      }
    return (
        <div className="loginPage">
            <form>
            <Card
                hidden={this.state.cardHidden}
                title="Donut Bus 管理平台"
                login
                content={
                <div style={{width: "100%"}}>
                    <Grid style={{maxWidth: "100%"}}>
                        <FormGroup validated>
                            <Row>
                                <Col md="3">
                                    {t('email')}
                                </Col>
                                <Col md="9">
                                    <FormControl validated required inputRef={ref => { this.emailInput = ref; }} placeholder={t('emailPlaceholder')} type="email" onChange={this.onType} />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup validated>
                            <Row>
                                <Col md="3">
                                    {t('password')}
                                </Col>
                                <Col md="9">
                                    <FormControl required inputRef={ref => { this.passwordInput = ref; }} placeholder={t('passwordPlaceholder')} type="password" autoComplete="off" onChange={this.onType}/>
                                    <p className="error">{t('errorMsg')}</p>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Grid>
                    
                </div>
                }
                legend={ loginBtn }
                forgotPassword={
                    <div className="text-right">{t('forgotPassword')}</div>
                }
                ftTextCenter
            />
            </form>
        </div>
      
    );
  }
}

export default withTranslation()(Login);
