
var url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.pippa.io%2Fpublic%2Fshows%2Fwords-matter&api_key=gxhefr3me3gps8jxc4oyinpybuokklciigkqfbfm&count=100";
fetch(url)
.then(function(resp) {
return resp.json();
})
.then(function(json) {

var y = "";
var z = "";

//console.log(json);

for (var i = 0; i<json.items.length; i++) {

var object = json.items[i];

var a = json.items[i].enclosure.link;
var b = json.items[i].title;

y+= '<audio controls id="chat" src="'+a+'" type="audio/mp3" preload="none"> </audio>';
z+= '<div id="title"> '+b+' </div>';
}

document.getElementById('chat').innerHTML=y;
document.getElementById('title').innerHTML=z;

})
