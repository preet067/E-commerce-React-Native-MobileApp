import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CategoryCard from '../components/CategoryCard';
import { theme } from '../constants/theme';
import DealCaroussel from '../components/DealCaroussel';
import ProfileBtn from '../commons/ProfileBtn';

const categories = [
  {
    id: 1,
    title: 'Welcome',
    image: require('../../assets/img/cart.png'),
  },

];

const NUM_COLUMNS = 1;

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'E-React',
  };

  state = {};

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="#90caf9" h={220} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  keyExtractor = item => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <Box f={1}>
        <StatusBar barStyle="light-content" />
        <Box h={200} bg="grey" w={1}>
          <DealCaroussel />
        </Box>

        <Box f={1} p={10}>
          <FlatList
            data={categories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            numColumns={NUM_COLUMNS}
            ItemSeparatorComponent={this.separator}
          />
        </Box>
      </Box>
    );
  }
}

export default HomeScreen;
