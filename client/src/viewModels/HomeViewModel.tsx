import React, { useEffect, useRef, useState } from 'react'
import HomeScreen from '../views/Home/HomeScreen'
import { AddTodoData, DeleteToDoData, GetTodoData } from '../controllers/homeController'
import { IApiResponse } from '../models/IApiResponse'
import { GetToDoData, ToDoData } from '../models/ToDoModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { deleteToDoData, setToDoData } from '../redux/actions/ToDoAction'
import { Animated } from 'react-native'

const HomeViewModel = () => {
  const animatedValues = useRef<Animated.Value[]>([]).current;
  const dispatch = useDispatch();
  const todoData = useSelector((state: RootState) => state.todoData);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [TodoDatas, setToDoDatas] = useState({
    id: '',
    title: '',
    content: ''
  });

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (todoData?.todoData) {
      todoData.todoData.forEach((_: any, index: number) => {
        if (!animatedValues[index]) {
          animatedValues[index] = new Animated.Value(0);
        }
      });
    }
  }, [todoData.todoData]);

  const shakeItem = (index: number) => {
    console.log(animatedValues);
    Animated.sequence([
      Animated.timing(animatedValues[index], {
        toValue: 10, // Move to the right
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues[index], {
        toValue: -10, // Move to the left
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues[index], {
        toValue: 10, // Move to the right again
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValues[index], {
        toValue: 0, // Move back to original position
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const fetchData = async () => {
    try {
      setLoading(true)
      const res: IApiResponse<ToDoData> = await GetTodoData();
      console.log("res", res);
      if (res.isSuccess) dispatch(setToDoData(res?.data?.data));
    } catch (ex) {
      console.log(ex);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (item: GetToDoData) => {
    openModal();
    setToDoDatas({
      title: item.title,
      content: item.content,
      id: item._id
    })
  }

  const handleDelete = async (item: GetToDoData) => {
    try {
      setLoading(true);
      const res: IApiResponse<ToDoData> = await DeleteToDoData(item?._id);
      if (res.isSuccess) dispatch(deleteToDoData(item?._id));
    } catch (ex) {
      console.log(ex);
    } finally {
      setLoading(false);
    }
  }

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setToDoDatas({ title: '', content: '', id: '' });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res: IApiResponse<ToDoData> = await AddTodoData(TodoDatas);
      if (res.isSuccess) dispatch(setToDoData(res?.data?.data))
      closeModal();
    } catch (ex) {
      console.log(ex);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setToDoDatas(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <HomeScreen
      {
      ...{
        todoData,
        handleEdit,
        handleDelete,
        openModal,
        closeModal,
        handleSubmit,
        TodoDatas,
        isModalVisible,
        handleChange,
        loading,
        animatedValues,
        shakeItem
      }
      } />
  )
}

export default HomeViewModel