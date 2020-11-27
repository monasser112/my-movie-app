import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native";
const SingleMovie = ({ movietitle, poster, releasedata, overview }) => {
  return (
    <View style={styles.singleMovieSplitter}>
      <View style={styles.posterSection}>
        <Text style={{ fontSize: 20, paddingVertical: 5 }}>{movietitle}</Text>
        <Image
          style={styles.image}
          source={{ uri: `http://image.tmdb.org/t/p/w500${poster}` }}
        />
        <Text style={{ fontSize: 15, fontStyle: "italic", fontWeight: "bold" }}>
          Release Date:{releasedata}
        </Text>
      </View>
      <View style={styles.contentSection}>
        <Text style={{ fontWeight: "bold", marginVertical: 5 }}>OverView:</Text>
        <Text style={styles.Overview}>{overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 175,
    height: 250,
  },
  singleMovieSplitter: {
    display: "flex",
    flexDirection: "row",
  },
  posterSection: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 10,
  },
  contentSection: {
    flex: 1,
    marginVertical: 10,
    paddingVertical: 10,
  },
  Overview: {
    fontSize: 17,
  },
});

export default SingleMovie;
