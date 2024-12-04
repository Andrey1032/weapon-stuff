import { gql } from "@apollo/client";

export const allProducts = gql`
    query allProducts(
        $take: Int
        $skip: Int
        $search: String
        $categoryId: Int
    ) {
        products(
            take: $take
            skip: $skip
            search: $search
            categoryId: $categoryId
        ) {
            totalCount
            products {
                id
                title
                price
                caliber
                ProductDocument {
                    Document {
                        url
                    }
                }
                Category {
                    title
                }
            }
        }
    }
`;
export const oneProduct = gql`
    query oneProduct($id: Int!) {
        product(id: $id) {
            id
            title
            description
            price
            caliber
            magazine
            barrel_length
            ProductDocument {
                Document {
                    url
                }
            }
        }
    }
`;

export const allCategories = gql`
    query allCategories {
        categories {
            categories {
                id
                title
            }
        }
    }
`;

export const userBasket = gql`
    query userBasket {
        basketForUser {
            totalCount
            productsInBasket {
                basket_id
                product_id
                value
                Product {
                    id
                }
            }
        }
    }
`;
