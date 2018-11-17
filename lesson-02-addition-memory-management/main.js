/// <reference path="lib/p5.global-mode.d.ts" />

function setup()
{
    noCanvas();
    frameRate(25);
}

function draw()
{


    const values = [];    
    for(let i=0;i<15;i++){
        values[i] = random(0,100);
    }

    const shape =[5,3];

    // const tense = tf.tensor3d(values,shape,"int32");  
    // const vtense = tf.variable(tense);

    const b = tf.tensor2d(values,shape,"int32");  
    const a = tf.tensor2d(values,shape,"int32");     

    const bT = b.transpose();
    const c = a.matMul(bT);
    


}