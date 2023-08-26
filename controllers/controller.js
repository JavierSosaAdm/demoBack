
const { User, Post } = require('../db');
// const createUser = async (name, email, phone, gender) => {
//     const newUser = await User.createUser({name, email, phone, gender});
//     return newUser;
// }
const createUser2 = async (req, res) => {
    const { name, email, phone, gender } = req.body;

    try {
        const response = await User.create({name, email, phone, gender});
        res.status(200).json(response);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};  
const getUser = async (req, res) => {
    const { name } = req.query;

    try {
        if(name) {
            const response = await User.findOne({where: {name: name}})
            return res.status(200).json(response);
        }

        const response = await User.findAll();
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error});
    }
};

const poster = async (req, res) => {
    const { title, content, userId } = req.body; 
    try {
        const posteo = await Post.create(title, content)

        const post = await posteo.setUser(userId)

        res.status(200).json(post);
        
    } catch (error) {
        res.status(400).json({error: error});
    }
};
const getId = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await User.findByPk(id,
            {include: {
                model: Post, 
                atrributes: ["title", "content"]
            },
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error});
    }
};

const upDate = async (req, res) => {
    
    const { newMail, email } = req.body;

    try {
        const response = await User.update(
            {email: newMail},
            {where: {email: email}}
        );
        res.status(200).json({success: 'Correo actualizado correctamente'});
    } catch (error) {
        res.status(400).json({error: error});
    } 
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await User.destroy({where: {id: id}}); 
        res.status(200).json({success: 'El usuario se eliminó correctamente'});
    } catch (error) {
        res.status(400).json({error: error});
    }
};


module.exports = { getUser, getId, createUser2, poster, upDate, deleteUser}