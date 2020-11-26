import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import MoviesList from "../Components/MoviesList";

const SearchResults = ({ searchTerm }) => {
  const [results, setResults] = useState(null);
  const getMoviesResults = async (movieName) => {
    const response = await axios.get(`http://api.themoviedb.org/3/search/movie?
api_key=b3070a5d3abfb7c241d2688d066914e7&query=<${movieName}>&page=1`);
    setResults(response.data.results);
  };

  useEffect(() => {
    getMoviesResults(searchTerm);
  }, [searchTerm]);

  return (
    <View>
      <MoviesList movieslist={results} />
    </View>
  );
};

export default SearchResults;
