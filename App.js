import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import ApiComponent from "./component/ApiComponent";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBitcoinData } from './useBitcoinData';

/*export default function App() {
  const [bitcoinData, setBitcoinData] = useState(null);

  const fetchBitcoinData = async () => {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data = await response.json();
      setBitcoinData(data);

     
      await AsyncStorage.setItem('bitcoinData', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching Bitcoin data:', error);
    }
  };

  const loadBitcoinDataFromStorage = async () => {

    const storedData = await AsyncStorage.getItem('bitcoinData');
    if (storedData) {
      setBitcoinData(JSON.parse(storedData));
      console.log('Fetching from Local DB');
    } else {
      fetchBitcoinData(); 
      console.log('Fetching from api');
    }
  };

  useEffect(() => {
    loadBitcoinDataFromStorage();
  }, []);
  return (
		<View style={styles.container}>
     <Text>Bitcoin Rate Data:</Text>
      {bitcoinData ? (
        <FlatList style={{
          backgroundColor: 'yellow',
          padding: 20,
          
          
        }}
          data={Object.entries(bitcoinData.bpi)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
            <View >
              <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 5,
          
        }}>{item[1].description}</Text>
              <Text style={{
          fontSize: 16,
          color: 'black',
          marginBottom: 40,
          
        }}>Rate: {item[1].rate}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});*/
export default function App() {
  const bitcoinData = useBitcoinData(); // Use the custom hook to fetch and manage data

  return (
    <View style={styles.container}>
      <Text>Bitcoin Rate Data:</Text>
      {bitcoinData ? (
        <FlatList style={{
          backgroundColor: 'yellow',
          padding: 20,
          
          
        }}
          data={Object.entries(bitcoinData.bpi)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
            <View>
              <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 5,
          
        }}>{item[1].description}</Text>
              <Text style={{
          fontSize: 16,
          color: 'black',
          marginBottom: 40,
          
        }}>Rate: {item[1].rate}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

