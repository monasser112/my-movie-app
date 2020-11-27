import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const MovieDetailScreen = ({ route }) => {
  const { movieTitle, releasedate, poster, overview } = route.params;

  return (
    <ScrollView>
      <View style={{ marginTop: 50, marginHorizontal: 10 }}>
        <Text style={{ fontSize: 30 }}>{movieTitle}</Text>
        <Text style={{ marginVertical: 20, fontSize: 15 }}>
          Release Date :{releasedate}
        </Text>
        <Image
          style={styles.image}
          source={{ uri: `http://image.tmdb.org/t/p/w500${poster}` }}
          resizeMode="cover"
        />
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Overview :</Text>
        <Text style={{ fontSize: 17 }}>{overview}</Text>
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
