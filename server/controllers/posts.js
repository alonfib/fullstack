import postMessage from '../models/postMessage.js';
import PosrMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PosrMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const createPost =async (req, res) => {
    const body = req.body;
    const newPost = new postMessage(post)

    try{
        await newPost.save();

        res.status(201).json(newPost)
        } catch (error) {
                res.status(409).json({error: error.message})
        }
}