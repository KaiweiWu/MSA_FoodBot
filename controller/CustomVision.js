var request = require('request'); //node module for http post requests

exports.retreiveMessage = function (session){

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/cf42b69f-83f3-4368-9e08-4957ecf64a0f/url?iterationId=6d57dea9-846f-4b7b-bc57-cd045056ea8f',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': '8338490e8ac440088290e1edadb0cbfb'
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body){
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body){
    if (body && body.Predictions && body.Predictions[0].Tag){
        return "This is " + body.Predictions[0].Tag
    } else{
        console.log('Oops, please try again!');
    }
}