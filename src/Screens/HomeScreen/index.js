import {
  CommentBottomSheet,
  Container,
  Obx,
  Padding,
  PostItem,
  PostOptionBottomSheet,
  ShareBottomSheet,
} from '@/Components'
import { PageName } from '@/Config'
import { ShareType } from '@/Models'
import { navigate } from '@/Navigators'
import { homeStore, initData } from '@/Stores'
import { Colors, XStyleSheet } from '@/Theme'
import { useFocusEffect } from '@react-navigation/native'
import { useLocalObservable } from 'mobx-react-lite'
import React, { useCallback, useEffect } from 'react'
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import { HomeMenu, StoryBar } from './HomeScreenComponents'

const SheetType = {
  COMMENT: 'COMMENT',
  SHARE: 'SHARE',
  OPTIONS: 'OPTIONS',
  NONE: 'NONE',
}

const HomeScreen = () => {
  const scrollY = useSharedValue(0)
  const state = useLocalObservable(() => ({
    selectedPost: null,
    sheetType: SheetType.NONE,
    setType(type) {
      this.sheetType = type
    },
    setSelectedPost(post) {
      this.selectedPost = post
    },
  }))
  useEffect(() => {
    initData()
  }, [])
  useFocusEffect(
    useCallback(() => {
      return () => state.setType(SheetType.NONE)
    }, []),
  )
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      if (event.contentOffset.y > 150) {
        return
      }
      scrollY.value = event.contentOffset.y
    },
  })

  const renderPostItem = useCallback(({ item }) => {
    const onCommentPress = () => {
      state.setSelectedPost(item)
      state.setType(SheetType.COMMENT)
    }
    const onSharePress = () => {
      state.setSelectedPost(item)
      state.setType(SheetType.SHARE)
    }
    const onOptionsPress = () => {
      state.setSelectedPost(item)
      state.setType(SheetType.OPTIONS)
    }
    const onPress = () => {
      navigate(PageName.PostDetailScreen, {
        postId: item.post_id,
      })
    }
    return (
      <PostItem
        onSharePress={onSharePress}
        onCommentPress={onCommentPress}
        onOptionPress={onOptionsPress}
        onPress={onPress}
        post={item}
      />
    )
  }, [])

  return (
    <Container
      safeAreaColor={Colors.k222222}
      style={styles.rootView}
      statusBarProps={{ barStyle: 'light-content' }}
    >
      <HomeMenu />
      <Obx>
        {() => (
          <Animated.FlatList
            initialNumToRender={2}
            bounces={false}
            ListHeaderComponent={<StoryBar scrollY={scrollY} />}
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            data={homeStore.posts.slice()}
            renderItem={renderPostItem}
            keyExtractor={(_, index) => index.toString()}
            ListFooterComponent={<Padding bottom={110} />}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Obx>
      <Obx>
        {() =>
          state.sheetType === SheetType.COMMENT && (
            <CommentBottomSheet
              onClose={() => state.setType(SheetType.NONE)}
              post={state?.selectedPost}
            />
          )
        }
      </Obx>
      <Obx>
        {() =>
          state.sheetType === SheetType.SHARE && (
            <ShareBottomSheet
              type={ShareType.Post}
              onClose={() => state.setType(SheetType.NONE)}
              data={state?.selectedPost}
            />
          )
        }
      </Obx>
      <Obx>
        {() =>
          state.sheetType === SheetType.OPTIONS && (
            <PostOptionBottomSheet
              post={state?.selectedPost}
              index={0}
              onClose={() => state.setType(SheetType.NONE)}
            />
          )
        }
      </Obx>
    </Container>
  )
}

export default HomeScreen
const styles = XStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
})
