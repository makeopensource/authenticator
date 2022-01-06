import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ApplicationListItem from '../components/application-list-item';

export default function ApplicationList({ data }) {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={ApplicationListItem}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
}

ApplicationList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    totp: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  })).isRequired,
};
