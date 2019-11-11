// react
import React, { Component } from 'react';

// third-party
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// application
import Currency from '../shared/Currency';
import languages from '../../i18n';


class FilterPrice extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleChange = (value) => {
        const { locale } = this.props;
        const { direction } = languages[locale];
        let { min: from, max: to } = value;

        // since react-input-range does not support RTL direction,
        // we just need to invert and swipe values
        if (direction === 'rtl') {
            [from, to] = [to * -1, from * -1];
        }

        this.setState(() => ({ from, to }));
    };

    render() {
        const { from: stateFrom, to: stateTo } = this.state;
        const {
            locale,
            step,
            from: propsFrom,
            to: propsTo,
        } = this.props;
        let { min, max } = this.props;
        const { direction } = languages[locale];

        let from = Math.max(stateFrom || propsFrom || min, min);
        let to = Math.min(stateTo || propsTo || max, max);
        let fromLabel = from;
        let toLabel = to;

        // since react-input-range does not support RTL direction,
        // we just need to invert and swipe values
        if (direction === 'rtl') {
            [from, to] = [to * -1, from * -1];
            [min, max] = [max * -1, min * -1];
            [fromLabel, toLabel] = [from * -1, to * -1];
        }

        return (
            <div className="filter-price">
                <div className="filter-price__slider" dir="ltr">
                    <InputRange
                        minValue={min}
                        maxValue={max}
                        value={{ min: from, max: to }}
                        step={step}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="filter-price__title">
                    Price:
                    {' '}
                    <span className="filter-price__min-value"><Currency value={fromLabel} /></span>
                    {' – '}
                    <span className="filter-price__max-value"><Currency value={toLabel} /></span>
                </div>
            </div>
        );
    }
}

FilterPrice.propTypes = {
    from: PropTypes.number,
    to: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    /** current locale */
    locale: PropTypes.string,
};

FilterPrice.defaultProps = {
    from: undefined,
    to: undefined,
    min: 0,
    max: 100,
    step: 1,
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

export default connect(mapStateToProps)(FilterPrice);
