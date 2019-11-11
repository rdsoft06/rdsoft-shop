// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// data stubs
import dataAddresses from '../../data/accountAddresses';
import theme from '../../data/theme';


export default function AccountPageAddresses() {
    const addresses = dataAddresses.map((address) => (
        <React.Fragment key={address.id}>
            <div className="addresses-list__item card address-card">
                {address.default && <div className="address-card__badge"><FormattedMessage id="acount.Default" defaultMessage="Default" /></div>}

                <div className="address-card__body">
                    <div className="address-card__name">{`${address.firstName} ${address.lastName}`}</div>
                    <div className="address-card__row">
                        {address.country}
                        <br />
                        {address.postcode}
                        ,
                        {address.city}
                        <br />
                        {address.address}
                    </div>
                    <div className="address-card__row">
                        <div className="address-card__row-title"><FormattedMessage id="checkout.Phone" defaultMessage="Phone Number" /></div>
                        <div className="address-card__row-content">{address.phone}</div>
                    </div>
                    <div className="address-card__row">
                        <div className="address-card__row-title"><FormattedMessage id="checkout.Email_address" defaultMessage="Email Address" /></div>
                        <div className="address-card__row-content">{address.email}</div>
                    </div>
                    <div className="address-card__footer">
                        <Link to="/"><FormattedMessage id="acount.Edit" defaultMessage="Edit" /></Link>
                        &nbsp;&nbsp;
                        <Link to="/"><FormattedMessage id="acount.Remove" defaultMessage="Remove" /></Link>
                    </div>
                </div>
            </div>
            <div className="addresses-list__divider" />
        </React.Fragment>
    ));

    return (
        <div className="addresses-list">
            <Helmet>
                <title>{`Address List — ${theme.name}`}</title>
            </Helmet>

            <Link to="/" className="addresses-list__item addresses-list__item--new">
                <div className="addresses-list__plus" />
                <div className="btn btn-secondary btn-sm"><FormattedMessage id="acount.Add_New" defaultMessage="Add New" /></div>
            </Link>
            <div className="addresses-list__divider" />
            {addresses}
        </div>
    );
}
