
var newsList = new Array(10);
var favList = new Array();
var scoreArrList = ["#detailS1","#detailS2","#detailS3","#detailS4","#detailS5","#detailS6"];
var scoreFevArrList = ["#detailb1","#detailb2","#detailb3","#detailb4","#detailb5","#detailb6"];
var favDisplay = new Array();
var emailList  = ["#popupEmail1","#popupEmail2","#popupEmail3","#popupEmail4","#popupEmail5","#popupEmail6"];

var favPopList =["#popupFav1","#popupFav2","#popupFav3","#popupFav4","#popupFav5","#popupFav6"];
var femailList  = ["#fpopupEmail1","#fpopupEmail2","#fpopupEmail3","#fpopupEmail4","#fpopupEmail5","#fpopupEmail6"];
var msgPopupList =["#popupMessage1","#popupMessage2","#popupMessage3","#popupMessage4","#popupMessage5","#popupMessage6"];
var fmsgPopupList  = ["#fpopupMessage1","#fpopupMessage2","#fpopupMessage3","#fpopupMessage4","#fpopupMessage5","#fpopupMessage6"];
var ffavPopList =["#fpopupFav1","#fpopupFav2","#fpopupFav3","#fpopupFav4","#fpopupFav5","#fpopupFav6"];
var totalMarks =0;
var favIdArr = ["#favdetail1","#favdetail2","#favdetail3","#favdetail4","#favdetail5","#favdetail6"];
var idArr = ["#detail1","#detail2","#detail3","#detail4","#detail5","#detail6"];
function createList(){



for (var i = 0; i < newsList.length; i++) {
    newsList[i] = new Array(5);
}

console.log("createList");
newsList[0] = ["Adidas with westminster fashion week!","Adidas have announced they are extending their super successful collaboration with Transport for London, with an additional drop of 10 new styles of trainers.\n" +
"This will be happy news to anyone who missed out on the first drop from the (rather unusual) creative collaboration last month.\n" +
"Back in October, Adidas dropped a limited edition run of 500 pairs created in partnership with Transport for London, to celebrate the 15th anniversary of the Oyster card.\n" +
"The limited edition trainer, called Temper Run, cost £80 and buyers also got an Oyster card with the same amount of credit loaded on to it in a specially-designed wallet.\n" +
"What do we know so far?\n" +
"Well, the new styles are going to come in two drops.\n" +
"The second drop, which will be shoppable from December 10, pays tribute to the whole of the London Underground eco-system. Six ‘Continental 80s’ styles have been reworked into 12 individual shoes with each featuring a different underground sign on their heel tab.\n" +
"The first, which will be shoppable on December 8, sees four iconic adidas silhouettes (Stan Smith, Samba Rose, Falcon and Gazelle) re-designed in a purple colour-palette, as a tribute to the Elizabeth tube line which is set to open next year and will be coloured on the map, yup you guessed it, purple.","img/wesminster.png","no"] ;
    newsList[1] = ["Her Majesty Queen will participate!","\n" +
    "A representative of Her Majesty Queen Elizabeth II will present the honorary knighthood insignia to the 79-year-old designer at a ceremony next year.\n" +
    "Mr. Lauren, who is celebrating 50 years in business, may now put “KBE” after his name if he wishes.\n" +
    "Lauren is the first American fashion designer to be recognised with an honorary knighthood. Other notable American recipients of an honorary U.K. knighthood or damehood include former Presidents Dwight D. Eisenhower, Ronald Reagan and George H.W. Bush, former New York City Mayors Michael Bloomberg and Rudolph Giuliani, Angelina Jolie, Steven Spielberg, Bill and Melinda Gates, and ex-Burberry CEO Angela Ahrendts.\n" +
    "Mr. Lauren, who these days serves as the Executive Chairman and Chief Creative Officer of the Ralph Lauren Corporation, has been recognised with many an award in the course of his 50-year fashion career, the most recent of which was in June, when the Council of Fashion Designers of America recognised Lauren’s global effect on fashion and his leadership in the industry with a CFDA Members Salute.\n" +
    "The accolade bestowed on behalf of the 500-plus CFDA members was the first of its kind, and a special way to celebrate the man who was honoured with the CFDA Lifetime Achievement Award in 1991 and the CFDA American Fashion Legend Award in 2007.\n" +
    "The Most Excellent Order of the British Empire was founded in 1917 and the  UK  honours  system  recognises  exceptional  achievement  and  service  to  the  nation,  and  includes non-British nationals who receive 'Honorary' awards for their important contribution to British interests. All British honours are awarded on merit, and honorary awards are conferred by HM The Queen on the advice of the Foreign and Commonwealth Secretary.","img/queenez.jpg","no"] ;
    newsList[2] = ["Linking park Live in concert on Day 3","A strong measure of an artist's greatness and legacy is how often they are cited by other acts as a favorite or an influence. Who are the acts that get mentioned the most?\n" +
    "In my thousands of interviews, there are some obvious ones -- the Beatles, David Bowie, Frank Sinatra, Bruce Springsteen, Bob Dylan, Led Zeppelin. And right up there near the top, maybe second only to the Beatles, is and has been Queen.\n" +
    "With Bohemian Rhapsody winning the Golden Globe for Best Picture and becoming the highest-grossing music biopic of all time, Queen are deservedly enjoying another moment in the sun as one of classic rock's greatest bands. But musicians have been saying for decades Queen are in the pantheon of all-time greats.\n" +
    "In the countless interviews I have done over the years they have been name checked by numerous superstars. What is most impressive though is the diversity of artists they've influenced. When Katy Perry, Faith Hill, Mastodon and Rob Zombie all cite you as an influence, as they do with Queen, that says a great deal.\n" +
    "\"The first one I heard was 'Killer Queen' and 'Don’t Stop Me Now,'\" Perry once told me of her first Queen record. \"‘Don’t Stop Me Now,' all the analogies that are [in that song] are amazing.\"\n" +
    "Zombie also cites Queen as an indelible early influence. \"The first real music that I loved as a kid and I got into music really young, I was listening to stuff in kindergarten, it was Alice Cooper, Elton John, Kiss, Queen, those were all acts that I really loved when I was little,\" he told me. \"You get a couple of songs every once in a while, you get 'Stairway To Heaven,' 'Bohemian Rhapsody' and 'Free Bird,' and you’re like, 'Here it is, one of those songs.'”","img/linkingpark.jpg","no"] ;
    newsList[3] = ["Shah ruk khans special event in opening ceremony","shah Rukh Khan and Katrina Kaif are reuniting on the big screen after a gap of 6 years with this week's release Zero. The movie also marks their reunion with their Jab Tak Hai Jaan co-star Anushka Sharma. Interestingly, Katrina Kaif has been working with three of the biggest superstars of Indian cinema - Shah Rukh Khan, Aamir Khan and Salman Khan. Her last film was with Aamir Khan, next is with Shah Rukh Khan and next year she'll be seen with Salman Khan. \n" +
    "When asked about who's most likely to make her laugh among the three Khans, she named Salman Khan, the one who gives the maximum retakes, she took Aamir Khan's name and when asked about the one Khan whom she was intimidated by, Katrina said it was Shah Rukh Khan.","img/srk.png","no"] ;
    newsList[4] = ["Five Runway fashion events will take place","The PGA Show Fashion Show will be emceed by Golf Channel Reporter Bailey Mosier, and includes fashion trends and insights from What to Wear Next fashion journalists Greg Monteforte and Roberta Miceli. DJ Elliott will provide energizing music, and MRS-Events returns to direct the runway production. The PGA Show Fashion Show Happy Hour Recep­tion will immediately follow, providing a special opportunity to network with designers and brands one-on-one.\n" +
    "Attending PGA Professionals, golf buyers and industry leaders will have a special opportunity to preview the latest golf and resort lifestyle fashions, learn merchandising techniques, source global suppliers and meet with executives of golf apparel market leaders – who will be among approximately 1,000 companies and brands exhibiting at the 66th PGA Merchandise Show, the MAJOR of Golf Business.","img/runway.jpg","no"] ;
    newsList[5] = ["Fashion week will make new financial records","fabled $1 billion milestone at the global box office. With $287.9 million domestic and $732.4m overseas, the $165m-$200m (depending on who you ask) underwater adventure has earned $1.023b worldwide. It is currently the 36th-biggest global grosser of all time, and it still has a little juice left in the can. Offhand (spitball math alert), I’m thinking the movie will end up just over/under $325m domestic and (presuming it maintains the 28/72 domestic/overseas split) around $1.153b worldwide. That’ll put it above The Dark Knight Rises ($1.084b in 2012, sans 3-D) to make it the biggest DC Comics flick of all time, and behind only Iron Man 3 ($1.215b in 2013) and Black Panther ($1.346b in 2018) among all solo superhero flicks.\n" +
    "Heck, if you count the Avengers movies as sequels, it’s already the second-biggest non-sequel superhero flick behind Black Panther, so we’ll see if Captain Marvel can keep the pace (although, as always, anything in the Doctor Strange/Thor: The Dark World range is a win for the Brie Larson origin story). And lest you think Aquaman’s triumph is only about China, the film has earned around $444m outside of China, far outpacing the average $355m overseas gross of the previous DC Films flicks and their respective “not counting China” foreign grosses. Heck, $444m by itself puts Aquaman above every DC Comics flick save for The Dark Knight ($469m, with no help from China), The Dark Knight Rises ($647m, including $52m in China) and Batman v Superman ($543m, including $95m in China).","img/dollar.jpg","no"] ;



}


