module.exports = function( makeEndpoint, SSO ){
  return {
    api: {
      healthcheck: require( "./api/healthcheck" )
    },
    page: function( view ) {
      return require( "./page" )( view, makeEndpoint, SSO );
    }
  };
};
