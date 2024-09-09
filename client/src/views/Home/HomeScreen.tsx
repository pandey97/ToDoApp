import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from './Header/Header'
import { CONSTANTS } from '../../shared/constants'
import { GetToDoData, ToDoData } from '../../models/ToDoModel'
import styles from './HomeScreen.style'

interface HomeScreenProps {
  todoData: ToDoData
}

const HomeScreen = (props: HomeScreenProps) => {
  console.log(props.todoData.todoData.data);
  const renderItem = ({ item }: { item: GetToDoData }) => (
    <View style={styles.todoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );
  return (
    <SafeAreaView style={{backgroundColor:"#FEF9D9",flex:1}}>
      <Header />
      <Text style={styles.headerText}>{CONSTANTS.RECENTTASK}</Text>
      <FlatList
        data={props?.todoData?.todoData?.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>

  )
}

export default HomeScreen