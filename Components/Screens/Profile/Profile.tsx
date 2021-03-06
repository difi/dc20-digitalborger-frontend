import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
  Dimensions,
} from "react-native";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import ProfileHeader from "./assets/ProfileHeader";
import { useEffect, useState } from "react";
import { Overlay } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface CardProps {
  icon: string;
  data: string;
  editable: boolean;
}

const Card = ({ icon, data, editable }: CardProps) => {
  const [value, setValue] = useState(data);
  const [changeLayout, setChangeLayout] = useState(false);
  const [finalValue, setFinalValue] = useState("");

  useEffect(() => {
    setFinalValue(data);
  }, [data]);

  const saveData = async () => {
    if (value !== finalValue) {
      //Send to DB
      //await sendChange(finalValue);
    }
    setChangeLayout(!changeLayout);
  };

  const abort = () => {
    setValue(finalValue);
    setChangeLayout(!changeLayout);
  };

  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: "white",
        minHeight: 50,
        borderRadius: 20,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,

        elevation: 5,
      }}
    >
      {changeLayout ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 80,
          }}
        >
          <TouchableOpacity onPress={() => abort()}>
            <View
              style={{
                width: 50,
                height: 40,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Avbryt</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              margin: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#68CE67",
                height: 40,
                width: 40,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name={icon} size={27} color={"white"} />
            </View>
          </View>
        </View>
      )}

      <View style={{ flex: 3 }}>
        {changeLayout ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                alignItems: "center",
                padding: 10,
              }}
              onChangeText={(text) => setValue(text)}
              value={value}
            />
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ fontSize: 16 }}>{value}</Text>
          </View>
        )}
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {editable && (
          <TouchableOpacity onPress={() => setChangeLayout(!changeLayout)}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {changeLayout ? (
                <TouchableOpacity onPress={() => saveData()}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 50,
                        height: 40,
                        backgroundColor: "#68CE67",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ color: "white", fontWeight: "bold" }}>
                        Lagre
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setChangeLayout(!changeLayout)}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="edit" size={20} color={"black"} />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const { height } = Dimensions.get("window");

const history = [
  { date: "30.07.2020 kl.08.15", page: "www.skatteetaten.no/" },
  { date: "26.07.2020 kl.20.23", page: "www.helsenorge.no/" },
  { date: "12.04.2020 kl.12.15", page: "www.vigo.no/" },
  { date: "20.04.2020 kl.13.00", page: "www.helsenorge.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
  { date: "25.03.2020 kl.16.30", page: "www.vegvesen.no/" },
];

export default function Profile() {
  const [visibility, setVisibility] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#A4D7F4" }}>
      <KeyboardAwareScrollView
        style={{ height: height, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#A4D7F4",
              borderBottomRightRadius: 75,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.heading}>Din profil</Text>
            <ProfileHeader width={200} height={200} />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "white",
            borderTopLeftRadius: 55,
            padding: 25,
            paddingTop: 30,
          }}
        >
          <View style={{ flex: 1 }}>
            <Card icon={"user"} data={"Jørgen Hollum"} editable={true} />
          </View>
          <View style={{ flex: 1 }}>
            <Card icon={"home"} data={"Kong inges gt 22"} editable={true} />
          </View>
          <View style={{ flex: 1 }}>
            <Card icon={"phone"} data={"+47 90910636"} editable={true} />
          </View>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setVisibility(true)}
          >
            <View style={{ flex: 1, justifyContent: "center", height: 50 }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#68CE67",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,

                  elevation: 5,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Se innloggingshistorikk
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <Overlay
            isVisible={visibility}
            overlayStyle={{
              shadowOpacity: 1,
              shadowRadius: 2,
              shadowColor: "#606060",
              borderRadius: 15,
              width: "90%",
            }}
          >
            <View>
              <View></View>

              <View style={{ marginBottom: 20, margin: 10 }}>
                <View style={styles.historyText}>
                  <Text style={styles.historyTitle}>Innlogging:</Text>
                  {history.map((event, index) => (
                    <Text style={{ paddingBottom: 5 }} key={index}>
                      {event.page}
                    </Text>
                  ))}
                </View>
                <View style={[styles.historyDate]}>
                  <Text style={styles.historyTitle}>Dato:</Text>
                  {history.map((event, index) => (
                    <Text style={{ paddingBottom: 5 }} key={index}>
                      {event.date}
                    </Text>
                  ))}
                </View>
              </View>

              <Button title="Lukk" onPress={() => setVisibility(false)} />
            </View>
          </Overlay>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
    padding: 20,
    alignSelf: "flex-start",
  },
  historyContainer: { width: 300, fontSize: 15 },
  historyTitle: { fontWeight: "bold", marginBottom: 5, fontSize: 15 },
  historyText: { fontSize: 15 },
  historyDate: { position: "absolute", right: 0, fontSize: 15 },
});
