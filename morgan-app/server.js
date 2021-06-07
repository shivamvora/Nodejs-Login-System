const express = require( 'express' );
const morgan = require( 'morgan' );

const app = express();
const port = 3000;

app.use( morgan( ':method :status :url "HTTP/:http-version" ' ) );

app.get( '/', ( req, res ) => {
    res.end( "Morgan Logger app" )
} )

app.listen( port, () => {
    console.log( `Server on running on http://localhost:${port}` );
} )