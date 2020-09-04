/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      country
      cost
      type {
        id
        name
        items {
          nextToken
        }
        seller {
          nextToken
        }
        createdAt
        updatedAt
      }
      sellers {
        items {
          id
          name
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        country
        cost
        type {
          id
          name
          createdAt
          updatedAt
        }
        sellers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSeller = /* GraphQL */ `
  query GetSeller($id: ID!) {
    getSeller(id: $id) {
      id
      name
      location
      item {
        id
        name
        description
        country
        cost
        type {
          id
          name
          createdAt
          updatedAt
        }
        sellers {
          nextToken
        }
        createdAt
        updatedAt
      }
      type {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSellers = /* GraphQL */ `
  query ListSellers(
    $filter: ModelSellerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSellers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        item {
          id
          name
          description
          country
          cost
          createdAt
          updatedAt
        }
        type {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
      id
      name
      items {
        items {
          id
          name
          description
          country
          cost
          createdAt
          updatedAt
        }
        nextToken
      }
      seller {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        items {
          nextToken
        }
        seller {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getTypeId = /* GraphQL */ `
  query GetTypeId($name: String!) {
    getTypeId(name: $name) {
      id
      name
  }
`;