import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MoviesList from "../Components/MoviesList";

const SearchResults = ({
  searchTerm,
  results,
  getMoviesResults,
  navigation,
  recentSearches,
}) => {
  useEffect(() => {
    getMoviesResults(searchTerm);
  }, [searchTerm]);

  const movienotfoundMessage = (
    <Text style={styles.messageFromSearch}>Sorry Movie Not Found</Text>
  );

  return (
    <View>
      {searchTerm.length == 0 && recentSearches.length == 0 ? (
        <Text style={styles.messageFromSearch}>Search for a movie !</Text> //only show this message when there is no search term and no recent searches.
      ) : results.length == 0 ? (
        movienotfoundMessage
      ) : (
        <MoviesList movieslist={results} navigation={navigation} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  messageFromSearch: {
    display: "flex",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    marginVertical: 50,
    fontSize: 20,
  },
});

export default SearchResults;
