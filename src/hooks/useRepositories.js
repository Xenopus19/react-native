import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/client/react";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network", 
  });
  

  const repositories = data ? data.repositories : undefined
  return { repositories, loading };
};

export default useRepositories;
