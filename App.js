/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import i18n from './i18n';
import {StyleSheet, View, Text, Button} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import {useI18n} from '@react-native-localize-ext/react';

function handleLocalizationChange() {
  const locales = RNLocalize.getLocales();
  const languageCode = locales[0].languageCode;
  console.log(languageCode);
  i18n._.locale(languageCode);
}

const App = () => {
  handleLocalizationChange();
  RNLocalize.addEventListener('change', handleLocalizationChange);
  const profile = i18n.profile.info();
  const time = i18n.today();
  useI18n(i18n);
  return (
    <View style={styles.container}>
      <Text>{profile}</Text>
      <Text>{time}</Text>
      <View style={styles.buttons}>
        <Button title={i18n.button.cancel} />
        <Button title={i18n.button.submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 35,
    width: 150,
  },
});

export default App;
