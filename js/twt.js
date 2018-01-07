let endpoint = "https://wind-bow.gomix.me/twitch-api/";
let userList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
let userListStr = "ESL_SC2, OgamingSC2, cretetion, freecodecamp, storbeck, habathcx, RobotCaleb, noobs2ninjas";


$(document).ready(function(){

  getStreams();

  function getStreams(){
    for (i=0; i<userList.length;i++){
      var userName = userList[i];
      var channelsCallPoint = endpoint+"channels/"+userName+"?callback=?";
      var streamsCallPoint = endpoint+"streams/"+name+"?callback=?";
      var name = "";
      var userURL = "";
      var jqxhr = $.getJSON(channelsCallPoint, function(data){
        name = data["name"];
        userURL = data["url"];
        console.log(name, userURL);
      });
      jqxhr.done(function(){
        $.getJSON(streamsCallPoint, function(data2){
          console.log(data2["status"]);
          $("ul").append('<li><a href="'+userURL+'">'+name+'</a> '+status+' </li>');
        });
      });
    };
  };

});

// function display(data){
//   console.log(data);
//   $("ul").append('<li><a href="https://www.twitch.tv/'+data["name"]+'">'+data["name"]+'</a></li>');
// };

// Base test Javascript done - can query the twitch.tv API via the glitch link.
// TODO:
// work out how to query the status of a number of users at the same time.
// their status is returned as either null or a whole ton of data, so it might be 
// worth storing a bunch of IDs in an array, the looping through and querying,
// and storing the information returned, in the array (ID, stream description)
// then generating a bunch of li's via bootstrap to show status, description and provide a link
// to their stream.
//
// 6/1/18: done all above, by looping through a list of users, and pulling back data from each, then creating links to their streams.
// next thing todo: user list is returning userName as the last one in the list for all of the entries. this is a callback problem, i'm sure.
// back at it tomorrow.
//
//
// USEFUL LINKS:
// FCC Project Page: https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api
// Glitch API info: https://wind-bow.glitch.me/
// Twitch developer API page: https://dev.twitch.tv/docs/v5/reference/streams#get-stream-by-user
// Jquery using getJSON: http://api.jquery.com/jquery.getjson/


