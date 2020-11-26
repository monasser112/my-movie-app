import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import MoviesList from "../Components/MoviesList";

const SearchResults = ({ searchTerm }) => {
  const [results, setResults] = useState([]);

  const getMoviesResults = async (movieName) => {
    const response = await axios.get(`http://api.themoviedb.org/3/search/movie?
api_key=b3070a5d3abfb7c241d2688d066914e7&query=<${movieName}>&page=1`);
    let filteredMovies = response.data.results.filter(
      (movie) => movie.title != "Back and Forth"
    );
    setResults(filteredMovies);
  };

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
        <MoviesList movieslist={results} />
      )}
    </View>
  );
};

export default SearchResults;
