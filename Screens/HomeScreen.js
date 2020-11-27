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
  const [showRecentResults, setShowRecentResults] = useState(false); //state to toggle search Suggestions Component

  const getMoviesResults = async (movieName) => {
    const response = await axios.get(`http://api.themoviedb.org/3/search/movie?
api_key=b3070a5d3abfb7c241d2688d066914e7&query=<${movieName}>&page=1`);
    let filteredMovies = response.data.results.filter(
      (movie) => movie.title != "Back and Forth"
    );
    setResults(filteredMovies);
  };

  const AddNewSearch = (searchItem) => {
    recentSearches.indexOf(searchTerm) === -1
      ? setRecentSearches(recentSearches.concat(searchItem))
      : setRecentSearches(recentSearches);
  }; //This Checking in order not to show the same search item more than once.

  const ToggleShowRecentResults = (val) => {
    setShowRecentResults(val);
  };

  return (
    <View style={{ backgroundColor: "#273746", height: "100%" }}>
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
        recentSearches={recentSearches}
        results={results}
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        navigation={navigation}
      />
    </View>
  );
};
export default HomeScreen;
