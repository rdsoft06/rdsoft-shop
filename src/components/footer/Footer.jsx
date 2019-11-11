// react
import React from 'react';

// application
import FooterContacts from './FooterContacts';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';

// data stubs
import theme from '../../data/theme';


export default function Footer() {
    const informationLinks = [
        { title: <FormattedMessage id="footer.About_Us" defaultMessage="About Us" />, url: '' },
        { title: <FormattedMessage id="footer.Delivery_Information" defaultMessage="Delivery Information" />, url: '' },
        { title: <FormattedMessage id="footer.Privacy_Policy" defaultMessage="Privacy Policy" />, url: '' },
        { title: <FormattedMessage id="footer.Brands" defaultMessage="Brands" />, url: '' },
        { title: <FormattedMessage id="footer.Contact_Us" defaultMessage="Contact Us" />, url: '' },
        { title: <FormattedMessage id="footer.Returns" defaultMessage="Returns" />, url: '' },
        { title: <FormattedMessage id="footer.Site_Map" defaultMessage="Site Map" />, url: '' },
    ];
    const accountLinks = [
        { title: <FormattedMessage id="footer.Store_Location" defaultMessage="Store Location" />, url: '' },
        { title: <FormattedMessage id="footer.Order_History" defaultMessage="Order History" />, url: '' },
        { title: <FormattedMessage id="footer.Wish_List" defaultMessage="Wish List" />, url: '' },
        { title: <FormattedMessage id="footer.Newsletter" defaultMessage="Newsletter" />, url: '' },
        { title: <FormattedMessage id="footer.Specials" defaultMessage="Specials" />, url: '' },
        { title: <FormattedMessage id="footer.Gift_Certificates" defaultMessage="Gift Certificates" />, url: '' },
        { title: <FormattedMessage id="footer.Affiliate" defaultMessage="Affiliate" />, url: '' },	
    ];
    return (
        <div className="site-footer">
            <div className="container">
                <div className="site-footer__widgets">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FooterContacts />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title=<FormattedMessage id="footer.Information" defaultMessage="Information" /> items={informationLinks} />
                        </div>
                        <div className="col-6 col-md-3 col-lg-2">
                            <FooterLinks title=<FormattedMessage id="footer.My_Account" defaultMessage="My Account" /> items={accountLinks} />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <FooterNewsletter />
                        </div>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__copyright">
                        Powered by
                        {' '}
                        <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>
                        {' '}
                        — Design by
                        {' '}
                        <a href={theme.author.profile_url} target="_blank" rel="noopener noreferrer">
                            {theme.author.name}
                        </a>
                    </div>
                    <div className="site-footer__payments">
                        <img src="images/payments.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
