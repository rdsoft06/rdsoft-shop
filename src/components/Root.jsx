// react
import React, { Component } from 'react';

// third-party
import PropTypes from 'prop-types';
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ScrollContext } from 'react-router-scroll-4';

// application
import languages from '../i18n';
import { localeChange } from '../store/locale';

// pages
import Layout from './Layout';
import HomePageOne from './home/HomePageOne';
import HomePageTwo from './home/HomePageTwo';
/* GOOGLE_ANALYTICS_START */
import Analytics from './Analytics';
/* GOOGLE_ANALYTICS_END */


class Root extends Component {
    componentDidMount() {
        // preloader
        setTimeout(() => {
            const preloader = document.querySelector('.site-preloader');

            preloader.addEventListener('transitionend', (event) => {
                if (event.propertyName === 'opacity') {
                    preloader.parentNode.removeChild(preloader);
                }
            });
            preloader.classList.add('site-preloader__fade');
        }, 500);

        // this is for demo only, you can delete it
        const { localeChange: changeLocale } = this.props;
        const direction = new URLSearchParams(window.location.search).get('dir');

        if (direction !== null) {
            changeLocale(direction === 'rtl' ? 'ar' : 'en');
        }
    }

    render() {
        const { locale } = this.props;
        const { messages, direction } = languages[locale];

        return (
            <IntlProvider locale={locale} messages={messages}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Helmet htmlAttributes={{ lang: locale, dir: direction }} />
                    {/* GOOGLE_ANALYTICS_START */}
                    <Analytics />
                    {/* GOOGLE_ANALYTICS_END */}
                    <ScrollContext>
                        <Switch>
                            <Route
                                path="/home-two"
                                render={(props) => (
                                    <Layout {...props} headerLayout="compact" homeComponent={HomePageTwo} />
                                )}
                            />
                            <Route
                                path="/"
                                render={(props) => (
                                    <Layout {...props} headerLayout="default" homeComponent={HomePageOne} />
                                )}
                            />
                            <Redirect to="/" />
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

Root.propTypes = {
    /** current locale */
    locale: PropTypes.string,
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

const mapDispatchToProps = {
    localeChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
