import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Button, TextInput } from 'react-native';
import { posts,events } from '../Utils';
import globalStyles from '../styles/GlobalStyles';

const DailyUpdates = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Post');
  const [showFullComment, setShowFullComment] = useState(null);

  const renderPosts = () => (
    <ScrollView>
      {posts.map((post) => (
        <View key={post.id} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
          {(post.type === 'Anniversary' || post.type === 'Birthday') && (
            <Image source={post.image} style={{ width: 350, height: 150 }} />
          )}
          <Text style={globalStyles.verticalName}> Type: {post.type}</Text>
          <Text style={globalStyles.verticalName}>
            Comment: {showFullComment === post.id ? post.comment : post.comment.slice(0, 150)}
            {post.comment.length > 150 && (
              <Text
                style={{ color: 'blue' }}
                onPress={() => setShowFullComment(showFullComment === post.id ? null : post.id)}
              >
                {showFullComment === post.id ? ' Show less' : ' ...Show more'}
              </Text>
            )}
          </Text>
          <Text style={globalStyles.verticalName}>Commented By: {post.name}</Text>
          <Text style={globalStyles.verticalName}>Commented On: {post.date}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const renderEvents = () => (
    <ScrollView>
      {events.map((event) => (
        <View key={event.id} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
          <Image source={event.image} style={{ width: 300, height: 150 }} />
          <Text style={globalStyles.verticalName}>Event Type: {event.eventType}</Text>
          <Text style={globalStyles.verticalName}>Duration: {event.duration}</Text>
          <Text style={globalStyles.verticalName}>Description: {event.description}</Text>
          <Text style={globalStyles.verticalName}>Created By: {event.createdBy}</Text>
          <Text style={globalStyles.verticalName}>Event Date/Time: {event.dateTime}</Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity onPress={() => setSelectedTab('Post')}>
          <Text style={{ fontWeight: selectedTab === 'Post' ? 'bold' : 'normal' }}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Events')}>
          <Text style={{ fontWeight: selectedTab === 'Events' ? 'bold' : 'normal' }}>Events</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, padding: 10 }}>
        {selectedTab === 'Post' ? renderPosts() : renderEvents()}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddPostEvent')}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#000',
          borderRadius: 30,
          padding: 15,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 24 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyUpdates;
