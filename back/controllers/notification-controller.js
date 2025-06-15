import { Notification } from "../models/associations.js";


export const notificationsController = {

    async getAll(req, res) {
        try {
            const userId = req.user.userId; 
    
            const notifications = await Notification.findAll({
                where: { userId: userId },
                order: [['createdAt', 'DESC']], // Trier par date décroissante
            });
    
            res.status(200).json({ notifications });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    },

    async create(req, res) {
        try {

            const userId = req.user.userId;
            if (!userId) {
                return res.status(401).json({ message: "Utilisateur non authentifié." });
            }
            
            const message = req.body.message;
            if (!message) {
                return res.status(400).json({ message: "Le message de la notification est requis." });
            }
    
            const newNotification = await Notification.create({
                userId: userId,
                message: message,
                isRead: false, // Par défaut, la notification est non lue
            });
    
            res.status(201).json({ message: "Notification créée avec succès", notification: newNotification });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    },

    async update(req, res) {
        try {
            const notificationId = req.params.id; 
            const userId = req.user.userId; 
    
            const notification = await Notification.findOne({
                where: { id: notificationId, userId: userId }
            });
    
            if (!notification) {
                return res.status(404).json({ message: "Notification non trouvée" });
            }
        
        await notification.update(req.body);

            res.status(200).json({ message: "Modification bien effectuée", notification });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    },
    
    async delete(req, res) {
        try {
            const notificationId = req.params.id; 
            const userId = req.user.userId; 
    
            const notification = await Notification.findOne({
                where: { id: notificationId, userId: userId }
            });
    
            if (!notification) {
                return res.status(404).json({ message: "Notification non trouvée ou accès refusé" });
            }
    
            await notification.destroy();
    
            res.status(200).json({ message: "Notification supprimée avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    },

    async markAsRead(req, res) {
        try {
            const notificationId = req.params.id;
            const userId = req.user.userId;

            const notification = await Notification.findOne({ where: { id: notificationId, userId: userId },});

            if (!notification) {
                return res.status(404).json({ message: "Notification non trouvée"});
            }

            await notification.update({ is_read: true });
            await notification.reload(); // met à jour les valeurs en mémoire

            res.status(200).json({ message: "Notification marquée comme lue", notification});
        } catch (error) {
            res.status(500).json({ message: "Erreur serveur", error: error.message });
        }
    }
    
};