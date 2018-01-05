let endpoint = "https://wind-bow.gomix.me/twitch-api/";

let streamUser = "users/noobs2ninjas/"
getStreams(streamUser);

function getStreams(streamName){
  $.ajax({
    url: endpoint+streamName,
    data: {
      format: 'json'
    },
    type: 'GET',
    // Api-User_agent below is recommended when
    // querying so they can identify you - format is free-form
    // headers: {
    //   'Api-User-Agent': 'jjleonard@gmail.com'
    // },
    dataType: 'jsonp',
    jsonpCallback: "display",
  });
};

function display(data){
  console.log(data);
  $("p").append('<a href="https://www.twitch.tv/'+data["name"]+'">'+data["name"]+'</a>');
};

// Base test Javascript done - can query the twitch.tv API via the glitch link.
// TODO:
// work out how to query the status of a number of users at the same time.
// their status is returned as either null or a whole ton of data, so it might be 
// worth storing a bunch of IDs in an array, the looping through and querying,
// and storing the information returned, in the array (ID, stream description)
// then generating a bunch of li's via bootstrap to show status, description and provide a linke
// to their stream.
//
//
// USEFUL LINKS:
// FCC Project Page: https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api
// Glitch API info: https://wind-bow.glitch.me/
// Twitch developer API page: https://dev.twitch.tv/docs/v5/reference/streams#get-stream-by-user


