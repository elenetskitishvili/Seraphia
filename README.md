# Omnishop

This project is an e-commerce website built with Next.js, where people can sell and buy products.

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

### Pages

- **Home Page:** Introduction to the website.
- **Products Page:** List of all products.
- **Product Details Page:** Detailed information about a selected product.
- **Create Product Page:** Allows users to add new products.
- **Blog Posts Page:** A collection of articles.
- **Blog Post Details Page:** Detailed content for a specific blog post.
- **About Page:** Information about the "Omnishop" website and its mission.
- **Profile Page:** A personalized page where users can view their information.
- **Contact Page:** A page for users to get in touch with the website administrators.
- **Sign-Up Page:** For user registration.
- **Sign-In Page:** For user login.
- **Forgot Password Page:** Helps users recover their account.
- **Pricing Page:** Details of subscription plans and pricing options.

  ### Authentication

  User authentication is managed with **Supabase** for secure login functionality.

  ### Database

  The website uses **Supabase** as its backend database for storing and managing products and blogs data.

  ## Setup and Installation

  ### Prerequisites

  - Node.js (v16 or higher)
  - A Supabase account
  - A Stripe account

  ### Installation Steps

  1. Clone the repository:

     ```
     git clone https://github.com/IrakliAmbroladze/tbc_x_usaid.git
     ```

  2. Navigate to the project directory:

     ```
     cd tbc_x_usaid
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
