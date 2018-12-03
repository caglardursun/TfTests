var pointData = [];

//y = mx +b formula ...
var m = 1;
var b = 0;

function preload()
{
    
    //data = loadJSON("./data/data.json");
}

function setup()
{
    createCanvas(400,400);
    //frameRate(20);
    //pixelDensity(1);
    //console.dir(data);
}

function drawLine()
{
    var x1 = 0;
    var y1 = m * x1 +b;
    var x2 = 1;    
    var y2 = m * x2 +b;

    //unmap the coordinates coz canvas will be between 0 and 1
    x1 = map(x1,0,1,0,width);
    y1 = map(y1,0,1,height,0);

    x2 = map(x2,0,1,0,width);
    y2 = map(y2,0,1,height,0);

    stroke(255,0,255);
    line(x1,y1,x2,y2);
}

function linearRegression()
{
    var xsum = 0; 
    var ysum = 0;
    for(i = 0;i<pointData.length; i++){
        xsum += pointData[i].x;
        ysum += pointData[i].y;
    }
    var xmean = xsum / pointData.length;
    var ymean = ysum / pointData.length;

    //we found x hat and y hat which means avarage value of x and y axis
    //we can apply the formula
    var numerator = 0;
    var denuminator = 0;
    for(i = 0; i<pointData.length;i++)
    {
        var x = pointData[i].x;
        var y = pointData[i].y;
        numerator+= (x - xmean) * (y - ymean);
        denuminator += (x - xmean) * (x-xmean);
    }
    //if(denuminator != 0)
    m = numerator / denuminator;
    b = ymean - m * xmean;
}

function mousePressed()
{
    var x = map(mouseX,0, width, 0, 1);
    var y = map(mouseY,0, height, 1, 0);
    var point  = createVector(x,y);
    pointData.push(point);
    console.log(point);
}

function draw()
{
    background(51);
    
    for(i=0;i<pointData.length; i++)
    {
        var x = map(pointData[i].x,0,1,0,width);
        var y = map(pointData[i].y,0,1,height,0);

        fill(255,0,0,);
        stroke(255);
        ellipse(x,y,8,8);
    }
    if(pointData.length > 1){
        linearRegression();
        drawLine();
    }
        

}