/// <reference path="lib/p5.global-mode.d.ts" />

function setup()
{
    noCanvas();
    const values = [];    
    for(let i=0;i<15;i++){
        values[i] = random(0,100);
    }

    const shapeA =[5,3];

    // const tense = tf.tensor3d(values,shape,"int32");  
    // const vtense = tf.variable(tense);

    const a = tf.tensor2d(values,shapeA,"int32"); 
    const shapeB = [3,5]; 
    const b = tf.tensor2d(values,shapeB,"int32");  
    //const c = a.matMul(b);

    a.print();
    b.print();
    //c.print(); 
    
    //tense.print();
    
    
}

function draw()
{

}