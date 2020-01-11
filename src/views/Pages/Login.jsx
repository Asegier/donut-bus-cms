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
      password: ""
    };
    this.emailInput = React.createRef();
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
  }

  onType = (e) => {
    const email = this.state.email;
    console.log('email', email);
}

  handleSubmit = () => {

  }

  render() {
      const { t } = this.props;
    return (
        <div className="loginPage">
            <form onSubmit={this.handleSubmit}>
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
                                    <FormControl validated required placeholder={t('emailPlaceholder')} type="email" onChange={this.onType}/>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup validated>
                            <Row>
                                <Col md="3">
                                    {t('password')}
                                </Col>
                                <Col md="9">
                                    <FormControl required placeholder={t('passwordPlaceholder')} type="password" autoComplete="off" onChange={this.onType}/>
                                    <p className="error">{t('errotMsg')}</p>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Grid>
                    
                </div>
                }
                legend={
                <Button bsStyle="login" fill wd disabled>
                    {t('loginBtn')}
                </Button>
                }
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
