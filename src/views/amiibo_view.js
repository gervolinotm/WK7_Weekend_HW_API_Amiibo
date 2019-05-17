const AmiiboView = function (container, amiibo){
    this.amiiboContainer = container;
    this.amiibo = amiibo;
}


AmiiboView.prototype.render = function(){

    const breakInData = document.createElement('br');
    this.amiiboContainer.appendChild(breakInData);

    const imageOfTarget = document.createElement('img');
    imageOfTarget.src = this.amiibo.image
    this.amiiboContainer.appendChild(imageOfTarget);

    const characterName = this.createTextElement('h2', `Character: ${this.amiibo.character}`)
    this.amiiboContainer.appendChild(characterName);

    const characterAmiiboSeries = this.createTextElement('h3', `Amiibo Series: ${this.amiibo.amiiboSeries}`)
    this.amiiboContainer.appendChild(characterAmiiboSeries);

    const gameSeries = this.createTextElement('h3', `Game Series: ${this.amiibo.gameSeries}`)
    this.amiiboContainer.appendChild(gameSeries);




}



AmiiboView.prototype.createTextElement = function(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
}

module.exports = AmiiboView;