module.exports = function( view, makeURL ) {
  return function( req, res ) {
    res.render( view + ".html", { page: view, makeEndpoint: makeURL } );
  };
};
