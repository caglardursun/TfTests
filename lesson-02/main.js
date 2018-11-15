/// <reference path="lib/p5.global-mode.d.ts" />

function setup()
{
    noCanvas();
    const values = [];
    for(let i=0;i<30;i++){
        values[i] = random(0,100);
    }

    const shape =[2,5,3];
    const a = tf.tensor3d(values,shape,"int32");   
    const b = tf.tensor3d(values,shape,"int32");   

    const bb = b.transpose();

    //const c = a.mul(b);
    const d = a.matMul(bb);
    // a.print();
    // b.print();
    // bb.print();
    // d.print();

    // tense.data().then(function(stuff){
    //     console.log(stuff);
    // });
    

    //Not working !!!
    // console.log(tense.get(0));
    // console.log(tense.get(1));
    
}

function draw()
{

}