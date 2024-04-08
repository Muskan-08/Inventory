# Inventory Management

A simple inventory management web app where you can check list of all product and can manage the product available in the inventory like editing the price and quantity deleting the product and disabling the product.
This app will have two view admin and user which can be switch from navigation bar using switch button 
- Admin
admin can edit, delete, disable the product
- User
user can only view the product
actions buttons will be hidden.

## Approach

Considering  Modularity and Encapsulation, project has been modularized into three layers -
1. View -> The main layouts.
2. Modules -> The individual modules needed to build a layout.
3. Components -> The individual units/components needed to build a module.

Considering  Extensibility, project has been implemented using Redux to make flexible use of states and reducer throughout the project withour prop drilling.

Considering Readability, project code has been formatted with appropriate naming conventions and indentations.
The data and configurations has been seperated out for more clear and readable code.

API services has been seperated out in a Service folder.

Since it's a standalone app, One view has been created and it's modules has been rendered based on Admin/User.


## Getting Started

## Local Setup

### Pre-Requisites

1. Install VS Code Edition .

    For Windows - (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&passive=false&cid=2030).

    For Mac - (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio-mac/?sku=communitymac&rel=17).

2. Install Node & Install a Package Manager - npm/yarn. (https://nodejs.org/de/blog/release/v14.17.1/).


#### Running The APP

    npm install

    npm run start

#### Generating The Build

    npm run build

## Folder Structure

App -> View -> Modules -> Components

## Built With

- React JS.
- Typescript.
- Redux.
- Styled-components.
- Antd design.

