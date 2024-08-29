# EPIC Overview

## Profile
### Description:
This Epic involves all functionalities related to user profiles on the platform. It includes features like user registration, login, profile management, role assignment (seller/admin or buyer/user), password management, and social login integration.

### User Stories:
1. **User Registration and Login**
   - As a user, I want to register and log in so that I can access the platform's features.
   
2. **Social Login with Gmail and Facebook**
   - As a user, I want to log in using my Gmail or Facebook account so that I can quickly access the platform without creating a new account.
     - **Acceptance Criteria:**
       - User can choose to log in using Gmail.
       - User can choose to log in using Facebook.
       - User’s profile is automatically populated with information from their Gmail or Facebook account.
       - User receives confirmation that their social login was successful.

3. **View and Edit Profile**
   - As a user, I want to view and update my profile information so that I can keep my details up to date.
   
4. **Manage User Roles**
   - As an admin (who is also a seller), I want to manage user roles and ensure users have appropriate access rights on the platform. This includes setting roles like buyer for regular users.
     - **Acceptance Criteria:**
       - Admin can assign roles such as "buyer" to users.
       - Admin can view and edit user details and roles.

5. **Profile Security**
   - As a user, I want to update my password and manage my account security settings so that my account remains secure.

6. **Reset Password**
   - As a user, I want to reset my password in case I forget it, so that I can regain access to my account.
     - **Acceptance Criteria:**
       - User can initiate a password reset by providing their email address.
       - User receives a password reset link via email.
       - User can set a new password using the link provided.
       - User receives confirmation that their password has been successfully reset.

## Product
### Description:
This Epic covers the creation, management, and display of products on the platform. It includes product details, filtering, gallery management, and product categorization (Best Seller, Trending, Best Deals).

### User Stories:
1. **Create and Manage Products**
   - As a seller, I want to create and manage my products so that I can sell them on the platform.
   
2. **Product Details Management**
   - As a seller, I want to add and update detailed information about my products (tags, release date, company name, language, etc.) so that buyers have all the necessary information.

3. **Manage Product Gallery**
   - As a seller, I want to upload and manage product images so that my products are visually appealing to buyers.
   
4. **Apply Filters to Products**
   - As a user, I want to filter products by criteria like best seller, trending, and best deals so that I can find products that interest me.
     - **Acceptance Criteria:**
       - Products can be tagged with multiple filters (e.g., Best Seller, Trending).
       - Users can view products filtered by these categories.

## Transaction
### Description:
This Epic focuses on the handling of transactions within the platform, including the management of transaction details, service fees, and the status of each transaction.

### User Stories:
1. **Initiate and Manage Transactions**
   - As a buyer, I want to complete a transaction after placing an order so that I can finalize my purchase.
   
2. **Service Fee Management**
   - As an admin, I want to configure and manage service fees for transactions so that the platform can generate revenue.
   
3. **Transaction History**
   - As a user, I want to view my past transactions so that I can keep track of my purchases.
   
4. **Transaction Status Updates**
   - As an admin, I want to monitor and update the status of transactions so that I can ensure smooth operations.

## Order
### Description:
This Epic deals with the creation, management, and tracking of orders on the platform. It includes features related to order items, order status updates, and order history.

### User Stories:
1. **Create and Manage Orders**
   - As a buyer, I want to place an order for selected products so that I can purchase them.
   
2. **Order Status Tracking**
   - As a user, I want to track the status of my order (e.g., pending, shipped) so that I know when to expect delivery.
   
3. **Order History**
   - As a user, I want to view my order history so that I can see what I have purchased in the past.
   
4. **Order Item Management**
   - As a user, I want to view and manage the items in my order so that I can make changes before finalizing my purchase.

## Payment
### Description:
This Epic encompasses all functionalities related to payment processing on the platform, including payment methods, payment status tracking, and refund processing.

### User Stories:
1. **Payment Method Selection**
   - As a buyer, I want to choose from multiple payment methods so that I can pay for my order in a way that is convenient for me.
   
2. **Payment Status Tracking**
   - As a user, I want to track the status of my payment (e.g., pending, completed) so that I can ensure my order is processed.
   
3. **Refund Processing**
   - As a user, I want to request a refund for an order if necessary so that I can get my money back in case of issues.
   
4. **Payment Confirmation**
   - As a buyer, I want to receive confirmation of my payment so that I have proof of transaction.

## Wishlist
### Description:
This Epic involves the functionalities related to managing a wishlist on the platform. Users can add products they are interested in to their wishlist for future consideration.

### User Stories:
1. **Add Products to Wishlist**
   - As a buyer, I want to add products to my wishlist so that I can easily find and purchase them later.

2. **View Wishlist**
   - As a buyer, I want to view my wishlist so that I can see all the products I am interested in purchasing.

3. **Remove Products from Wishlist**
   - As a buyer, I want to remove products from my wishlist so that I can keep it updated with only the items I am still interested in.

4. **Move Products from Wishlist to Cart**
   - As a buyer, I want to move items from my wishlist to my cart so that I can proceed to purchase them.

5. **Wishlist Notifications**
   - As a buyer, I want to receive notifications when products in my wishlist go on sale or are about to be out of stock so that I can make a timely purchase.
