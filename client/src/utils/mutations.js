import gql from "graphql-tag";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PROPERTY = gql`
mutation addProperty(
  $propertyName: String!
  $propertyType: String!
  $streetAddress: String!
  $city: String!
  $state: String!
  $zipCode: Int!
  $sqFeet: Int!
  $numBathrooms: Float!
  $numBedroom: Int!
  $balcony: Boolean!
  $rent: Float!
  $petDeposit: Float!
  $renterDeposit: Float!
  $appFee: Float!
  $availability: Boolean!
  $ownerInfo: OwnerInfoInput
) {
  addProperty(
    propertyName: $propertyName
    propertyType: $propertyType
    streetAddress: $streetAddress
    city: $city
    state: $state
    zipCode: $zipCode
    sqFeet: $sqFeet
    numBathrooms: $numBathrooms
    numBedroom: $numBedroom
    balcony: $balcony
    rent: $rent
    petDeposit: $petDeposit
    renterDeposit: $renterDeposit
    appFee: $appFee
    availability: $availability
    ownerInfo: $ownerInfo
  ) {
    propertyName
    propertyType
    streetAddress
    city
    state
    zipCode
    sqFeet
    numBathrooms
    numBedroom
    balcony
    rent
    petDeposit
    renterDeposit
    appFee
    availability
    ownerInfo {
      mortgage
      propertyTaxes
      propertyInsurance
      tenant
    }
  }
}
`;

export const ADD_TENANT = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
