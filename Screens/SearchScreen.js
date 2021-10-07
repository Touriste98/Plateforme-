import React from 'react';

import {
View,
Text,
StyleSheet,
Image,
Platform,
Dimensions,
TouchableOpacity,
Animated,
TextInput,
ScrollView
 
} from 'react-native';
import MapView from 'react-native-maps'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { markers,mapDarkStyle,mapStandardStyle} from '../model/mapData';

import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;


const SearchScreen = () => {
  const theme = useTheme();
  const initialMapState = {
    markers,
    categories: [
      { 
        name: 'Location', 
        icon: <FontAwesome style={styles.chipsIcon} name="sliders" size={18} />,
      },
      {
        name: 'Spécialité',
        icon: <FontAwesome  name="sliders" style={styles.chipsIcon} size={18} />,
      },
      {
        name: 'nom',
        icon: <FontAwesome  name="sliders" style={styles.chipsIcon} size={18} />,
      },
     
  ],
  region: {
    latitude: 22.62938671242907,
    longitude: 88.4354486029795,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  },
};
const [state, setState] = React.useState(initialMapState);
const onMarkerPress = (mapEventData) => {
  const markerID = mapEventData._targetInst.return.key;

  let x = (markerID * CARD_WIDTH) + (markerID * 20); 
  if (Platform.OS === 'ios') {
    x = x - SPACING_FOR_CARD_INSET;
  }

  _scrollView.current.scrollTo({x: x, y: 0, animated: true});
}




const _map= React.useRef(null);

const _scrollView= React.useRef(null);

return(  
 <View >
    <MapView
    ref={_map}
    minHeight={'100%'}
    initialRegion={state.region}
    style={styles.container}
    customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
    >
      {state.markers.map((marker,index)=>{
        return (
          <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)}>
          <Animated.View style={[styles.markerWrap]}>
          <Animated.Image
            source={require('../images/map_marker.png')}
            style={[styles.marker]}
            resizeMode="cover"
          />
        </Animated.View>
        </MapView.Marker>
        );
      })}
      
    </MapView>
    <View
    style={styles.searchBox}>
          <TextInput
          placeholder='chercher ici'
          placeholderTextColor='#000'
          autoCapitalize='none'
          style={{flex:1,padding:0}}
          />
    <Ionicons name='ios-search' size={20}/>
    </View>
    <ScrollView
    horizontal
    scrollEventThrottle={1}
    showsHorizontalScrollIndicator={false}
    height={50}
    style={styles.chipsScrollView}
   
    >
     {state.categories.map((category,index)=>{

       <TouchableOpacity  key={index} style={styles.chipsItem}>
         {category.icon}
         <Text>
           {category.name}
         </Text>
         </TouchableOpacity>
     })}
    </ScrollView>
    </View>
);
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  chipsIcon: {
    marginRight: 5,
  },
  
  searchBox: {
    position:'absolute', 
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute', 
    top:Platform.OS === 'ios' ? 90 : 80, 
    paddingHorizontal:10
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
});