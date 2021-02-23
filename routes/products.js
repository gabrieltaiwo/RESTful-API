const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//Gets all products
router.get('/', async  (req,res) => {
    try{ 
        const product = await Product.find();
        res.send(product);
     }catch(err) {
        res.send({message: err});
     }
    
});

//Get a Specific Post
router.get('/:productId', async (req, res) => {
    try{
        const product = await Product.findById(req.params.productId);
        res.send(product);
    }catch (err) {
        res.send({message : err})
    }
});

//Submits a product
router.post('/', async (req, res) => {
    //console.log(req.body);
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        color: req.body.color
    });
    try{
        const savedProduct =  await product.save();
        res.send(savedProduct);
    }catch(err) {
        res.send({message: err});
    }

});

//Delete a product
router.delete('/:productId', async (req, res) => {
    try{
        const removedProduct = await Product.remove({_id: req.params.productId});
        res.send(removedProduct);
    }catch (err) {
        res.send({message : err})
    }
});

//Update a post
router.patch('/:productId', async (req, res) => {
    try{
        const updatedProduct = await Product.updateOne({_id: req.params.productId}, { $set: { name: req.body.name}});
        res.send(updatedProduct);
    }catch (err) {
        res.send({message : err})
    }
});
module.exports = router; 

