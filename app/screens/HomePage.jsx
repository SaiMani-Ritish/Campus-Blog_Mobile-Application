import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import config from '../config'
import Post from './Post'
import { useNavigation } from '@react-navigation/native'
import Header from '../Header'

function HomePage() {
    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const navigation = useNavigation()

    const fetchPosts = async () => {
        try {
            setIsLoading(true)
            setError('')
            const response = await fetch(`${config.API_URL}/posts`)
            const data = await response.json()
            
            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch posts')
            }

            setPostList(data)
        } catch (err) {
            setError('Failed to fetch posts. Please try again later.')
            console.error('Error fetching posts:', err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])
  return (
    <View style={styles.container}>
      <Header/>    
      <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          overScrollMode="auto"
          showsVerticalScrollIndicator={true}>
          {isLoading ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color="#6da2ffff" />
            </View>
          ) : error ? (
            <View style={styles.centered}>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity onPress={fetchPosts} style={styles.retryButton}>
                <Text style={styles.retryText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : postList.length === 0 ? (
            <View style={styles.centered}>
              <Text style={styles.noPostsText}>No posts yet</Text>
            </View>
          ) : (
            <View style={styles.postsContainer}>
              {postList.map((post) => (
                <TouchableOpacity
                  key={post._id}
                  onPress={() => navigation.navigate('PostDetail', { post })}>
                  <Post 
                    date={new Date(post.date).toLocaleDateString()} 
                    title={post.title} 
                    content={post.content}
                    author={post.owner.username} 
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6fbff',
    paddingHorizontal: 0,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 8,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '600',
  },
  retryButton: {
    backgroundColor: '#6da2ffff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    marginTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  noPostsText: {
    fontSize: 20,
    color: '#7a8fa6',
    marginTop: 24,
    fontWeight: '500',
  },
});
export default HomePage;