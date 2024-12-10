import { gql } from "@apollo/client";

export const allProductsQuery = gql`
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
                ProductsInBasket {
                    basket_id
                    value
                }
            }
        }
    }
`;
export const oneProductQuery = gql`
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
            ProductsInBasket {
                basket_id
                value
            }
        }
    }
`;

export const allCategoriesQuery = gql`
    query allCategories {
        categories {
            categories {
                id
                title
            }
        }
    }
`;

export const userBasketQuery = gql`
    query userBasket {
        basketForUser {
            totalCount
            productsInBasket {
                basket_id
                product_id
                value
                created_at
                Product {
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
        }
    }
`;
export const addProductToBasketQuery = gql`
    mutation addProductToBasket($productId: Int!) {
        addProductToBasket(addProductToBasketInput: { productId: $productId }) {
            basket_id
        }
    }
`;
export const removeProductFromBasketQuery = gql`
    mutation removeProductFromBasket($productId: Int!) {
        removeProductFromBasket(product_id: $productId) {
            basket_id
        }
    }
`;

export const changeValueProductInBasketQuery = gql`
    mutation changeValueProductInBasket($product_id: Int!, $value: Int!) {
        changeProductValueInBasket(
            updateBasketInput: { product_id: $product_id, value: $value }
        ) {
            product_id
        }
    }
`;

export const createOrderQuery = gql`
    mutation createOrder {
        createOrder {
            Basket {
                ProductsInBasket {
                    value
                    Product {
                        price
                    }
                }
            }
        }
    }
`;
