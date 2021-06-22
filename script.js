function mosaicLayout(options) {

    let defaultOptions = {
        container: "masonryContainer",
        masonryColumn: "masonryColumn",
        masonryImgDiv: "masonryImgDiv",
        masonryImg: "masonryImg",
        columns: "6",
        mobileColumns: "3",
        smallCutoff: 800,
        imagesJson: ""
    };

    options = { ...defaultOptions, ...options };

    let _this = this;
    let masonryContainer = document.getElementById(options.container);
    let imagesArray = ['one', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three', 'two', 'three'];
    let resizeCheckSM = false;
    let resizeCheckLG = true;

    this.loadImages = function () {
        //  clear masonry container out, in case we're resizing...
        masonryContainer.innerHTML = '';

        var columnCount = options.columns;

        //  change column count if the screen is too small
        if (window.innerWidth < options.smallCutoff) {
            resizeCheckSM = true;
            resizeCheckLG = false;
            columnCount = options.mobileColumns;
        }

        // creates divs for the amount of columns specified, and adds them into an array.
        for (var i = 0; i < columnCount; i++) {

            //  creates a div
            var columnDiv = document.createElement('div');

            //  sets the width for the div
            columnDiv.style.width = (100 / columnCount) + '%';

            //  sets the class for the div
            columnDiv.setAttribute('class', options.masonryColumn);

            //  adds the div into the container
            masonryContainer.appendChild(columnDiv);
        }

        //  places the images into each column
        for (var i = 0; i < imagesArray.length; i++) {
            //  grabs the column number for the image
            var colNum = i % columnCount;

            //  creates an img element
            var img = document.createElement('img');
            img.src = "client-loader.gif";
            img.setAttribute('class', options.masonryImg);

            //  creates a div for the img element and places it inside
            var imgDiv = document.createElement('div');
            imgDiv.setAttribute('class', options.masonryImgDiv);
            imgDiv.appendChild(img);

            //  appends the img div element to the column it belongs in
            document.getElementsByClassName(options.masonryColumn)[colNum].appendChild(imgDiv)
        }

        window.addEventListener('resize', function() {
            _this.resizeChecker();
        })
    };

    this.resizeChecker = function(){
        if(window.innerWidth < options.smallCutoff && resizeCheckSM == false){
            _this.loadImages();
            scrollTo(0,1);
            resizeCheckSM = true;
            resizeCheckLG = false;
        }
        else if(window.innerWidth > options.smallCutoff && resizeCheckLG == false)
        {
            _this.loadImages();
            scrollTo(0,1);
            resizeCheckSM = false;
            resizeCheckLG = true;
        }
    };
}