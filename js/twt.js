const endpoint = "https://wind-bow.gomix.me/twitch-api/";
const channelsList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function(){
  for (i=0; i<channelsList.length; i++){
    getTwitchData(channelsList[i]);
  };
});

function getTwitchData(channel){
  $.getJSON(endpoint+"streams/"+channel+"?callback=?", function(d){
    if(d.stream){
      showData(d.stream.channel, "Live");
    } else {
      $.getJSON(endpoint+"channels/"+channel+"?callback=?", function(d){
        showData(d, "Offline");
      });
    };
  });
};

function showData(e, streaming){
  var li = "<li class = 'list-group-item'>"+e.name+": <span class='badge'>"+streaming+"</span>: <a href='"+e.url+"'>"+e.status+"</a></li>"
  $("ul").append(li);
};
