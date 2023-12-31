import { Config } from '@/Config'

export default () => {
  const baseUrl = Config.BASE_URL
  const apiUrl = Config.API_URL
  const socketUrl = Config.SOCKET_URL
  return {
    baseUrl,
    apiUrl,
    socketUrl,
    //auth
    login: `${apiUrl}/login`,
    logout: `${apiUrl}/logout`,
    register: `${apiUrl}/register`,
    forgotPassword: `${apiUrl}/forgot-password`,
    resetPassword: `${apiUrl}/reset-password`,
    //posts
    getHomePosts: (page = 0) => `${apiUrl}/posts?page=${page}`,
    getPostDetail: id => `${apiUrl}/posts/${id}`,
    getProfile: `${apiUrl}/users/{id}`,
    getProfilePosts: (id, page = 0) =>
      `${apiUrl}/users/${id}/posts?page=${page}`,
    searchPosts: `${apiUrl}/search/posts`,
    createPost: `${apiUrl}/posts`,
    updatePost: id => `${apiUrl}/posts/${id}`,
    updatePostMessage: `${apiUrl}/posts/{id}`,
    deletePost: id => `${apiUrl}/posts/${id}`,
    reactPost: postId => `${apiUrl}/posts/${postId}/like`,
    unReactPost: postId => `${apiUrl}/posts/${postId}/unlike`,
    sendComment: postId => `${apiUrl}/posts/${postId}/comments`,
    updateComment: (postId, commentId) =>
      `${apiUrl}/posts/${postId}/comments/${commentId}`,
    deleteComment: (postId, commentId) =>
      `${apiUrl}/posts/${postId}/comments/${commentId}`,
    //stories
    getStories: `${apiUrl}/stories`,
    getUserStories: `${apiUrl}/users/{id}/stories`,
    createStory: `${apiUrl}/stories`,
    deleteStoryMedia: `${apiUrl}/stories/{id}/medias/{media_id}`,
    //notifications
    getNotifications: (page = 0) => `${apiUrl}/notifications?page=${page}`,
    deleteNotification: id => `${apiUrl}/notifications/${id}`,
    //users
    searchUsers: (q, page = 0) => `${apiUrl}/search/user?q=${q}&page=${page}`,
    updateUserInfo: `${apiUrl}/user`,
    updatePassword: `${apiUrl}/user/password`,
    getUserInfo: id => `${apiUrl}/user/${id}`,
    getBlockedUsers: `${apiUrl}/user/blocked-users`,
    blockUser: id => `${apiUrl}/user/blocked-users/${id}`,
    unBlockUser: id => `${apiUrl}/user/blocked-users/${id}/unblock`,
    followUser: id => `${apiUrl}/user/following/${id}`,
    unFollowUser: id => `${apiUrl}/user/following/${id}/unfollow`,
    removeFollower: id => `${apiUrl}/user/followers/${id}/remove`,
    //chat
    getConversations: `${apiUrl}/conversations`,
    getMessages: id => `${apiUrl}/conversations/${id}/messages`,
    getMediaMessages: id => `${apiUrl}/conversations/${id}/media-messages`,
    createConversation: `${apiUrl}/conversations`,
    deleteConversation: id => `${apiUrl}/conversations/${id}`,
    //upload
    uploadImage: `${apiUrl}/upload/image`,
    uploadVideo: `${apiUrl}/upload/video`,
  }
}
