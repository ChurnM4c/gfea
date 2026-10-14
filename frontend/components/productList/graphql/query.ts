import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
    query GetProducts($sortField: String, $sortOrder: String) {
  allProducts(sortField: $sortField, sortOrder: $sortOrder) {
    id
    name
    imageUrl
    price
    insteadOfPrice
    rating
    ratingCount
    description
    category
    brand_id
    Brand {
      name
      id
    }
  }
}
`;
