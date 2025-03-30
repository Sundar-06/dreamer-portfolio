#!/bin/bash

# Create necessary directories
mkdir -p src/assets/{projects,blog,icons}

# Install dependencies
npm install @angular/animations@19.2.0 gsap@3.12.5 tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.17 @heroicons/angular@2.1.1 @tailwindcss/forms@0.5.7 @tailwindcss/aspect-ratio@0.4.2

# Initialize Tailwind CSS
npx tailwindcss init

# Create environment files
mkdir -p src/environments
echo 'export const environment = { production: false };' > src/environments/environment.ts
echo 'export const environment = { production: true };' > src/environments/environment.prod.ts

# Create assets directory structure
mkdir -p src/assets/{projects,blog,icons}

# Initialize Git repository
git init
git add .
git commit -m "Initial commit: Portfolio project setup"

# Start development server
echo "Project initialized successfully!"
echo "Run 'ng serve' to start the development server" 