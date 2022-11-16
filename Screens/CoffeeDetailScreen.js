import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CoffeeScreen from "./CoffeeScreen";

const { height, width } = Dimensions.get("window");

const sizes = ["S", "M", "L"];
const CoffeeDetailScreen = ({ navigation }) => {
  const [activeSize, setActiveSize] = useState(null);
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            source={require("../assets/fahmi-fakhrudin-nzyzAUsbV0M-unsplash.jpg")}
            style={{
              height: height / 2 + 10 * 4,
              justifyContent: "space-between",
            }}
            imageStyle={{ borderRadius: 30, overflow: "hidden" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "black", borderRadius: 15 }}
              >
                <Ionicons
                  name="arrow-back"
                  color={"white"}
                  size={20}
                  onPress={() => navigation.navigate(CoffeeScreen)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: "black", borderRadius: 15 }}
              >
                <Ionicons name="heart" color={"white"} size={20} />
              </TouchableOpacity>
            </View>
            <View style={{ borderRadius: 30 }}>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: "600",
                      marginBottom: 10,
                    }}
                  >
                    Cappuccino
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "500",
                      marginBottom: 10,
                    }}
                  >
                    With Oat milk
                  </Text>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Ionicons name="star" size={15} color={"yellow"} />
                    <Text style={{ color: "white", marginLeft: 10 }}>4.5</Text>
                  </View>
                </View>
                <View style={{ width: "35%", justifyContent: "space-between" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: "black",
                        borderRadius: 10,
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons name="cafe" color={"orange"} size={20} />
                      <Text style={{ color: "white", fontSize: 13 }}>
                        Coffee
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: "black",
                        borderRadius: 10,
                        width: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons name="water" color={"orange"} size={20} />
                      <Text style={{ color: "white", fontSize: 13 }}>Milk</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "black",
                      padding: 5,
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "white", fontSize: 10 }}>
                      Medium roasted
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={{ padding: 10 }}>
            <Text
              style={{ color: "white-smoke", fontSize: 17, marginBottom: 10 }}
            >
              Description
            </Text>
            <Text numberOfLines={3} style={{ color: "black" }}>
              Cappuccino is a coffee drink made with espresso and hot milk. It
              is traditionally prepared with steamed milk, and is traditionally
              topped with a small amount of foam.
            </Text>
            <View style={{ marginVertical: 10 }}>
              <Text
                style={{ color: "white-smoke", fontSize: 17, marginBottom: 10 }}
              >
                Size
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {sizes.map((size, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setActiveSize(size)}
                    style={[
                      {
                        borderWidth: 2,
                        borderRadius: 10,
                        width: width / 3 - 30,
                        paddingVertical: 5,
                        alignItems: "center",
                      },
                      activeSize === size && {
                        borderColor: "#D17842",
                        backgroundColor: "gray",
                      },
                    ]}
                  >
                    <Text style={{ color: "black" }}>{size}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView
        style={{
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ color: "black" }}>Price</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 17 }}>$</Text>
            <Text style={{ fontSize: 17, marginLeft: 5 }}>4.00</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginRight: 0,
            backgroundColor: "#D17842",
            borderRadius: 10,
            width: width / 2 + 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 20 }}>Buy now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default CoffeeDetailScreen;

const styles = StyleSheet.create({});
