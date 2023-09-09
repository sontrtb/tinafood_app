import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useQuery} from 'react-query';
import {queryKey} from '@app/src/api/queryKey';
import {getListBooking} from '@app/src/api/apiBooking';
import moment from 'moment';
import {styles} from './styles';
import getSession from '@app/src/utils/action/getSession';

function StatisticalScreen() {
  const [date, setDate] = useState(new Date());

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const params = {
    bookDate: moment(date).format('YYYY-MM-DD'),
    session: getSession(),
  };
  const getDataListBooking = () => getListBooking(params);
  const {data} = useQuery([queryKey.LIST_BOOKING, params], getDataListBooking);

  return (
    <ScrollView style={styles.root}>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        onChange={onChange}
      />

      <View style={styles.table}>
        <View style={styles.headerTable}>
          <Text style={[styles.cell1, styles.cellHeader]}>Username</Text>
          <View style={styles.line} />
          <Text style={[styles.cell2, styles.cellHeader]}>Món</Text>
          <View style={styles.line} />
          <Text style={[styles.cell3, styles.cellHeader]}>Giá</Text>
          <View style={styles.line} />
          <Text style={[styles.cell3, styles.cellHeader]}>Tip</Text>
        </View>
        {data && data?.length > 0 ? (
          <View>
            {data?.map((item, index) => (
              <View
                style={[
                  styles.rowTable,
                  item.isChosen ? styles.rowTableChosen : null,
                ]}
                key={index}>
                <Text style={styles.cell1}>{item.createdBy?.username}</Text>
                <View style={styles.line} />
                <Text style={styles.cell2}>{item.food?.displayName}</Text>
                <View style={styles.line} />
                <Text style={styles.cell3}>{item.price}.000</Text>
                <View style={styles.line} />
                <Text style={styles.cell3}>
                  {item.tip ? `${item.tip}.000` : '-'}
                </Text>
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.noData}>Không có dữ liệu</Text>
        )}
      </View>
    </ScrollView>
  );
}

export default StatisticalScreen;
