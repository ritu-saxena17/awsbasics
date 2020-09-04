/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateSeller = /* GraphQL */ `
  subscription OnCreateSeller {
    onCreateSeller {
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
export const onUpdateSeller = /* GraphQL */ `
  subscription OnUpdateSeller {
    onUpdateSeller {
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
export const onDeleteSeller = /* GraphQL */ `
  subscription OnDeleteSeller {
    onDeleteSeller {
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
export const onCreateItemTypeSeller = /* GraphQL */ `
  subscription OnCreateItemTypeSeller {
    onCreateItemTypeSeller {
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
export const onUpdateItemTypeSeller = /* GraphQL */ `
  subscription OnUpdateItemTypeSeller {
    onUpdateItemTypeSeller {
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
export const onDeleteItemTypeSeller = /* GraphQL */ `
  subscription OnDeleteItemTypeSeller {
    onDeleteItemTypeSeller {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
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
