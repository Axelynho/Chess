let divSquare = '<div id ="s$coord" class="square $color"></div>';
$(function(){
    addSquares();
})
function addSquares(){
    console.log('addSquares');
    $('.board').html('');
    for (let coord = 0; coord<64; coord++)
    $('.board').append(divSquare.replace('$coord',coord).replace('$color',isBlackSquareAt(coord) ? 'black':'white'));
}
function isBlackSquareAt(coord) {
    return(coord % 8 + Math.floor(coord / 8)) % 2;
}