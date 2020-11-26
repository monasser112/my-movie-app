import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar searchTerm={searchTerm} onTermChange={setSearchTerm} />
      <SearchResults searchTerm={searchTerm} onTermChange={setSearchTerm} />
    </View>
  );
};
export default HomeScreen;
