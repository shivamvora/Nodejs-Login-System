const express = require( 'express' );
const path = require( 'path' );
const fs = require( 'fs' );

const app = express();

const port = process.env.PORT || 3000;


app.use( function ( req, res, next ) {
    console.log( "Requested Date : " + new Date() );
    next();
} )

app.listen( port, () => {
    console.log( `Listening on http://localhost:${port}` )
} )

app.use( function ( req, res, next ) {
    var filepath = path.join( __dirname, "static", req.url );
    fs.stat( filepath, function ( err, fileInfo ) {
        if ( err ) {
            next();
            return
        }
        if ( fileInfo.isFile() ) {

            res.sendFile( filepath );
        } else {
            next();
        }
    } )
} )

app.use( function ( req, res ) {
    res.status( 404 );
    res.send( "File Not Found" )
} )
