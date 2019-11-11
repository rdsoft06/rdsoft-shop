// react
import React from 'react';

// third-party
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import languages from '../../i18n';
import MegamenuLinks from './MegamenuLinks';


function Megamenu(props) {
    const { menu, location, locale } = props;
    const { direction } = languages[locale];

    if (!menu) {
        return [];
    }

    const menuStyle = {
        backgroundImage: menu.image ? `url('${menu.image[direction]}')` : '',
    };

    const columns = menu.columns.map((column, index) => (
        <div key={index} className={`col-${column.size}`}>
            <MegamenuLinks links={column.links} />
        </div>
    ));

    return (
        <div className={`megamenu megamenu--${location}`} style={menuStyle}>
            <div className="row">
                {columns}
            </div>
        </div>
    );
}

Megamenu.propTypes = {
    /** menu object (required) */
    menu: PropTypes.object,
    /** one of ['nav-links', 'department'] (default: 'nav-links') */
    location: PropTypes.oneOf(['nav-links', 'department']),
    /** current locale */
    locale: PropTypes.string,
};

Megamenu.defaultProps = {
    location: 'nav-links',
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

export default connect(mapStateToProps)(Megamenu);
