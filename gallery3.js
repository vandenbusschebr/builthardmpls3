function changeImage(a) {
    document.getElementById("img").src = a;
}

function printDescription(c){
    if(c=="bike"){
        document.getElementById("description").innerHTML="This is the second tandem bicycle I built. The first one we build in college after too many beers. It has no rear handle bar and the gears didn't match. This one was more planned out and makes brunch dates on sunday a more exciting adventure. </br></br> The front frame is an old huffy that I bought at a police auction, the rear half of the bike is from a dumpster. Scavenged parts and a few new cables was all it took. A slow roller, as best it gets.";
    }
    else if(c=='stool'){
        document.getElementById("description").innerHTML="This is one of two matching ottomans I made for our home. It was inspired by the 1960's furniture and decor at Riverview theater in Minneapolis. </br> <img src='http://i.imgur.com/fjEMqqe.jpg' class='secondaryThumbnail'> <img src='http://i.imgur.com/kQJfAGx.jpg' class='secondaryThumbnail'>";
    }
    else if(c=='coffeeTable'){
        document.getElementById("description").innerHTML="Before I made this table, we had a large contemporary coffee table with solid wood top. The table was wonderful, broad enough for 2 pizzas, but the solid top obscured the wonderful lines of our couch and cramped the room. The glass shelves open the space for the eye and the gold complements our other decor.  </br> <img src='http://i.imgur.com/xawnTfV.png' class='secondaryThumbnail'> ";
    }
    else if(c=='kawasaki'){
        document.getElementById("description").innerHTML="This is my 1977 Kawasaki 750 twin. It has been a work in progress, sometimes running sometimes not. </br> <img src='http://i.imgur.com/MLP7kNx.jpg' class='secondaryThumbnail'> <img src='http://i.imgur.com/ociH2gF.jpg' class='secondaryThumbnail'> <img src='http://i.imgur.com/f5UYdtQ.jpg' class='secondaryThumbnail'> <img src='http://i.imgur.com/AfYQRIJ.jpg' class='secondaryThumbnail'>";
    }
    else if(c=='bikeStand'){
        document.getElementById("description").innerHTML="Designed to not just hold my bicycle but display it as a piece of art. This was the 3rd iteration, you can see the initial CAD design below. </br> <img src='http://i.imgur.com/mADzNPt.jpg' class='secondaryThumbnail'> <img src='http://i.imgur.com/Rz8Zdfh.jpg' class='secondaryThumbnail'><img src='http://i.imgur.com/8qMtmXG.jpg' class='secondaryThumbnail'>";
    } 
    else if(c=='shelf'){
        document.getElementById("description").innerHTML="My brother and I build this shelf because he wanted to make something with his hands. Repurposing old wood from a church down the street, this shelf served us well for two years. </br> <img src='http://i.imgur.com/ttyekdp.jpg' class='secondaryThumbnail'> ";
    }
        else if(c=='logTable'){
        document.getElementById("description").innerHTML="Sometime around 2015 we had a big storm in Minneapolis. My firends car was ruined because her street got flooded and water entered the engine. This slab was picked up from the street the next day, it was from a tree that fell close to the bar by my house. </br> <img src='http://i.imgur.com/FyfvIqt.jpg' class='secondaryThumbnail'> ";
        }
            else if(c=='lamp'){
        document.getElementById("description").innerHTML="Simple lamp, because I needed a lamp. It was fun to put an overzealous industrial plug on the the cord attached to the nimble and narrow body.  </br> <img src='http://i.imgur.com/qRdBvdb.jpg' class='secondaryThumbnail'> ";
            }
    }



