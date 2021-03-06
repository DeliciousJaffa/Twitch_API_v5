'use strict';

const request = require('./request');

module.exports = {
    serverList: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: none

        if(typeof data === 'function') callback = data;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/ingests`;

        request('GET', options, callback);
    }
};