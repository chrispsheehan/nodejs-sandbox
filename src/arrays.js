var textParam = "text";

var additionalParams = {
    blah : "de blah"
}

var params = {
    [textParam] : "oaihodhsoihdhios"
  };

const fullParams = {...params, ...additionalParams };


console.log(fullParams);