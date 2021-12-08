import * as React from 'react';
import { View, Text, FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Table, Row, Rows} from 'react-native-table-component'
import { ProgressBar} from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  footer:{
    padding: 20,
    marginTop: 8,
    marginHorizontal: 0
  },
  footerBtn:{
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    height: '35%'
  },
  title: {
    fontSize: 18,
  },
  tableHeader:{
    height: '30%', 
    backgroundColor: '#f1f8ff'
  },
  rowTest:{
    flexDirection: 'row',
    padding: 20
  },
  answerBtn:{
    flex:1,
    padding:5,
    margin:10,
    backgroundColor: "#90a4ae",
    maxHeight: "50%",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const dataItems = [
  {
    id: 1,
    title: "First Test",
  },
  {
    id: 2,
    title: "Second Test",
  },
  {
    id: 3,
    title: "Third Test",
  },
  {
    id: 4,
    title: "Fourth Test",
  },
  {
    id: 5,
    title: "Fifth Test",
  },
  {
    id: 6,
    title: "Sixth Test",
  },
  {
    id: 7,
    title: "Seventh Test",
  }
];

function Item({ item, onPress, backgroundColor, textColor }){
  return(
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <Text>some text... blah blah blah</Text>
    </TouchableOpacity>
  );
} 

function HomeScreen() {


  function renderItem({ item }){
    const backgroundColor = "#90a4ae";
    const color = 'black';

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={dataItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListFooterComponent = {FooterComp}
    />
    
  </SafeAreaView>
  );
}

function FooterComp(){
  return(
    <View style={[styles.footer, {backgroundColor:'#62757f'}]}>
    <Text style={[{textAlign: 'center'},{color: 'white'},{fontSize: 16}]}>I'm footer :)</Text>
    <TouchableOpacity style={[styles.footerBtn,{backgroundColor: '#ffccbc'}]}>
    <Text style={{color: 'black'}}>Check results</Text>
    </TouchableOpacity>
  </View>);
}

function TestScreen() {
  return (
    <View style={{flexDirection: 'column',flex: 1}}>

      <View style={[styles.rowTest,{flex: 1}]}>
        <View style={{flex:1}}>
        <Text style={{textAlign:'left'}}>Question # of #</Text>
        </View>
      
       <View style={{flex: 1}}>
       <Text style={{textAlign:'right'}}>Time: ## s</Text>
       </View>      
      </View>

      <View style={[styles.rowTest,{flex:1}]}>
      <View style={{flex:1}}>
        <ProgressBar progress={0.75} color="#00BCD4" />
        </View>
      </View>

      <View style={[styles.rowTest,{flex:2}]}>
      <View style={{flex:1}}>
          <Text style={[styles.title,{textAlign: 'center'}]}>Some question to be displayed. Some question to be displayed. Some question to be displayed.</Text>
        </View>
      </View>

      <View style={[styles.rowTest,{flex:5,flexDirection: 'column'}]}>
        <View style={{flex:1,flexDirection: 'row'}}>
        <View style={styles.answerBtn}>
        <TouchableOpacity>
          <Text>A</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.answerBtn}>
        <TouchableOpacity>
        <Text>B</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{flex:1,flexDirection: 'row'}}>
        <View style={styles.answerBtn}>
        <TouchableOpacity>
        <Text>C</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.answerBtn}>
        <TouchableOpacity>
        <Text>D</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
}

function ResultsScreen() {
  return (
    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
      <Row data = {["Nick","Points","Test","Date"]} style={styles.tableHeader}/>
      <Rows data = {[["oleq","98","2","06-12-2021"],["mario","73","1","05-12-2021"]]}/>
    </Table>
  );
  }

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Tests" component={TestScreen} />
        <Drawer.Screen name="Results" component={ResultsScreen} />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
