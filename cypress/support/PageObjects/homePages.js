class HomePage
{
    getCategoryMenu(){
        return cy.get(".sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows li")
    }

    getNewElements(){
        return cy.get("div[id='htmlcontent_top'] li[class='htmlcontent-item-2 col-xs-4'] div[class='item-html']")
    }

    getElementToBuy(){
        return cy.get("h5[class='emri'] a[title='LOOP CABLE 1.2M INTEX PER UPS']")
     }

    getAlertDismiss(){
        return cy.get("#onesignal-slidedown-dialog #onesignal-slidedown-cancel-button")
     }

    // getLoginBtn(){
    //     return cy.get()
    // }

    // getErrorModule(){
    //     return cy.get()
    // }

   

}

export default HomePage; 