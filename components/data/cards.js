//deskies of each card (the display of cards will be handled in the react component Card.js, Cards.js etc. THIS file is simply where the data LIVES. )
//remember logic is handled by FortuneGetter.js, so will export from here and import over there! :-) 

let cards = [
    {colors: ['red','black']},
    {suits: ['hearts','spades','diamonds','clubs']},
    {numbers: ['2','3','4','5','6','7','8','9','10']},
    {faces: ['jack','king','queen','ace']}
];

export default cards;
//cards.colors[i]
//cards.suits[i]
