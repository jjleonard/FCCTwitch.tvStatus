let endpoint = "https://wind-bow.gomix.me/twitch-api/";
let channelsList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
// let userListStr = "ESL_SC2, OgamingSC2, cretetion, freecodecamp, storbeck, habathcx, RobotCaleb, noobs2ninjas";
// let userNames = [];
// let userStatus = [];
let status = "";
let info = "";


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








//
// USEFUL LINKS:
// FCC Project Page: https://www.freecodecamp.org/challenges/use-the-twitchtv-json-api
// Glitch API info: https://wind-bow.glitch.me/
// Twitch developer API page: https://dev.twitch.tv/docs/v5/reference/streams#get-stream-by-user
// Jquery using getJSON: http://api.jquery.com/jquery.getjson/
// var channelsCallPoint = endpoint+"channels/"+userName+"?callback=?";
// var streamsCallPoint = endpoint+"streams/"+name+"?callback=?";


