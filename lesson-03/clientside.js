import * as tf from '@tensorflow/tfjs';
// - 2 inputs 
// - 4 hidden layer 
// - 3 output (classification) 


//This is the model
const model = tf.sequential();

// Shape means dimensions first column then row
// Create input layer 
// Dense is a fully connected layer
const hiddenLayer = tf.layers.dense({
    units:4, //numer of nodes
    inputShape:[2], //dimension of matrix input
    activation:'sigmoid' // activation function
});
model.add(hiddenLayer);

//Another layer
const output = tf.layers.dense({
    units:3, //node number again
    inputShape:[4],
    //inputShape:[4], you don't need to define Coz output of inputlayer also input of this hidden layer
    activation:'sigmoid'
});


model.add(output);

//Sacastic Gradient Decent  optimizer
const sgdOpt = tf.train.sgd(0,1);

//we're done configuring the model so compile it 
model.compile({
    optimizer:sgdOpt,
    loss:'meanSquaredError'
});

let inputs = tf.tensor2d([[0.25,0.92]]);
let outputs = model.predict(inputs);

outputs.print();