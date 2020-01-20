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
/*eslint-disable*/
import React, { Component } from "react";

import { withTranslation } from "react-i18next";

class Footer extends Component {
  render() {
    const { t } = this.props;
    return (
      <footer
        className={
          "footer" +
          (this.props.transparent !== undefined ? " footer-transparent" : "") +
          (this.props.small !== undefined ? " footer-small" : "")
        }
      >
        <div
          className={
            "container" + (this.props.fluid !== undefined ? "-fluid" : "")
          }
        >
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">{t('footerLink1')}</a>
              </li>
              <li>
                <a href="#pablo">{t('footerLink2')}</a>
              </li>
              <li>
                <a href="#pablo">{t('footerLink3')}</a>
              </li>
              <li>
                <a href="#pablo">{t('footerLink4')}</a>
              </li>
              <li>
                <a href="#pablo">{t('footerLink5')}</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            {t('footerCopyright')}
          </p>
        </div>
      </footer>
    );
  }
}
export default withTranslation()(Footer);
