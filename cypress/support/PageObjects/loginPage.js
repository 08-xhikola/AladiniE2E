class LoginPage
{
    getLoginHoverMenu(){
        return cy.get('.header_user_info.hover')
    }

    getMenuCredentials(){
        return cy.get('.ets_solo_social_wrapper.hover.slw_and_alw.alw.mobile.clone')
    }

    getEmailField(){
        return cy.get("input[placeholder='Enter your email...']")
    }

    getPasswordField(){
        return cy.get("input[placeholder='Enter your password...']")
    }

    getLoginBtn(){
        return cy.get(".solo-submit-login-alw.btn.btn-primary")
    }

    getErrorModule(){
        return cy.get(".module_error.alert.alert-danger")
    }

   

}

export default LoginPage; 