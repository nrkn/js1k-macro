h = function( d, e ){
  c.beginPath();
  c.moveTo( f[ d ][ 4 ][ 0 ], f[ d ][ 4 ][ 1 ] );
  for( e = f[ d ][ 4 ].length / 2; e--; )
    c.lineTo( f[ d ][ 4 ][ e * 2 ], f[ d ][ 4 ][ e * 2 + 1 ] );
  c.fill()
};
f = [];
for( d = 10; d--; ) g = Math.random(),
  f[ d ] = [
    ~~( g * 4 ),
    'hsl(' + ~~( Math.random() * 360 ) + ',' + ~~( Math.random() * 100 ) + '%,' + ~~( Math.random() * 100 ) + '%)',
    ~~( Math.random() * 400 ),
    ~~( Math.random() * 400 ),
    ~~( g * 4 ) == 1 ? 
      ~~( Math.random() * 25 ) : 
      ~~( g * 4 ) == 2 ? 
        [ ~~( Math.random() * 400 ), ~~( Math.random() * 400 ), ~~( Math.random() * 400 ), ~~( Math.random() * 400 ), ~~( Math.random() * 400 ), ~~( Math.random() * 400 ) ] : 
        ~~( g * 4 ) == 3 ? 
        'Hello world' : ~~( Math.random() * 50 ),
    ~~( Math.random() * 50 )
  ];
  for( d = 10; d--; )
    c.fillStyle = f[ d ][ 1 ],
      f[ d ][ 0 ] == 0 ?
        c.fillRect( f[ d ][ 2 ], f[ d ][ 3 ], f[ d ][ 4 ], f[ d ][ 5 ] ) :
        f[ d ][ 0 ] == 1 ? (
          c.beginPath(), 
          c.arc(
            f[ d ][ 2 ],
            f[ d ][ 3 ],
            f[ d ][ 4 ], 
            0, 
            7
          ), 
          c.fill()
        ) :
          f[ d ][ 0 ] == 3 ? (
            c.fillText( f[ d ][ 4 ], f[ d ][ 2 ], f[ d ][ 3 ] )
          ) : h( d )
