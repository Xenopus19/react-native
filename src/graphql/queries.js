import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      totalCount
      edges {
        cursor
        node {
          id
          ownerName
          name
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          watchersCount
          forksCount
          ownerAvatarUrl
          description
          language
          userHasReviewed
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
