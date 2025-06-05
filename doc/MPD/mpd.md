# Modèle Physique de Données (MPD)


### 1. user
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE
);
```

### 2. expense
```sql
CREATE TABLE expenses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10,2) NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (budget_id) REFERENCES budget(id),
    FOREIGN KEY (user_id) REFERENCES user(id)


);
```

### 3. budget
```sql
CREATE TABLE budgets (
    id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (budget_id) REFERENCES budget(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
```

### 4. category
```sql
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT NOT NULL
);
```

### 5. notification
```sql
CREATE TABLE notification (
    id INT PRIMARY KEY AUTO_INCREMENT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES user(id)
);
```