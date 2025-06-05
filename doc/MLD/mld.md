# Modèle Logique de Données (MLD)
### 1. User
- **id** : int (PK)
- **email** : string
- **password** : string

### 2. Expense
- **id** : int (PK)
- **amount** : decimal
- **description** : string
- **#user_id** : int (FK -> User)
- **#budget_id** : int (FK -> Category)


### 3. Notification
- **id** : int (PK)
- **#user_id** : int (FK -> User)
- **message** : string
- **is_read** : boolean

### 4. Category
- **id** : int (PK)
- **name** : string

### 5. Budget
- **id** : int (PK)
- **amount** : decimal
- **#user_id** : int (FK -> User)
- **#category_id** : int (FK -> Category)


