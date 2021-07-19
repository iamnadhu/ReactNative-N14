import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Container, Header, Content, Card, CardItem, H1} from 'native-base';
import moment from 'moment';

const User = ({details}) => {
  // console.log(details)
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          source={{
            uri: details.picture?.large,
            width: 150,
            height: 250,
          }}
          style={styles.image}
        />
      </CardItem>
      <CardItem style={styles.cardItem}>
        <H1 style={styles.text}>
          {details.name.title} {details.name.first} {details.name.last}
        </H1>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.cell}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.email}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>
          {details.location.city} {details.location.state}{' '}
          {details.location.country}
        </Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text
          style={{
            color: '#fbd46d',
          }}>
          Registered on :{'  '}
        </Text>
        <Text style={styles.text}>
          {moment(details.registered.date).format('DD-MM-YYYY')}
        </Text>
      </CardItem>
    </Card>
  );
};

export default User;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});
