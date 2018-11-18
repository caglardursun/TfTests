var tf = require("@tensorflow/tfjs");

// - 2 inputs 
// - 4 hidden layer 
// - 3 output (classification) 

//This is the model
const model = tf.sequential();
//shape means dimensions 
//Create input layer 
//dense is a fully connected layer
const hiddenLayer = tf.layers.dense({
    units:4, //numer of nodes
    inputShape:[2], //dimension of matrix input
    activation:'sigmoid' // activation function
});
model.add(hiddenLayer);

//Another layer
const output = tf.layers.dense({
    units:3, //node number again
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

let inputs = tf.tensor1d([0.25,0.92],"float32");
let outputs = model.predict(inputs);


const xs = tf.tensor2d([
    [0.25,0.12],
    [0.5,0.9],
    [0.35,0.82],
    [0.15,0.2]
]);


const ys = tf.tensor2d([
    [0.1,0.1,0.22],
    [0.4,0.5,0.82],
    [0.3,0.4,0.42]
]);
const history = model.fit(xs,ys);

// const xs = tf.tensor2d([
//     [0.25,0.12],
//     [0.5,0.9],
//     [0.35,0.82],
//     [0.15,0.2]
// ]);

// let outputs = model.predict(xs);

console.log(output);