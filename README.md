<div align="center">

# Digital Wallet (Frontend)

</div>


## 📘 Project Overview

A multi-role digital wallet application built with **React**, **Vite**, **TailwindCSS**, and **TypeScript**. Supports **User**, **Agent**, and **Admin** roles with secure authentication, dashboards, and transaction management.

This system enables:

* Users to manage their wallet, top up, withdraw, and send money
* Agents to perform cash-in/out on behalf of users
* Admins to manage users, agents, wallets, transactions, and system states

---

## 🚀 Roles and Capabilities

| Role      | Capabilities                                                                           |
| --------- | -------------------------------------------------------------------------------------- |
| **User**  | Register, login, manage wallet, add/withdraw/send money, view transaction history      |
| **Agent** | Add money to users (cash-in), withdraw from users (cash-out), create/add to own wallet |
| **Admin** | Manage users, block/unblock wallets, approve/suspend agents, view all transactions     |

---

## 🛠 Tech Stack

* **Frontend:** React, Vite, TypeScript, TailwindCSS
* **State Management:** Redux Toolkit
* **Routing & Forms:** React Router, React Hook Form
* **API & Notifications:** Axios, Sonner
* **UI Components & Charts:** Radix UI, Recharts

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:Irfan-Chowdhury/PH-Level2-B5-Assignment-6-frontend.git
cd PH-Level2-B5-Assignment-6-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file at the root with the following:

```env
VITE_BASE_URL="http://localhost:5000/api/v1"

```

### 4. Run the Server

```bash
npm run dev
```

---




<br>

## ⚙️ Key Features Implemented

* **Public Landing Section:** Responsive home, about, features, contact, and FAQ pages with smooth transitions and skeleton loading.
* **Authentication:** JWT-based login, role selection on registration, persisted login state, and logout.
* **User Dashboard:** Wallet overview, deposit/withdraw money, send money, transaction history with filters, and profile management.
* **Agent Dashboard:** Manage user wallets (cash-in/out), view transactions, and profile management.
* **Admin Dashboard:** User/agent management, transaction oversight with filters, and system settings.
* **General Features:** Role-based navigation, form validations, global loading and error handling, pagination, and data visualization (charts and tables).

---

<br>

## 📽️ Demo

* 🔗 **GitHub Repository**: [Link Here](https://github.com/Irfan-Chowdhury/PH-Level2-B5-Assignment-6-frontend)
* 🌐 **Live Demo**: [https://digital-wallet-frontend-chi.vercel.app/](https://digital-wallet-frontend-chi.vercel.app/)

---

<br>

## Credentials

### Admin
    
    Email : admin123@gmail.com
    Password: admin123
    
### User
    
    Email : user123@gmail.com
    Password: user123
    
    
### Agent
    
    Email : agent123@gmail.com
    Password: agent123
    

<!-- ## 📡 API Endpoints Summary

### 🔐 Auth

| Method | Endpoint                | Description                 |
| ------ | ----------------------- | --------------------------- |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/user/register` | Register user or agent      |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/auth/login`    | Login and receive JWT token |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/auth/logout`    | logout from device |

---

### 👤 User (Admin)

| Method | Endpoint                               | Description              |
| ------ | -------------------------------------- | ------------------------ |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/user/all-users`           | Get all user details |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/user/all-agents`                 | Admin: get all agents    |
| GET  | `digital-wallet-frontend-chi.vercel.app/api/v1/user/approve-agent/:agentId` | Admin: Approve agent     |
| GET  | `digital-wallet-frontend-chi.vercel.app/api/v1/user/suspend-agent/:agentId` | Admin: Suspend agent     |

---

### 💳 Wallet (User/Agent)

| Method | Endpoint                          | Description                          |
| ------ | --------------------------------- | ------------------------------------ |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/my-wallet`        | Get current user’s wallet            |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/add-money`        | User/Agent: Add money to own wallet  |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/withdraw-money`   | User/Agent: Withdraw from own wallet |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/send-money`       | User: Send money to another user     |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/cash-in`          | Agent: Cash-in (add to user wallet)  |
| POST   | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/cash-out`         | Agent: Cash-out (withdraw from user) |
| GET  | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/block/:id`   | Admin: Block user wallet             |
| GET  | `digital-wallet-frontend-chi.vercel.app/api/v1/wallet/unblock/:id` | Admin: Unblock user wallet           |

### 💳 Wallet (Admin)

| Method | Endpoint                          | Description                          |
| ------ | --------------------------------- | ------------------------------------ |
| GET    | `/api/v1/wallet/all`        | Get all users/agents wallet            |
---


### 💰 Transactions (User/Agent)

| Method | Endpoint                   | Description                                  |
| ------ | -------------------------- | -------------------------------------------- |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/transaction/my-transactions`  | Get current user/agent’s transaction history |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/transaction/all` | Admin: View all transactions                 |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/transaction/:id` | Get specific transaction by ID               |

### 💰 Transactions (Admin)

| Method | Endpoint                   | Description                                  |
| ------ | -------------------------- | -------------------------------------------- |
| GET    | `digital-wallet-frontend-chi.vercel.app/api/v1/transaction/all` | Admin: View all transactions                 |

--- -->







<!-- 

### 🔹 2. Login

**POST** `http://localhost:5000/api/v1/auth/login` -->

---

<!-- ### 🔹 3. Add Money

**POST** `/api/v1/wallet/add-money` -->

<!-- ### 🔹 4. Send Money

**POST** `/api/v1/wallet/send-money` -->




<!-- ### 🔹 5. Withdraw Money

**POST** `/api/v1/wallet/withdraw-money` -->


<!-- ### 🔹 6. Cash IN

**POST** `/api/v1/wallet/cash-in` -->


<!-- ### 🔹 7. Cash Out

**POST** `/api/v1/wallet/cash-out` -->


## ✅ Author

**Name :** Md Irfan Chowdhury <br>
**Email** irfanchowdhury80@gmail.com.com <br>
**LinkedIn** : https://www.linkedin.com/in/irfan-chowdhury/ <br>

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
