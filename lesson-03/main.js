var tf = require("@tensorflow/tfjs");

const model = tf.sequential();
//shape means dimensions 

const hidden = tf.layers.dense({units:4,
        inputShape:[2], 
        activation:'sigmoid'
});

const output = tf.layers.dense({
    units:3,
    inputShape:[4],
    activation:'sigmoid'
});

model.add(hidden);
model.add(output);

const sgdOpt = tf.train.sgd(0,1);

const config = {
    optimizer:sgdOpt,
    loss:'meanSquaredError'
};

model.compile(config);