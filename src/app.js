const Amiibos = require('./models/amiibo.js');
const AmiiboInfoList = require('./views/amiibo_info_list.js');


document.addEventListener('DOMContentLoaded', () => {

    const amiiboContainer = document.querySelector('div.amiibo-info');
    const amiiboView = new AmiiboInfoList (amiiboContainer);
    amiiboView.bindEvents();

    const amiibos = new Amiibos ('https://www.amiiboapi.com/api/amiibo');
    amiibos.getData();
})