import {SafeAreaView, ScrollView, Text} from 'react-native';
import React from 'react';
// import Task1 from './Screen/Task1';
// import PasswordFile from './Screen/PasswordFile';
// import Learnings from './Screen/Learnings';
import Design_1 from './Screen/Design_1';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Learnings /> */}
        <Design_1 />
        {/* <PasswordFile /> */}
        {/* <Task1 /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
