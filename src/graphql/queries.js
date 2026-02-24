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

export const GET_REPOSITORIES_FILTER = gql`
  query Repositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      totalCount
      edges {
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
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
            repository {
              name
              ownerName
              id
            }
            userId
          }
        }
      }
    }
  }
`;

export const REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
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
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        totalCount
      }
    }
  }
`;
