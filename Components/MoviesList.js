import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SingleMovie from "./SingleMovie";

const MoviesList = ({ movieslist, navigation }) => {
  return (
    <View>
      <FlatList
        data={movieslist}
        numColumns={1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Details", {
                  movieTitle: item.title,
                  releasedate: item.release_date,
                  poster: item.poster_path,
                  overview: item.overview,
                });
              }}
            >
              <View style={styles.singleMovieWrapper}>
                <SingleMovie
                  releasedata={item.release_date}
                  movietitle={item.title}
                  poster={item.poster_path}
                  overview={item.overview}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  singleMovieWrapper: {
    // flexDirection: "row",
    // flex: 1,
    // justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default MoviesList;
