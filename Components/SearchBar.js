import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({
  searchTerm,
  onTermChange,
  onAddNewSearch,
  ToggleShowRecentResults,
}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={{ top: 10 }} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search for a Movie !"
        value={searchTerm}
        onChangeText={onTermChange}
        onEndEditing={() => onAddNewSearch(searchTerm)}
        onFocus={() => ToggleShowRecentResults(true)}
        onBlur={() => ToggleShowRecentResults(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 30,
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 10,
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#F5C518",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginLeft: 4,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default SearchBar;
