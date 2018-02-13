/*
* @flow
*/

import React, { Component } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { List, ListItem } from "react-native-elements";

import { SECONDARY_COLOR, WHITE } from "../../config/constants";
import { ItemStyle } from "./styles";
type Props = {};

const Container = styled.View`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  overflow: scroll;
  background-color: ${SECONDARY_COLOR};
  height: 60%;
`;

const items = [
  {
    id: 1,
    name: "Roast chicken",
    avatar_url:
      "http://93.104.213.115/~ciss/wpchicen/wp-content/uploads/2016/02/logosajt.png"
  },
  {
    id: 2,
    name: "Rice",
    avatar_url: "http://pngimg.com/uploads/rice/rice_PNG22.png"
  },
  {
    id: 3,
    name: "Oven Baked Or Roasted Beef",
    avatar_url: "http://www.pngmart.com/files/1/Cooked-Meat-PNG-Clipart.png",
    subtitle: "Vice President"
  },
  {
    id: 4,
    name: "Pan Fried beef",
    avatar_url:
      "http://www.narrinspices.com/uploads/6/8/9/4/68943513/6665207.jpg?1460742974",
    subtitle: "Vice President"
  },
  {
    id: 5,
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  }
];

class ListItems extends Component<Props> {
  _keyExtractor = (item, index) => item.id.toString();
  _renderItem = ({ item }) => (
    // <Item id={item.id} onPressItem={this._onPressItem} title={item.name} />
    <TouchableOpacity>
      <ListItem
        roundAvatar
        avatar={{ uri: item.avatar_url }}
        key={item.id}
        title={item.name}
        hideChevron
        titleStyle={ItemStyle.title}
        avatarStyle={ItemStyle.avatar}
        avatarContainerStyle={ItemStyle.avatar}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <Container>
        <FlatList
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </Container>
    );
  }
}

export default ListItems;
