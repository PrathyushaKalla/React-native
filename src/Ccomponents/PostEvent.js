import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import globalStyles from '../styles/GlobalStyles';


const AddPostEvent = () => {
  const [postType, setPostType] = useState('Post');
  const [eventType, setEventType] = useState('Open House');
  const [eventDuration, setEventDuration] = useState('10');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [comment, setComment] = useState('');
  const [type, setType] = useState('Anniversary');
  const [years, setYears] = useState('1');
  const [date, setDate] = useState(new Date());
  const [showPostDatePicker, setShowPostDatePicker] = useState(false);

  const handleSubmit = () => {
    if (postType === 'Event') {
      console.log({
        postType,
        eventType,
        eventDuration,
        eventDescription,
        eventDate: eventDate.toISOString(),
      });
    } else {
      console.log({
        postType,
        comment,
        type,
        years,
        date: date.toISOString(),
      });
    }
  };

  const handleReset = () => {
    setPostType('Post');
    setEventType('Open House');
    setEventDuration('10');
    setEventDescription('');
    setEventDate(new Date());
    setComment('');
    setType('Anniversary');
    setYears('1');
    setDate(new Date());
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || eventDate;
    setShowDatePicker(Platform.OS === 'ios');
    setEventDate(currentDate);
  };

  const onPostDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPostDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={{ padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
        <TouchableOpacity onPress={() => setPostType('Post')}>
          <Text style={{ fontWeight: postType === 'Post' ? 'bold' : 'normal' }}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPostType('Event')}>
          <Text style={{ fontWeight: postType === 'Event' ? 'bold' : 'normal' }}>Event</Text>
        </TouchableOpacity>
      </View>

      {postType === 'Event' ? (
        <View>
          <Picker
            selectedValue={eventType}
            onValueChange={(itemValue) => setEventType(itemValue)}
          >
            <Picker.Item label="Open House" value="Open House" />
            <Picker.Item label="One DE Meeting" value="One DE Meeting" />
            <Picker.Item label="Internal Team Meeting" value="Internal Team Meeting" />
            <Picker.Item label="Other" value="Other" />
          </Picker>

          <Picker
            selectedValue={eventDuration}
            onValueChange={(itemValue) => setEventDuration(itemValue)}
          >
            {[...Array(6)].map((_, i) => (
              <Picker.Item key={i} label={`${(i + 1) * 10} Min`} value={`${(i + 1) * 10}`} />
            ))}
          </Picker>

          <TextInput
            placeholder="Enter Event Description (200 - 1000 Characters)"
            value={eventDescription}
            onChangeText={setEventDescription}
            style={globalStyles.input}
            maxLength={1000}
          />

          <View>
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={globalStyles.buttonstyle}>
              <Text style={globalStyles.buttonText}>Select Event Date</Text>
            </TouchableOpacity>
            <Text>Selected Event Date: {eventDate.toDateString()}</Text>
            {showDatePicker && (
              <DateTimePicker
                value={eventDate}
                mode="date"
                display="default"
                onChange={onDateChange}
                minimumDate={new Date()}
                maximumDate={new Date(new Date().setMonth(new Date().getMonth() + 6))}
              />
            )}
          </View>
        </View>
      ) : (
        <>
          <TextInput
            style={globalStyles.input}
            placeholder="Comment (100-1000 characters)"
            maxLength={1000}
            value={comment}
            onChangeText={setComment}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Picker
              selectedValue={type}
              style={{ flex: 1 }}
              onValueChange={itemValue => setType(itemValue)}>
              <Picker.Item label="Anniversary" value="Anniversary" />
              <Picker.Item label="Birthday" value="Birthday" />
            </Picker>
          </View>

          {type === 'Anniversary' && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Picker
                selectedValue={years}
                style={{ flex: 1 }}
                onValueChange={itemValue => setYears(itemValue)}>
                {[...Array(10).keys()].map(year => (
                  <Picker.Item key={year} label={`${year + 1} Year`} value={`${year + 1}`} />
                ))}
              </Picker>
            </View>
          )}

          <View>
            <TouchableOpacity style={globalStyles.buttonstyle} onPress={() => setShowPostDatePicker(true)}>
              <Text style={globalStyles.buttonText}>Select Date</Text>
            </TouchableOpacity>
            {showPostDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onPostDateChange}
              />
            )}
            <Text>Selected Date: {date.toLocaleDateString()}</Text>
          </View>
        </>
      )}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
      <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleReset}>
              <Text style={globalStyles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleSubmit}>
              <Text style={globalStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPostEvent;
