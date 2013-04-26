module.exports = function( view, makeURL, SSO ) {
  return function( req, res ) {
    res.render( view + ".html", { page: view, makeEndpoint: makeURL, SSO: SSO } );
  };
};
