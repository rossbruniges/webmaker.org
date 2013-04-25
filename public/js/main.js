Webmaker = function() {
  var makeURL,
      page,
      make;

  function getTags( tagList ) {
    var tag,
        obj = {};

    if ( !tagList ) {
      return obj;
    }

    for ( var i = 0; i < tagList.length; i++ ) {
      tag = tagList[ i ].split( ":" );
      if ( tag.length === 2 ) {
        obj[ tag[ 0 ] ] = tag[ 1 ];
      } else {
        obj[ tag[ 0 ] ] = true;
      }
    }
    return obj;
  }

  function doSearch( tags, limit, each ) {
    make
    .find({ tags: tags })
    .limit( limit )
    .then( function( data )  {
      var hits = data.hits,
          makeData;
      for ( var i = 0; i < hits.length; i++ ) {
        makeData = hits[ i ];
        makeData.tags = getTags( hits[ i ].tags );
        if ( each ) {
          each( makeData );
        }
      }
    });
  }

  function init( options ) {
    makeURL = options.makeURL;
    page = options.page;
    make = Make({ makeAPI: makeURL });
  }

  return {
    init: init,
    doSearch: doSearch
  };
};

