const previewData = { };

// d3.csv("/data/data.csv",function(data){
//     console.log(data[0]);
// });
d3.json("data/data.json").then(function(data) {
    console.dir(data);

    for(i=0;i< data.length;i++){
        console.log(parseFloat(data[i].xAxis.replace(/,/, '.')));
        console.log(parseFloat(data[i].linear.replace(/,/, '.')));
        console.log(parseFloat(data[i].circle.replace(/,/, '.')));
        console.log(parseFloat(data[i].density.replace(/,/, '.')));
        console.log(parseFloat(data[i].difference.replace(/,/, '.')));
        console.log(parseFloat(data[i].concave.replace(/,/, '.')));
        console.log(parseFloat(data[i].difference2.replace(/,/, '.')));
        console.log(parseFloat(data[i].KiianPro7.replace(/,/, '.')));
        console.log(parseFloat(data[i].JTech.replace(/,/, '.')));
        console.log(parseFloat(data[i].IITSC.replace(/,/, '.')));
    }
})