/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createSeller = /* GraphQL */ `
  mutation CreateSeller(
    $input: CreateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    createSeller(input: $input, condition: $condition) {
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
export const updateSeller = /* GraphQL */ `
  mutation UpdateSeller(
    $input: UpdateSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    updateSeller(input: $input, condition: $condition) {
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
export const deleteSeller = /* GraphQL */ `
  mutation DeleteSeller(
    $input: DeleteSellerInput!
    $condition: ModelSellerConditionInput
  ) {
    deleteSeller(input: $input, condition: $condition) {
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
export const createItemTypeSeller = /* GraphQL */ `
  mutation CreateItemTypeSeller(
    $input: CreateItemTypeSellerInput!
    $condition: ModelItemTypeSellerConditionInput
  ) {
    createItemTypeSeller(input: $input, condition: $condition) {
      id
      seller {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateItemTypeSeller = /* GraphQL */ `
  mutation UpdateItemTypeSeller(
    $input: UpdateItemTypeSellerInput!
    $condition: ModelItemTypeSellerConditionInput
  ) {
    updateItemTypeSeller(input: $input, condition: $condition) {
      id
      seller {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteItemTypeSeller = /* GraphQL */ `
  mutation DeleteItemTypeSeller(
    $input: DeleteItemTypeSellerInput!
    $condition: ModelItemTypeSellerConditionInput
  ) {
    deleteItemTypeSeller(input: $input, condition: $condition) {
      id
      seller {
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
      createdAt
      updatedAt
    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
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
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
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
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
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
