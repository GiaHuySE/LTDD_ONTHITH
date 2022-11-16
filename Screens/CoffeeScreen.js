import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState } from "react";
// import { BlurView } from "@react-native-community/blur";
import { Ionicons } from "@expo/vector-icons";
import SearchField from "./SearchField";
import Categories from "./Categories";
import coffees from "../config/coffees";
import CoffeeDetailScreen from "./CoffeeDetailScreen";
const { width } = Dimensions.get("window");
const CoffeeScreen = ({ navigation }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const startValue = new Animated.Value(0);
  const ringing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(startValue, {
          toValue: -1, // so i add the delay here
          duration: 100,
          delay: 800,
        }),
        Animated.timing(startValue, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(startValue, {
          toValue: -1,
          duration: 100,
        }),
        Animated.timing(startValue, {
          toValue: 1,
          duration: 100,
        }),
        Animated.timing(startValue, {
          toValue: 0,
          duration: 100,
        }),
      ])
    ).start();
  };
  const rotation = startValue.interpolate({
    inputRange: [-1, 1], // left side to right side
    outputRange: ["-10deg", "10deg"],
  });
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
      blurRadius={90}
    >
      <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                borderRadius: 10,
                overflow: "hidden",
                width: 10 * 4,
                height: 10 * 4,
              }}
            >
              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="menu" size={10 * 2.5} color="white" />
              </View>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={ringing}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  width: 10 * 4,
                  height: 10 * 4,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Animated.View
                    style={{
                      alignSelf: "center",
                      transform: [{ rotate: rotation }],
                    }}
                  >
                    <Ionicons
                      name="notifications"
                      size={10 * 2.5}
                      color="white"
                    />
                  </Animated.View>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 10 * 4,
                height: 10 * 4,
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  height: "100%",
                  padding: 10 / 2,
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 10,
                  }}
                  source={require("../assets/avatar2.jpg")}
                />
              </View>
            </View>
          </View>
          <View style={{ width: "80%", marginVertical: 10 * 3 }}>
            <Text
              style={{
                color: "white",
                fontSize: 10 * 3.5,
                fontWeight: "600",
              }}
            >
              Find the best coffee for you
            </Text>
          </View>
          <SearchField />
          <Categories onChange={(id) => setActiveCategoryId(id)} />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {coffees
              .filter((coffees) => {
                if (activeCategoryId === null) {
                  return true;
                }
                return coffees.categoryId === activeCategoryId;
              })
              .map((coffees) => (
                <View
                  key={coffees.id}
                  style={{
                    width: width / 2 - 10 * 2,
                    marginBottom: 10,
                    marginBottom: 20,
                    borderRadius: 20,
                    overflow: "hidden",
                  }}
                >
                  <View
                    blurRadius={100}
                    style={{ padding: 5, backgroundColor: "white" }}
                  >
                    <TouchableOpacity
                      style={{ height: 150, width: "100%" }}
                      onPress={() =>
                        navigation.navigate("CoffeeDetailScreen", {
                          coffeeID: coffees.id,
                        })
                      }
                    >
                      <Image
                        source={coffees.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 10,
                        }}
                      />
                      <View
                        style={{
                          position: "absolute",
                          right: 0,
                          borderBottomStartRadius: 30,
                          borderTopEndRadius: 20,
                          overflow: "hidden",
                        }}
                      >
                        <View style={{ flexDirection: "row", padding: 8 }}>
                          <Ionicons name="star" size={17} color={"yellow"} />
                          <Text style={{ color: "white" }}>
                            {coffees.rating}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: "black",
                        fontWeight: "600",
                        fontSize: 17,
                        marginTop: 10,
                        marginBottom: 5,
                      }}
                    >
                      {coffees.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ color: "black", fontSize: 12 }}
                    >
                      {coffees.included}
                    </Text>
                    <View
                      style={{
                        marginVertical: 5,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#D17842", marginRight: 5 }}>
                          $
                        </Text>
                        <Text style={{ color: "black", fontSize: 16 }}>
                          {coffees.price}
                        </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: "#D17842",
                            padding: 5,
                            borderRadius: 10,
                          }}
                        >
                          <Ionicons name="add" size={10 * 2} color={"black"} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default CoffeeScreen;

const styles = StyleSheet.create({});
