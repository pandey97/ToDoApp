import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from '../views/Home/HomeScreen'
import { GetTodoData } from '../controllers/homeController'
import { IApiResponse } from '../models/IApiResponse'
import { ToDoData } from '../models/ToDoModel'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { setToDoData } from '../redux/actions/ToDoAction'

const HomeViewModel = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state: RootState) => state.todoData)

  const fetchData = async() => {
    const res: IApiResponse<ToDoData> = await GetTodoData();
    console.log(res?.data?.data);
    if(res.isSuccess) dispatch(setToDoData(res?.data?.data));
  }
  useEffect(() => {
    fetchData();
  },[dispatch]);

  return (
    <HomeScreen 
    {
      ...{
        todoData
      }
    }/>
  )
}

export default HomeViewModel