import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";
import SearchSuggestions from "../Components/SearchSuggestions";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentResults, setShowRecentResults] = useState(false);

  const getMoviesResults = async (movieName) => {
    const response = await axios.get(`http://api.themoviedb.org/3/search/movie?
api_key=b3070a5d3abfb7c241d2688d066914e7&query=<${movieName}>&page=1`);
    console.log(response.data.results);
    let filteredMovies = response.data.results.filter(
      (movie) => movie.title != "Back and Forth"
    );
    setResults(filteredMovies);
  };

  const AddNewSearch = (searchItem) => {
    setRecentSearches(recentSearches.concat(searchItem));
  };

  const ToggleShowRecentResults = (val) => {
    setShowRecentResults(val);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        onAddNewSearch={AddNewSearch}
        ToggleShowRecentResults={ToggleShowRecentResults}
      />
      {showRecentResults ? (
        <SearchSuggestions
          recentSearches={recentSearches}
          getMoviesResults={getMoviesResults}
        />
      ) : null}
      <SearchResults
        getMoviesResults={getMoviesResults}
        results={results}
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        navigation={navigation}
      />
    </View>
  );
};
export default HomeScreen;
