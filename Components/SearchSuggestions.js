import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

const SearchSuggestions = ({ recentSearches, getMoviesResults }) => {
  return (
    <View>
      {recentSearches.map((recentsearch, i) => {
        return (
          <ListItem
            containerStyle={{ backgroundColor: "#F7DC6F" }}
            key={i}
            bottomDivider
          >
            <ListItem.Content>
              <TouchableOpacity onPress={() => getMoviesResults(recentsearch)}>
                <ListItem.Title>{recentsearch}</ListItem.Title>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </View>
  );
};

export default SearchSuggestions;
