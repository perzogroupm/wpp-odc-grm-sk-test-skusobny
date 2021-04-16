/**
 * Skusobny GroupM Digital SK - Product Scraper
 *
 * Changelog:
 * 2021/04/16 - Peter Perzo - Test Scraper for skusobny.groupmdigital.sk
 */

import { scrape, event, getUrl } from 'lemonpi-scraper-helper';

scrape({
  // Optional, but recommended: Whitelist specific URL(s) using a regular expression
  //urlTest: /skusobny\.groupmdigital\.sk/,
  //window.location.href
  //"https://skusobny.groupmdigital.sk/produkt/beanie/"

  // Optional, enable product retargeting by firing the 'product-viewed' event
  afterPush: event,

  // Required
  fields: {
    // Required fields with example values
    'advertiser-id': 185,
    sku: () => document.getElementsByClassName('sku')[0].innerHTML,

    // Optional, arbitrary fields with example values
    url: getUrl,
    name: () => document.getElementsByClassName('product_title entry-title')[0].innerHTML,
	//price: () =>
	//image: () =>
	webtag: () => document.getElementsByClassName('onsale')[0].innerHTML,
	//napr. zlava
	description: () => document.getElementsByClassName('woocommerce-product-details__short-description')[0].innerHTML,
  },
});