import Toast from 'react-native-root-toast';

function showToast(message: string) {
  let toast = Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });

  setTimeout(function () {
    Toast.hide(toast);
  }, 2000);
}

export {showToast};
