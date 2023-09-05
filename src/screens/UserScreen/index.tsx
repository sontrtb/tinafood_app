import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {paddingHorizontal} from '@app/src/config/layout';
import {useNavigation} from '@react-navigation/native';
import TextInputGlobal from '@app/src/components/globals/TextInputGlobal';
import {useQuery} from 'react-query';
import {queryKey} from '@app/src/api/queryKey';
import {getMe} from '@app/src/api/apiUser';
import {themeColor} from '@app/src/config/color';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {handleRecharge} from '@app/src/utils/action/recharge';

function UserScreen() {
  const naviagtionn = useNavigation();

  const {data} = useQuery(queryKey.ME, getMe);

  return (
    <View style={styles.root}>
      <View>
        <View style={styles.budgetWrap}>
          <Text style={styles.budget}>
            <IconFontAwesome5 name="dollar-sign" size={25} /> {data?.budget}
            .000
          </Text>

          <TouchableGlobal onPress={handleRecharge}>
            <IconAntDesign
              name="pluscircleo"
              size={25}
              color={themeColor.secondaryText}
            />
          </TouchableGlobal>
        </View>
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

    paddingBottom: 15,
  },
  textLabel: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 5,
  },
  budgetWrap: {
    paddingHorizontal: paddingHorizontal,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: themeColor.main,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  budget: {
    fontSize: 32,
    fontWeight: '700',
    color: themeColor.secondaryText,
  },
});

export default UserScreen;
