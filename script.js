let map;
let divSquare = '<div id ="s$coord" class="square $color"></div>';
let divFigure = '<div id ="f$coord" class="figure"> $figure</div>';
$(function(){
    start();
});
function start(){
    map = new Array(64);
    addSquares();
    showFigures('rnbqkbnrpppppppp11111111111111111111111111111111PPPPPPPPRNBQKBNR');
}
function setDraggable(){
    $('.figure').draggable(); 
}

function setDroppable(){
    $('.square').droppable({
        drop: function(event,ui){
           let fromCoord = ui.draggable.attr('id').substring(1);
           let toCoord = this.id.substring(1);
           moveFigure(fromCoord,toCoord);
        }
    });
}

function moveFigure(fromCoord,toCoord){
    console.log('move from ' + fromCoord + ' to ' + toCoord);
    figure = map[fromCoord];
    showFigureAt(fromCoord,'1');
    showFigureAt(toCoord,figure);
}

function addSquares(){
    $('.board').html('');
    for (let coord = 0; coord<64; coord++)
    $('.board').append(divSquare
        .replace('$coord',coord)
        .replace('$color',isBlackSquareAt(coord) ? 'black':'white'));
            setDroppable();
}
function showFigures(figures){
    for (let coord = 0; coord<64; coord++)
    showFigureAt(coord,figures.charAt(coord));
        setDraggable();
}

function showFigureAt(coord,figure){
    if (map[coord]==figure) return;
    map[coord]=figure;
    $('#s'+ coord).html(divFigure
        .replace('$coord',coord)
        .replace('$figure',getChessSymbole(figure)));
            setDraggable();
}

function getChessSymbole(figure) {
    switch(figure){
        case 'K': return '&#9812';
        case 'Q': return '&#9813';
        case 'R': return '&#9814';
        case 'B': return '&#9815';
        case 'N': return '&#9816';
        case 'P': return '&#9817';
        case 'k': return '&#9818';
        case 'q': return '&#9819';
        case 'r': return '&#9820';
        case 'b': return '&#9821';
        case 'n': return '&#9822';
        case 'p': return '&#9823';
        default : return '';
    }
}
function isBlackSquareAt(coord) {
    return(coord % 8 + Math.floor(coord / 8)) % 2;
}