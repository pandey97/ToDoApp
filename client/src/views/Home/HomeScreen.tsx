import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Button, Modal } from 'react-native'
import React from 'react'
import Header from './Header/Header'
import { CONSTANTS } from '@shared-constants'
import { GetToDoData, ToDoData } from '../../models/ToDoModel'
import AnimatedInput from '@components-FloatingLabelInput';
import styles from './HomeScreen.style'
import Glyphs from '@assets'
import withLoader from '@hocs-loderHOC'

interface HomeScreenProps {
  todoData: any,
  handleEdit: (item: GetToDoData) => void,
  handleDelete: (item: GetToDoData) => void,
  openModal: () => void,
  closeModal: () => void,
  handleSubmit: () => void,
  TodoDatas: {
    title: string,
    content: string
  },
  isModalVisible: boolean,
  handleChange: (field: string, value: string) => void;
  loading: boolean
}

const HomeScreen = (props: HomeScreenProps) => {
  const renderItem = ({ item }: { item: GetToDoData }) => (
    <View style={styles.todoContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => props.handleEdit(item)}>
          <Image source={Glyphs.edit} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.handleDelete(item)}>
          <Image source={Glyphs.delete} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.headerText}>{CONSTANTS.RECENTTASK}</Text>
      <FlatList
        data={props?.todoData?.todoData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.addContainer}>
        <TouchableOpacity onPress={props.openModal}>
          <Image source={Glyphs.add} style={styles.addButton} />
        </TouchableOpacity>
      </View>

      {/* Modal for adding a new ToDo */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isModalVisible}
        onRequestClose={props.closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{CONSTANTS.ADDNEWTASK}</Text>
            <AnimatedInput
              placeholder={CONSTANTS.TITLE}
              value={props.TodoDatas.title}
              onChangeText={value => props.handleChange('title', value)}
            />
            <AnimatedInput
              placeholder={CONSTANTS.CONTENT}
              value={props.TodoDatas.content}
              onChangeText={value => props.handleChange('content', value)}
              multiline={true}
            />
            <View style={styles.buttonContainer}>
              <Button title={CONSTANTS.SUBMIT} onPress={props.handleSubmit} />
              <Button title={CONSTANTS.CANCEL} onPress={props.closeModal} color="red" />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

export default withLoader(HomeScreen);