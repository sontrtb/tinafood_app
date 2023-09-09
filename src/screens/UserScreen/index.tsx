import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {paddingHorizontal} from '@app/src/config/layout';
import TextInputGlobal from '@app/src/components/globals/TextInputGlobal';
import {useQuery} from 'react-query';
import {queryKey} from '@app/src/api/queryKey';
import {getMe} from '@app/src/api/apiUser';
import {themeColor} from '@app/src/config/color';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import TouchableGlobal from '@app/src/components/globals/TouchableGlobal';
import {handleRecharge} from '@app/src/utils/action/recharge';
import {setUser} from '@app/src/redux/User/slice';
import {useUser} from '@app/src/redux/User/hooks';
import {useAppDispatch} from '@app/src/redux/hook';
import {windowWidth} from '@app/src/utils/layout';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import {clearToken} from '@app/src/redux/Auth/slice';

function UserScreen() {
  const {navigationReset} = useNavigationReset();
  const dispatch = useAppDispatch();

  const user = useUser();

  const {refetch} = useQuery(queryKey.ME, getMe, {
    onSuccess: res => {
      dispatch(setUser(res));
    },
  });

  const handleLogout = () => {
    dispatch(clearToken());
    navigationReset('LoginScreen' as any);
  };

  return (
    <View style={styles.root}>
      <View>
        <View style={styles.budgetWrap}>
          <Text style={styles.budget}>
            {user?.budget}
            .000đ
            <TouchableGlobal
              style={styles.refetchIcon}
              onPress={() => refetch()}>
              <IconFontAwesome name="refresh" size={25} />
            </TouchableGlobal>
          </Text>

          <TouchableGlobal onPress={handleRecharge}>
            <IconAntDesign
              name="pluscircleo"
              size={25}
              color={themeColor.secondaryText}
            />
          </TouchableGlobal>
        </View>

        <View style={styles.form}>
          <Text style={styles.textLabel}>Username:</Text>
          <TextInputGlobal value={user?.username} />

          <Text style={styles.textLabel}>Tên:</Text>
          <TextInputGlobal value={user?.lastName} />

          <Text style={styles.textLabel}>Tên đệm:</Text>
          <TextInputGlobal value={user?.firstName} />

          <Text style={styles.textLabel}>Phòng:</Text>
          <TextInputGlobal value={user?.room} />
        </View>
      </View>

      <ButtonGlobal
        style={styles.button}
        title="Đăng xuất"
        onPress={handleLogout}
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
  form: {
    paddingHorizontal: paddingHorizontal,
  },
  button: {
    width: windowWidth - paddingHorizontal * 2,
    marginHorizontal: paddingHorizontal,
  },
  refetchIcon: {
    paddingLeft: 10,
    paddingTop: 3,
  },
});

export default UserScreen;
