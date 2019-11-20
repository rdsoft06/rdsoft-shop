// react
import React, { Component } from 'react';

// third-party
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// application
import departmentsAria from '../../services/departmentsArea';
import languages from '../../i18n';
import StroykaSlick from '../shared/StroykaSlick';


const slickSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export class BlockSlideShow extends Component {
    departmentsAreaRef = null;

    media = window.matchMedia('(min-width: 992px)');

    slides = [
        {
            title: 'Big choice of<br>Plumbing products',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: {
                ltr: 'images/slides/slide-1-ltr.jpg',
                rtl: 'images/slides/slide-1-rtl.jpg',
            },
            image_full: {
                ltr: 'images/slides/slide-1-full-ltr.jpg',
                rtl: 'images/slides/slide-1-full-rtl.jpg',
            },
            image_mobile: {
                ltr: 'images/slides/slide-1-mobile.jpg',
                rtl: 'images/slides/slide-1-mobile.jpg',
            },
        },
        {
            title: 'Screwdrivers<br>Professional Tools',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: {
                ltr: 'images/slides/slide-2-ltr.jpg',
                rtl: 'images/slides/slide-2-rtl.jpg',
            },
            image_full: {
                ltr: 'images/slides/slide-2-full-ltr.jpg',
                rtl: 'images/slides/slide-2-full-rtl.jpg',
            },
            image_mobile: {
                ltr: 'images/slides/slide-2-mobile.jpg',
                rtl: 'images/slides/slide-2-mobile.jpg',
            },
        },
        {
            title: 'One more<br>Unique header',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
            image_classic: {
                ltr: 'images/slides/slide-3-ltr.jpg',
                rtl: 'images/slides/slide-3-rtl.jpg',
            },
            image_full: {
                ltr: 'images/slides/slide-3-full-ltr.jpg',
                rtl: 'images/slides/slide-3-full-rtl.jpg',
            },
            image_mobile: {
                ltr: 'images/slides/slide-3-mobile.jpg',
                rtl: 'images/slides/slide-3-mobile.jpg',
            },
        },
    ];

    componentDidMount() {
        if (this.media.addEventListener) {
            this.media.addEventListener('change', this.onChangeMedia);
        } else {
            this.media.addListener(this.onChangeMedia);
        }
    }

    componentWillUnmount() {
        departmentsAria.area = null;

        if (this.media.removeEventListener) {
            this.media.removeEventListener('change', this.onChangeMedia);
        } else {
            this.media.removeListener(this.onChangeMedia);
        }
    }

    onChangeMedia = () => {
        if (this.media.matches) {
            departmentsAria.area = this.departmentsAreaRef;
        }
    };

    setDepartmentsAreaRef = (ref) => {
        this.departmentsAreaRef = ref;

        if (this.media.matches) {
            departmentsAria.area = this.departmentsAreaRef;
        }
    };

    render() {
        const { locale, withDepartments } = this.props;
        const { direction } = languages[locale];

        const blockClasses = classNames(
            'block-slideshow block',
            {
                'block-slideshow--layout--full': !withDepartments,
                'block-slideshow--layout--with-departments': withDepartments,
            },
        );

        const layoutClasses = classNames(
            'col-12',
            {
                'col-lg-12': !withDepartments,
                'col-lg-9': withDepartments,
            },
        );

        const slides = this.slides.map((slide, index) => {
            const image = (withDepartments ? slide.image_classic : slide.image_full)[direction];

            return (
                <div key={index} className="block-slideshow__slide">
                    <div
                        className="block-slideshow__slide-image block-slideshow__slide-image--desktop"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                    <div
                        className="block-slideshow__slide-image block-slideshow__slide-image--mobile"
                        style={{
                            backgroundImage: `url(${slide.image_mobile[direction]})`,
                        }}
                    />
                    <div className="block-slideshow__slide-content">
                        <div
                            className="block-slideshow__slide-title"
                            dangerouslySetInnerHTML={{ __html: slide.title }}
                        />
                        <div
                            className="block-slideshow__slide-text"
                            dangerouslySetInnerHTML={{ __html: slide.text }}
                        />
                        <div className="block-slideshow__slide-button">
                            <Link to="/" className="btn btn-primary btn-lg">Shop Now</Link>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className={blockClasses}>
                <div className="container">
                    <div className="row">
                        {withDepartments && (
                            <div className="col-3 d-lg-block d-none" ref={this.setDepartmentsAreaRef} />
                        )}

                        <div className={layoutClasses}>
                            <div className="block-slideshow__body">
                                <StroykaSlick {...slickSettings}>
                                    {slides}
                                </StroykaSlick>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BlockSlideShow.propTypes = {
    withDepartments: PropTypes.bool,
    /** current locale */
    locale: PropTypes.string,
};

BlockSlideShow.defaultProps = {
    withDepartments: false,
};

const mapStateToProps = (state) => ({
    locale: state.locale,
});

export default connect(mapStateToProps)(BlockSlideShow);