createList();

function displayList() {

    $(document).ready(function () {
        for (let i = 0; i < newsList.length; i++) {
            $(idArr[i]).append('<div data-role="header">' +
                '<h1>News</h1>' +
                '</div><div data-role="navbar"><ul> <li><a href="#newsList" data-transition="slidedown">News Feed</a> </li><li><a href="#favListView" data-transition="slidedown" >My Favourites</a> </li><li><a href="#poi" data-transition="slidedown" >Nearby POI</a> </li></ul></div>' +
                '<div role="main" class="ui-content">' +
                '<h3>' + newsList[i][0] + '</h3>' +
                '<div is="grid" class="ui-grid-a" ><div is="block" class="ui-block-a" >' + '<img style="width: 80%" src="' + newsList[i][2] + '">' + '</div>' + '<div is="block" class="ui-block-b" ><a href="'+favPopList[i]+'" data-rel="popup" class="ui-btn " data-transition="pop"><button  data-icon="heart"  onclick="addFav('+i+')">add favourites</button></a>' +'<a href="'+emailList[i]+'" data-rel="popup" class="ui-btn " data-transition="pop"><button data-icon="mail"  onclick="emailto('+i+')">email to me</button></a></div></div>' +
                '<div><p>' + newsList[i][1] + '</p>' +
                ' </div><div  data-role="collapsible" data-mini="false"><h3>Related News</h3><ul data-role="listview"> <li><a href="#detail6">Fashion week will make new financial records</a></li><li><a href="#detail5"> Five Runway fashion events</a></li></ul></div>' +
                ' <div align="center">' +
                '<div is="grid" class="ui-grid-a" ><div is="block" class="ui-block-a"><a href="#map1" data-transition="flow" class="ui-btn"><h3>Find the location below</h3><img style="width: 80%" class="img-container" src="img/map1.png"></a></div><div style="padding-top: 10%"  is="block" class="ui-block-b" > <textarea  is="textarea-input" placeholder="send us your view.."  ></textarea><a href="'+msgPopupList[i]+'" data-rel="popup" class="ui-btn " data-transition="pop" is="button" onclick="addPoints('+i+')"  class="ui-btn">send</a><a href="https://www.facebook.com/" onclick=""><img src="img/fb.png"></a><a href="https://twitter.com/" onclick=""><img src="img/twitter.png"></a><a href="https://www.linkedin.com/" onclick=""><img src="img/linkedin.png"></a></div><h2 is="gk-text" id="'+scoreArrList[i]+'"></h2></div>' +
                '</div>' +
                '<div data-role="footer">' +
                '<h4>fashionista</h4>' +
                '</div>' +
                '</span>');
        }
    });

}
displayList();
function displayFavList() {

    $(document).ready(function () {
        for (let i = 0; i < newsList.length; i++) {
            $(favIdArr[i]).append('<div data-role="header">' +
                '<h1>News</h1>' +
                '</div><div data-role="navbar"><ul> <li><a href="#newsList" data-transition="slidedown">News Feed</a> </li><li><a href="#favListView" data-transition="slidedown" >My Favourites</a> </li><li><a href="#poi" data-transition="slidedown" >Nearby POI</a> </li></ul></div>' +
                '<div role="main" class="ui-content">' +
                '<h3>' + newsList[i][0] + '</h3>' +
                '<div is="grid" class="ui-grid-a" ><div is="block" class="ui-block-a" >' + '<img style="width: 80%" src="' + newsList[i][2] + '">' + '</div>' + '<div is="block" class="ui-block-b" ><a href="'+ffavPopList[i]+'" data-rel="popup" class="ui-btn " data-transition="pop"><button data-icon="heart"  onclick="removeFav('+i+')">remove item</button></a>' +'<a href="'+femailList[i]+'" data-rel="popup" class="ui-btn " data-transition="pop"><button data-icon="mail"  onclick="emailto('+i+')">email to me</button></a></div></div>' +
                '<div><p>' + newsList[i][1] + '</p>' +
                ' </div>' +
                ' <div align="center">' +
                '<div is="grid" class="ui-grid-a" ><div is="block" class="ui-block-a"><a href="#map1"  data-transition="flow" class="ui-btn"><h3>Find the location below</h3><img class="img-container" style="width: 80%" src="img/map1.png"></a></div><div style="padding-top: 10%"  is="block" class="ui-block-b" > <textarea  is="textarea-input" placeholder="send us your view.."></textarea><a href="'+fmsgPopupList[i]+'" data-rel="popup" class="ui-btn " data-transition="pop" is="button" onclick="addPoints('+i+')"  class="ui-btn">send</a><a href="https://www.facebook.com/"  onclick="" ><img src="img/fb.png"></a><a href="https://twitter.com/"  onclick="" ><img src="img/twitter.png"></a><a href="https://www.linkedin.com/"  onclick=""><img src="img/linkedin.png"></a></div><h2 is="gk-text" id="'+scoreFevArrList[i]+'"></h2></div>' +
                '</div>' +
                '<div data-role="footer">' +
                '<h4>fashionista</h4>' +
                '</div>' +
                '</span>');
        }
    });

}
displayFavList();

