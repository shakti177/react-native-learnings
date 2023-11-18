import { View, Text } from 'react-native'
import React from 'react'
import Flatcard from '../Components/Learnings/Flatcard'
import ScrollCards from '../Components/Learnings/ScrollCards'
import FancyCards from '../Components/Learnings/FancyCards'
import ActionCards from '../Components/Learnings/ActionCards'
import ContactList from '../Components/Learnings/ContactList'

const Learnings = () => {
  return (
    <View>
      <Flatcard/>
      <ScrollCards/>
      <FancyCards/>
      <ActionCards/>
      <ContactList/>
    </View>
  )
}

export default Learnings