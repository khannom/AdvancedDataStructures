
function setup(){
    var width = 400;
	var height = 400;
    createCanvas(width,height);
    
    
    background(0);
    //rt = new RTree(boundary,3);
    /************************************** */
    for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 5) {
			stroke(125, 125, 125);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
    /************************************** */
    rt = new Rtree(10);
    var root = null;
    //root = new NodoRTree();
    for(i = 0; i < 11 ; i++){
        var x = Math.floor(Math.random() * width);
		var y = Math.floor(Math.random() * height);
        var p = new Point(x,y);
        console.log(p.x,p.y);
        
        fill(225, 225, 225);
		circle(p.x, 400 - p.y, 7);
		textSize(8);
		text(p.x + "," + p.y, p.x + 5, 400 - p.y);
        root = rt.insert(root,p);
    }
    //rt.ver(root);

    //circle(100, 400 - 100, 7);
    //textSize(8);
	//text(100 + "," + 100, 100 + 5, 400 - 100);
        

    //stroke(0 ,255 ,0);

}

/*function draw(){
    
    stroke(0 ,255 ,0);
    rectMode(CENTER);
    noFill();
    let range = new Rectangle(150,10,50,50);

    rect(range.x,400-range.y,range.w * 2,range.h * 2);
    
    strokeWeight(4) ;
    point(350,350);

}*/