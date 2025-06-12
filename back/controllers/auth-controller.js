import { User } from "../models/associations.js";
import argon2 from 'argon2';

export const authcontroller = {
    
    async register(req,res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            
            const exisingUser = await User.findOne({where: { email }});
            if (exisingUser){
                return res.status(409).json({message: 'Email déja utilisé'});
            }
            const hashedPassword = await argon2.hash(password);
            const newUser = await User.create({ 
                email: email,
                password: hashedPassword
            });
            const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expireIn: '24h'});
            res.status(201).json({ message: 'Utilisateur créé', userId: newUser.id, token });
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur', error: error.message });
        }
    },

    async login(req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const user = await User.findOne({where: { email: req.body.email }});
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé'});
            }
            const validPassword = await argon2.verify(user.password, password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Mot de passe incorect'});
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '24h'});
                res.status(200).json({ message: 'Connexion réussie', token });
            } catch (err) {
                res.status(500).json({ message: 'Erreur serveur', error: err.message });
        }
    },

};