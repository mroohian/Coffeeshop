/*
 * File: app/store/SnacksStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Coffeeshop.store.SnacksStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Coffeeshop.model.Product',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Array'
    ],

    config: {
        data: [
            {
                name: 'Hamburger',
                image: 'snacks/hamburger.jpg',
                id: 'S-eum',
                category: 'SNACK'
            },
            {
                name: 'Chicken Burger',
                image: 'snacks/chickenBurger.jpg',
                id: 'S-quam',
                category: 'SNACK'
            },
            {
                name: 'Chicken Pie',
                image: 'snacks/chickenPie.jpg',
                id: 'S-porro',
                category: 'SNACK'
            },
            {
                name: 'Sausage Roles',
                image: 'snacks/sausageRole.jpg',
                id: 'S-eum',
                category: 'SNACK'
            },
            {
                name: 'French Fries',
                image: 'snacks/frenchFries.jpg',
                id: 'S-velit',
                category: 'SNACK'
            }
        ],
        model: 'Coffeeshop.model.Product',
        storeId: 'SnacksStore',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'array'
            }
        }
    }
});