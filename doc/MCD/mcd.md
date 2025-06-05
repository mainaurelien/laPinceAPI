# Modèle Conceptuel de Données (MCD)

## Entités et Attributs

### 1. Utilisateur
- **email** 
- **mot de passe** 

### 2. Dépense
- **montant** 
- **description** 

### 3. Notification
- **message** 
- **lu** 

### 4. Catégorie
- **nom** 

### 5. Budget
- **montant** 

## Relations

1. **Utilisateur - Dépense**
   - Relation : **Crée**
   - Cardinalité : 0,N (Un utilisateur peut créer plusieurs dépenses)

2. **Utilisateur - Notification**
   - Relation : **Reçoit**
   - Cardinalité : 0,N (Un utilisateur peut recevoir plusieurs notifications)

3. **Catégorie - Budget**
   - Relation : **Inclut**
   - Cardinalité : 0,N (Une catégorie peut être incluse dans plusieurs budgets)

4. **Utilisateur - Budget**
   - Relation : **Définit**
   - Cardinalité : 0,N (Un utilisateur peut définir plusieurs budgets)