import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const MovieDetailScreen = ({ route }) => {
  const { movieTitle, releasedate, poster, overview } = route.params;

  return (
    <ScrollView style={{ backgroundColor: "#273746" }}>
      <View
        style={{
          marginTop: 50,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 30, color: "white", fontStyle: "italic" }}>
          {movieTitle}
        </Text>
        <Text style={{ marginVertical: 20, fontSize: 15, color: "#5D6D7E" }}>
          Release Date :{releasedate}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: `http://image.tmdb.org/t/p/w500${poster}` }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#5D6D7E",
            marginVertical: 10,
          }}
        >
          Overview
        </Text>
        <Text style={{ fontSize: 17, color: "white" }}>{overview}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 400,
  },
});

export default MovieDetailScreen;
