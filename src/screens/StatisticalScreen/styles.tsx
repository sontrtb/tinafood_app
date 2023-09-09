import {paddingHorizontal} from '@app/src/config/layout';
import {themeColor} from '@app/src/config/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: paddingHorizontal,
    paddingTop: paddingHorizontal,
  },
  table: {
    borderWidth: 1,
    marginTop: paddingHorizontal,
    borderRadius: 10,
    borderColor: '#bbb',
  },
  headerTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: themeColor.main,
    padding: 10,
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  cell1: {
    width: '35%',
    paddingHorizontal: 5,
  },
  cellHeader: {
    textAlign: 'center',
  },
  cell2: {
    width: '25%',
    paddingHorizontal: 5,
  },
  cell3: {
    width: '20%',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#bbb',
  },
  rowTable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rowTableChosen: {
    backgroundColor: '#fca5a5',
    borderRadius: 8,
  },
  noData: {
    paddingVertical: 100,
    textAlign: 'center',
  },
});

export {styles};
