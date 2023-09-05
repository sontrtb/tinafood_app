import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {paddingHorizontal} from '@app/src/config/layout';
import {useNavigation} from '@react-navigation/native';
import TextInputGlobal from '@app/src/components/globals/TextInputGlobal';
import {useQuery} from 'react-query';
import {queryKey} from '@app/src/api/queryKey';
import {getMe} from '@app/src/api/apiUser';

function UserScreen() {
  const naviagtionn = useNavigation();

  const {data} = useQuery(queryKey.ME, getMe);

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.textLabel}>Username:</Text>
        <TextInputGlobal value={data?.username} />

        <Text style={styles.textLabel}>Tên:</Text>
        <TextInputGlobal value={data?.lastName} />

        <Text style={styles.textLabel}>Tên đệm:</Text>
        <TextInputGlobal value={data?.firstName} />

        <Text style={styles.textLabel}>Phòng:</Text>
        <TextInputGlobal value={data?.room} />
      </View>

      <ButtonGlobal
        title="Đăng xuất"
        onPress={() => naviagtionn.navigate('LoginScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: paddingHorizontal,
    paddingBottom: 15,
  },
  textLabel: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
  },
});

export default UserScreen;
