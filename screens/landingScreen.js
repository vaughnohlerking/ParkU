import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from "./landingCSS";
const HomeScreen = ({ navigation }) => {
    let location = {
        latitude: 30.4133,
        longitude: -91.18,
        latitudeDelta: .02,
        longitudeDelta: .02,
      }
    const mapStyles = {
        width: '90%',
        height: '50%',
        position: 'absolute',
        bottom: 20,
        borderRadius: 20,
        };
    const renderButtonText = (rowData) => {
        const label = rowData;
        navigation.navigate(label, { name: label})
        return `${label}`;
        };
    const data = ["PFT lot", "UREC lot", "Union lot"];
    return(
        <View style={styles.container}>
            <MapView
                style ={mapStyles}
                provider={PROVIDER_GOOGLE}
                mapType='hybrid'
                region={location}
            >
            <MapView.Marker
                coordinate={{latitude: 30.4054,
                longitude: -91.18}}
                title={"PFT"}
                description={"Patrick F. Taylor Lot"}
            />
            <MapView.Marker
                coordinate={{latitude: 30.4125,
                longitude: -91.170}}
                title={"UREC"}
                description={"University Recreation Lot"}
            />
            <MapView.Marker
                coordinate={{latitude: 30.4118,
                longitude: -91.1775}}
                title={"Union"}
                description={"Student Union Parking lot"}
            />
            </MapView>
            <View style= {styles.card}>
            <ModalDropdown options={data}
            renderButtonText={(rowData) => renderButtonText(rowData)}
            dropdownStyle={{ 
                paddingRight: 10, 
                paddingLeft: 10, 
                paddingRight: 5, 
                alignItems: 'flex-end', 
                borderWidth: 5,
                borderRadius: 5,}}
            />
            </View>
        </View>
    )

}
export default HomeScreen;
