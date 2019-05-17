const PubSub = require('../helpers/pub_sub.js');
const AmiiboView = require('./amiibo_view.js');

const AmiiboInfoList = function (container){
    this.container = container;
}

AmiiboInfoList.prototype.bindEvents = function(){
    PubSub.subscribe('Amiibos:all-data-ready', (event) => {
        console.log('this is my subscribed', event.detail)
    this.render(event.detail);
    })
}

AmiiboInfoList.prototype.render = function(amiiboArray) {
    console.log("what am i in render", amiiboArray)
    amiiboArray.forEach((amiibo) => {
        const amiiboView = new AmiiboView(this.container, amiibo)
        amiiboView.render();
    })
}

module.exports = AmiiboInfoList;