const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Amiibos = function (url) {
    this.url = url;
    this.data = null;
};

Amiibos.prototype.getData = function() {
    console.log('Im running')

    const request = new RequestHelper(this.url);

    request.get()
    .then((data) => {
        this.data = data.amiibo;
        PubSub.publish('Amiibos:all-data-ready', this.data)
    })
    

};

module.exports = Amiibos;
