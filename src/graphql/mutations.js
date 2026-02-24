import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    id
    userId
    repositoryId
    rating
    createdAt
    text
  }
}
`;

export const CREATE_USER = gql`
  mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    username
  }
}
`;

export const DELETE_REVIEW = gql`
  mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`;

