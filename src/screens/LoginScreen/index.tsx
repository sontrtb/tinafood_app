import ButtonGlobal from '@app/src/components/globals/ButtonGlobal';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {paddingHorizontal} from '@app/src/config/layout';
import TextInputGlobal from '@app/src/components/globals/TextInputGlobal';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {themeColor} from '@app/src/config/color';
import {ILoginBody, login} from '@app/src/api/apiAuth';
import {useMutation} from 'react-query';
import {useAppDispatch} from '@app/src/redux/hook';
import {setToken} from '@app/src/redux/Auth/slice';
import useNavigationReset from '@app/src/utils/hooks/useNavigationReset';
import {EBottomTabName} from '@app/src/navigation/type';

function LoginScreen() {
  const {navigationReset} = useNavigationReset();

  const dispatch = useAppDispatch();

  const [loginValue, setLoginValue] = useState<ILoginBody>({
    username: '',
    password: '',
  });

  const loginMuation = useMutation(login);
  const handleLogin = () => {
    loginMuation.mutate(loginValue, {
      onSuccess: res => {
        dispatch(
          setToken({token: res.accessToken, refreshToken: res.refreshToken}),
        );
        navigationReset(EBottomTabName.HomeScreen);
      },
    });
  };

  return (
    <View style={styles.root}>
      <Text style={styles.login}>Đăng nhập</Text>

      <TextInputGlobal
        placeholder="Username"
        style={styles.input}
        iconStart={
          <IconFontAwesome5 name="user-alt" color={themeColor.main} size={16} />
        }
        onChangeText={text => setLoginValue({...loginValue, username: text})}
      />

      <TextInputGlobal
        placeholder="Mật khẩu"
        style={styles.input}
        secureTextEntry={true}
        iconStart={
          <IconFontAwesome5 name="lock" color={themeColor.main} size={16} />
        }
        onChangeText={text => setLoginValue({...loginValue, password: text})}
      />

      <ButtonGlobal title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: paddingHorizontal,
  },
  login: {
    fontSize: 32,
    fontWeight: '700',
    color: themeColor.main,
    marginBottom: 25,
  },
  input: {
    marginBottom: 25,
  },
});

export default LoginScreen;
