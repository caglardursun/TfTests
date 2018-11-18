/// <reference path="lib/p5.global-mode.d.ts" />

function setup()
{
    noCanvas();
    frameRate(25);
}

function draw()
{


    const values = [];    
    for(let i=0;i<150000;i++){
        values[i] = random(0,100);
    }

    const shape =[500,300];

    // const tense = tf.tensor3d(values,shape,"int32");  
    // const vtense = tf.variable(tense);

    const b = tf.tensor2d(values,shape,"int32");  
    const a = tf.tensor2d(values,shape,"int32");     

    const bT = b.transpose();
    const c = a.matMul(bT);
    
    console.group("Before calling");
    console.log(tf.memory().numTensors)
    console.groupEnd();
    
    //try not to dispose of them
    a.dispose();
    b.dispose();
    c.dispose();
    bT.dispose();
    console.group("After disposing");
    console.log(tf.memory().numTensors);
    console.groupEnd();

    tf.tidy(()=>{

    });

}