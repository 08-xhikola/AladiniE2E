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

    getSearchBar(){
        return cy.get("body > div:nth-child(2) > div:nth-child(1) > header:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > input:nth-child(1)")
     }

    getNewSearch(){
         return cy.get("#df-searchbox__dffullscreen")
     }

    getSearchResults(){
        return cy.get(".df-card__title")
    }

    getElementName(){
        return cy.get("div[class='name_section hidden-xs'] h1[class='product_name_pd']")
    }
   

}

export default HomePage; 