function addPoints(id) {
        totalMarks += 4;
    document.getElementById(scoreArrList[id]).innerText=" Total share point score : " + totalMarks;

}

function addFevPoints(id) {
    totalMarks += 4;
    document.getElementById(scoreFevArrList[id]).innerText=" Total share point score : " + totalMarks;

}

function addFav(num) {
    if (!favDisplay.includes(favIdArr[num])) {
        favDisplay.push(favIdArr[num]);
       // alert(num);
    }
    drawList();
}
function removeFav(num){
    if(favDisplay.includes(favIdArr[num])){
        favDisplay.splice(favDisplay.indexOf(favIdArr[num]),1);
       // alert(num);
        }
    drawList();
}
function drawList() {
    $("#favUl").empty();
    for (let i = 0; i <favDisplay.length ; i++) {
        let num = favIdArr.indexOf(favDisplay[i]);
    $("#favUl").append('<li class="ui-li-has-thumb ui-first-child"><a href="'+favIdArr[num]+'" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="'+newsList[num][2]+'" style="height:80%;">' +
        ' <h2>'+newsList[num][0]+'</h2>' +
        '<p>latest news</p>' +
        '<p class="pLen">'+newsList[num][1]+'</p></a>' +
        '  </li>');
}
}


function emailto(id) {
    //alert(newsList[id][0]);
    $.ajax({
        type: "POST",
        url: "./manager.php",
        data: {sub : newsList[id][0],bdy: newsList[id][1]},
        cache: false,
        success: function(data){
            $("#resultarea").text(data);
        }
    });
}

function initMap() {
    var wm = {lat:51.498504 , lng:-0.135791 };
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: wm});
    var marker = new google.maps.Marker({position: wm, map: map});
}