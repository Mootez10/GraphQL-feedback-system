# 📦 Feedback GraphQL API – NestJS

Système de feedback pour produits numériques développé avec NestJS et GraphQL.  
Il permet de gérer les entités **Utilisateur (User)**, **Produit (Product)** et **Feedback**, avec des opérations complètes de création, lecture, mise à jour et suppression.

---

## 🚀 Démarrage rapide

```bash
npm install
npm run start:dev


Accès GraphQL : http://localhost:3000/graphql

📌 Schéma GraphQL
🎯 Entités principales

type User {
  id: Int!
  name: String!
  email: String!
}

type Product {
  id: Int!
  name: String!
  description: String!
}

type Feedback {
  id: Int!
  productName: String!
  rating: Int!
  comment: String!
  user: String!
}

📬 Opérations disponibles
✅ Utilisateur (User)
Ajouter un utilisateur

mutation {
  addUser(input: {
    name: "Alice",
    email: "alice@email.com"
  }) {
    id name email
  }
}

Afficher tous les utilisateurs

query {
  getAllUsers {
    id name email
  }
}


Mettre à jour un utilisateur

mutation {
  updateUser(input: {
    id: 1,
    name: "Alice Modifiée"
    email: "newalice@email.com"
  }) {
    id name email
  }
}


Supprimer un utilisateur

mutation {
  deleteUser(id: 1)
}


✅ Produit (Product)
Ajouter un produit

mutation {
  addProduct(input: {
    name: "Produit X",
    description: "Outil SaaS puissant"
  }) {
    id name description
  }
}

Afficher tous les produits

query {
  getAllProducts {
    id name description
  }
}

Mettre à jour un produit

mutation {
  updateProduct(input: {
    id: 1,
    name: "Produit Y",
    description: "Version mise à jour"
  }) {
    id name description
  }
}

Supprimer un produit

mutation {
  deleteProduct(id: 1)
}

✅ Feedback (Feedback)
Ajouter un feedback

mutation {
  addFeedback(input: {
    productName: "Produit X"
    rating: 5
    comment: "Très utile !"
    user: "Alice"
  }) {
    id productName rating comment user
  }
}

Afficher tous les feedbacks

query {
  getAllFeedbacks {
    id productName rating comment user
  }
}

Supprimer un feedback

mutation {
  deleteFeedback(id: 1)
}

🛠 Tech Stack

NestJS
GraphQL (Apollo)
