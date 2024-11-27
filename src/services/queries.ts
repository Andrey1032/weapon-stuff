import { gql } from "@apollo/client";

export const allProducts = gql`
    query allProducts($take: Int, $skip: Int) {
        products(take: $take, skip: $skip) {
            totalCount
            products {
                id
                title
                description
                price
                caliber
                magazine
                article
                barrel_length
                category_id
                ProductDocument {
                    Document {
                        url
                        size
                    }
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
            article
            barrel_length
            category_id
            ProductDocument {
                Document {
                    url
                    size
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
