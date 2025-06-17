# 📊 LaPinceAPI

API RESTful pour la gestion budgétaire personnelle : authentification, gestion des budgets, dépenses, notifications, et catégories. Développée en Node.js avec Express, PostgreSQL et Sequelize.

---

## 🚀 Fonctionnalités

- Authentification JWT sécurisée (register/login)
- Création et suivi de budgets
- Suivi des dépenses par catégorie
- Notifications utilisateur
- Documentation Swagger

---

## ⚙️ Technologies

- Node.js / Express
- PostgreSQL / Sequelize
- Docker / Docker Compose
- Joi (validation)
- Helmet / CORS
- Swagger (documentation)

---

## 📦 Installation

### 1. Cloner le repo

### 2. Configurer l'environnement
```env

PORT=3000
JWT_SECRET=supersecretkey

```
### 3. Lancer Docker
```bash

docker-compose up --build

```
L’API sera disponible sur :
👉 http://localhost:3000

Swagger sera accessible sur :
👉 http://localhost:3000/api-docs


## Routes principales

- Toutes les routes sont déjà testées dans Thunder Client et documentées dans /docs/swagger.yaml

| Méthode | Endpoint             | Description                            |
| ------: | -------------------- | -------------------------------------- |
|    POST | `/api/register`      | Créer un utilisateur                   |
|    POST | `/api/login`         | Connexion utilisateur (retourne token) |
|     GET | `/api/user`          | Infos utilisateur (token requis)       |
|    CRUD | `/api/budgets`       | Gérer les budgets                      |
|    CRUD | `/api/expenses`      | Gérer les dépenses                     |
|    CRUD | `/api/notifications` | Gérer les notifications                |
|     GET | `/api/categories`    | Récupérer toutes les catégories        |

### Swagger

- Fichier : back/docs/swagger.yaml

- URL : http://localhost:3000/api-docs

### 🔒 Sécurité

- Les routes protégées nécessitent un token Bearer
- Helmet pour sécuriser les headers HTTP
- Joi pour la validation des données