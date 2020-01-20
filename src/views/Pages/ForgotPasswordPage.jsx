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
        complete: false
        };
        this.emailInput = React.createRef();
        // this.passwordInput = React.createRef();
    }

    onType = () => {
        if(this.emailInput.value){
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
        {t('forgotBtn')}
    </Button>
    } else {
        loginBtn = <Button bsStyle="login" fill wd disabled >
        {t('forgotBtn')}
    </Button>
    }
    return (
        <div className="loginPage">
            {!this.state.complete &&
                <form onSubmit={this.handleSubmit}>
                    <Card
                        title={t('forgotTitle')}
                        forget
                        content={
                        <div style={{width: "100%"}}>
                            <Grid style={{maxWidth: "100%"}}>
                                <FormGroup validated>
                                    <Row>
                                        <div className="forgotText"> {t('forgotText')} </div>
                                        <Col md="3" style={{paddingLeft: 0}}>
                                            {t('email')}
                                        </Col>
                                        <Col md="9">
                                            <FormControl inputRef={ref => { this.emailInput = ref; }} placeholder={t('emailPlaceholder')} type="email" onChange={this.onType} className={`formError`}/>
                                        </Col>
                                    </Row>
                                </FormGroup>
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
