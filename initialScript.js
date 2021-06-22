var resizeChecker = false;
var resizeCheckerLG = true;

function masonryThing() {

    //  get the masonry container element. also clear it out, in case we're resizing...
    var masonryContainer = document.getElementById('masonryContainer');
    masonryContainer.innerHTML = '';

    var imagesArray = ['one','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three','two','three'];
    var columnCount = 6;

    //  change column count if the screen is too small
    if (window.innerWidth < 550){
        resizeChecker = true;
        resizeCheckerLG = false;
        columnCount = 3;
    }


    // creates divs for the amount of columns specified, and adds them into an array.
    for (var i = 0; i < columnCount; i++) {

        //  creates a div
        var columnDiv = document.createElement('div');

        //  sets the width for the div
        columnDiv.style.width = (100 / columnCount) + '%';

        //  sets the class for the div
        columnDiv.setAttribute('class', 'masonryColumn');

        //  adds the div into the container
        masonryContainer.appendChild(columnDiv);
    }

    //  places the images into each column
    for(var i = 0; i < imagesArray.length; i++){
        //  grabs the column number for the image
        var colNum = i % columnCount;

        //  creates an img element
        var img = document.createElement('img');
        img.src = "client-loader.gif";
        img.setAttribute('class', 'masonryImg');

        //  creates a div for the img element and places it inside
        var imgDiv = document.createElement('div');
        imgDiv.setAttribute('class','masonryImgDiv');
        imgDiv.appendChild(img);

        //  appends the img div element to the column it belongs in
        document.getElementsByClassName('masonryColumn')[colNum].appendChild(imgDiv)
    }


};

function resizeFunc(){
    if(window.innerWidth < 550 && resizeChecker == false){
        masonryThing();
        scrollTo(0,1);
        resizeChecker = true;
        resizeCheckerLG = false;
        console.log('resized');
    }
    else if(window.innerWidth > 550 && resizeCheckerLG == false)
    {
        masonryThing();
        scrollTo(0,1);
        resizeChecker = false;
        resizeCheckerLG = true;
        console.log('resized LG');
    }
};

masonryThing();

window.addEventListener('resize', resizeFunc);