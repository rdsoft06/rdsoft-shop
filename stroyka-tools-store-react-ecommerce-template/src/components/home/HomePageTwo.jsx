// react
import React from 'react';

// third-party
import { Helmet } from 'react-helmet';

// blocks
import BlockBanner from '../blocks/BlockBanner';
import BlockBrands from '../blocks/BlockBrands';
import BlockCategories from '../blocks/BlockCategories';
import BlockFeatures from '../blocks/BlockFeatures';
import BlockPosts from '../blocks/BlockPosts';
import BlockProductColumns from '../blocks/BlockProductColumns';
import BlockProducts from '../blocks/BlockProducts';
import BlockSlideShow from '../blocks/BlockSlideShow';
import BlockTabbedProductsCarousel from '../blocks/BlockTabbedProductsCarousel';

// data stubs
import categories from '../../data/shopBlockCategories';
import posts from '../../data/blogPosts';
import products from '../../data/shopProducts';
import theme from '../../data/theme';


function HomePageTwo() {
    const columns = [
        {
            title: 'Top Rated Products',
            products: products.slice(0, 3),
        },
        {
            title: 'Special Offers',
            products: products.slice(3, 6),
        },
        {
            title: 'Bestsellers',
            products: products.slice(6, 9),
        },
    ];

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Home Page Two — ${theme.name}`}</title>
            </Helmet>

            <BlockSlideShow />

            <BlockFeatures layout="boxed" />

            <BlockTabbedProductsCarousel title="Featured Products" layout="grid-5" rows={2} />

            <BlockBanner />

            <BlockProducts
                title="Bestsellers"
                layout="large-last"
                featuredProduct={products[0]}
                products={products.slice(1, 7)}
            />

            <BlockCategories title="Popular Categories" layout="compact" categories={categories} />

            <BlockTabbedProductsCarousel title="New Arrivals" layout="grid-5" />

            <BlockPosts title="Latest News" layout="grid-nl" posts={posts} />

            <BlockBrands />

            <BlockProductColumns columns={columns} />
        </React.Fragment>
    );
}

export default HomePageTwo;
