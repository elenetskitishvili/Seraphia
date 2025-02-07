# Jewelry Marketplace

This project is a jewelry e-commerce platform built with Next.js, where users can buy and sell jewelry. Premium sellers get unlimited listings and exclusive promotional services.

## Technologies Used

- **Next.js:** For building the application with server-side rendering and static site generation.
- **Supabase:** For database management.
- **Stripe:** For handling payment processing, including subscriptions and product purchases.
- **next-intl:** For internationalization and localization.
- **Tailwind CSS:** For styling and responsive design.

## Features

### General

- **Light Mode, Dark Mode, and System Mode**;
- **Internationalization:** Available in two languages - English and Georgian;
- **Cart Functionality:** Users can add products to the cart for later purchase or buy products immediately.
- **Purchase History:** Users can view a list of their purchased products.
- **Personalized Seller Pages:** Users can manage their products and blog posts.

### Pages

- **Home Page:** Introduction to the website.
- **Products Page:** List of all products.
- **Product Details Page:** View jewelry details.
- **Create Product Page:** List new jewelry for sale.
- **User's Products Page:** View and manage a user’s listed jewelry items.
- **Orders Page:** Users can view their past orders and order details.
- **Blog Posts Page:** Jewelry-related articles.
- **Blog Post Details Page:** Full content of a blog post.
- **User's Blogs Page:** View and manage a user’s blog posts.
- **Profile Page:** User account management.
- **Contact Page:** Get in touch with administrators.
- **Sign-Up Page:** User registration.
- **Sign-In Page:** User login.
- **Forgot Password Page:** Recover account.
- **Pricing Page:** Details of premium seller plans.

  ### Authentication

  User authentication is managed with **Supabase** for secure login functionality.

  ### Database

  The website uses **Supabase** for managing user data, product listings, orders, and blog posts.

  ## Setup and Installation

  ### Prerequisites

  - Node.js (v16 or higher)
  - A Supabase account
  - A Stripe account

  ### Installation Steps

  1. Clone the repository:

     ```
     git clone https://github.com/elenetskitishvili/Seraphia.git
     ```

  2. Navigate to the project directory:

     ```
     cd Seraphia
     ```

  3. Install dependencies:

     ```
     npm install
     ```

  4. Create a `.env.local` file in the root directory and add the following environment variables:

     - Supabase:

       ```
       NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
       NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
       ```

     - Stripe:

       ```
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishabble_key
        STRIPE_SECRET_KEY=your_stripe_secret_key
       ```

  5. Run the development server:

     ```
       npm run dev
     ```

  6. Open [http://localhost:3000](url) in your browser to view the project.
