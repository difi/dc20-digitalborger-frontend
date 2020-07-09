import * as React from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {black} from "react-native-paper/lib/typescript/src/styles/colors";


const Skatt =
    {
        beregnet: 10000,
        trekk: 0.11,
    }

const FlatListComp = [
    {

    }
]

const cols= 2;
const rows = 2;

export default function SkatteMelding(){
    return(
      <View style={styles.gridContainer}>
          <View style={styles.grid}>
              <Text style={styles.skattTitle}>Totalt beregnet skatt 2020:</Text>
              <Text style={styles.skattInput}>{Skatt.beregnet}</Text>


          </View>

          <View style={styles.meldingDivider}>
              <TouchableOpacity style = {styles.buttonArea} onPress={() => Linking.openURL('https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/')}>
                  <FontAwesome key ={0} name ={'arrow-circle-right'} size={20} />
                  <Text style = {styles.buttonText}>Se skatteberegningen</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.grid}>
              <Text style={styles.skattTitle}>Skattetrekk på hovedinntekt:</Text>
              <Text style={styles.skattInput}>{Skatt.trekk * 100 + "%"}</Text>


          </View>

          <View>
              <TouchableOpacity style = {styles.buttonArea} onPress={() => Linking.openURL('https://www.skatteetaten.no/person/skatt/skattekort/frikort/bestille-frikort/')}>
                  <FontAwesome key ={0} name ={'arrow-circle-right'} size={20} />
                  <Text style = {styles.buttonText}>Se alle skattetrekk</Text>
              </TouchableOpacity>
          </View>

      </View>
    );
}

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey",
    },
    meldingDivider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    grid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
    },
    skattInput: {
      fontSize: 15,
      fontWeight: "bold"
    },

    skattTitle: {
            fontSize: 13,
            borderBottomColor: 'gray',
            borderBottomWidth: 1
    },
    buttonArea: {
        margin: '5%',
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 13,
        fontWeight: "bold",
        marginLeft: 10
    }

})
