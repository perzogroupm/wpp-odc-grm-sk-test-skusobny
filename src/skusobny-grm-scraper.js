/**
 * Skusobny GroupM Digital SK - Product Scraper
 *
 * Changelog:
 * 2021/04/16 - Peter Perzo - Test Scraper for skusobny.groupmdigital.sk
 */

import { scrape, event, getUrl } from 'lemonpi-scraper-helper';

scrape({
  fields: {
    'advertiser-id': 185,
    sku: () => document.getElementsByClassName('sku')[0].innerHTML,
    url: getUrl,
    name: () => document.getElementsByClassName('product_title entry-title')[0].innerHTML,
	webtag: () => document.getElementsByClassName('onsale')[0].innerHTML,
	description: () => document.getElementsByClassName('woocommerce-product-details__short-description')[0].innerHTML,
	image: () => document.querySelector('.woocommerce-product-gallery__image img').src,
  },
});