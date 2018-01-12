let endpoint = "https://wind-bow.gomix.me/twitch-api/";
let channelsList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// let userListStr = "ESL_SC2, OgamingSC2, cretetion, freecodecamp, storbeck, habathcx, RobotCaleb, noobs2ninjas";
// let userNames = [];
// let userStatus = [];
let status = "";
let info = "";
var twitchGamers = new Object();
channelsList.forEach(function(channel){
  twitchGamers[channel] = {
    status:"",
    streamLink: "",
    logo: ""
  };
})

$(document).ready(function(){

  getTwitchData();

});

function getTwitchData(){
  channelsList.forEach(function getStreamData(channel){
    $.getJSON(endpoint+"streams/"+channel+"?callback=?", function(d){
      if (d.stream === null){
        status = "Offline";
      } else {
        status = d.stream.channel.game+": "+d.stream.channel.status;
      };
      twitchGamers[channel]["status"] = status;
    });
    $.getJSON(endpoint+"channels/"+channel+"?callback=?", function(d){
      twitchGamers[channel].streamLink = d["url"];
      twitchGamers[channel].logo = d["logo"];
      // as much as i'm going to hate doing it, i need to insert the HTML generator code here,
      // and write it into the page as it's created.
      // right now, I cannot think of a way to create a callback on the successful results of two other callbacks,
      // and it is faster and neater to simply generate the html and get on with it.
      // sigh.
      // at least I know a hell of a lot more about callbacks now, and I can get them working (to a limited degree...)
    });
  });
};

// PSUEDO CODE:
// for each item in the channelsList: channelsList.foreach(function(channel){
// THIS IS A WRAPPER FUNCTION THAT DOES ALL THE BELOW FOR EACH ITEM
// })
// declare a function createURL that builds the type of url request (stream / channel) + name + ?callback=?
// do a $.getJSON using createURL with the type (stream) and the channel var passed in from the foreach function, and a function that updates vars with the data
// if stream:null, they are offline, set the status var to Offline; if not, then set the status var to the channel["status"] value, and the game title to the value of the stream["game"] var
// then do another $.getJSON useing createURL with the type (channel) and the channel var from the foreach function, and create a function to
// get the url of the stream (url:)
// 

// Information needed:
// channel name (in array above)
// online / offline status: from streams call: "stream" is either null (offline) or use "stream""game" for the game name, and "channel""status" to the current status
// link to stream: channels call "url" value returns link
// logo: channels call "logo" value returns url for image
// (go back to an earlier freecodecamp project to work out how to present these logos in a pretty fashion or simply use a bootsrap method to do so)
// then present: Logo, channel name, status, and link to stream.
// how you present this is up to you!


//
// USEFUL LINKS:
// FCC Project Page: https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api
// Glitch API info: https://wind-bow.glitch.me/
// Twitch developer API page: https://dev.twitch.tv/docs/v5/reference/streams#get-stream-by-user
// Jquery using getJSON: http://api.jquery.com/jquery.getjson/
// var channelsCallPoint = endpoint+"channels/"+userName+"?callback=?";
// var streamsCallPoint = endpoint+"streams/"+name+"?callback=?";


