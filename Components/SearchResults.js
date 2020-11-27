import React, { useEffect } from "react";
import { View, Text } from "react-native";
import MoviesList from "../Components/MoviesList";

const SearchResults = ({
  searchTerm,
  results,
  getMoviesResults,
  navigation,
}) => {
  useEffect(() => {
    getMoviesResults(searchTerm);
  }, [searchTerm]);

  const movienotfoundMessage = <Text>Sorry Movie Not Found</Text>;

  return (
    <View>
      {searchTerm.length == 0 ? (
        <Text>Start Searching</Text>
      ) : results.length == 0 ? (
        movienotfoundMessage
      ) : (
        <MoviesList movieslist={results} navigation={navigation} />
      )}
    </View>
  );
};

export default SearchResults;
