import HomeStore from './HomeStore'
import UserStore from './UserStore'
import DiaLogStore from './DiaLogStore'
import AppStore from './AppStore'
import ProfileStore from './ProfileStore'
import ChatStore from './ChatStore'
import NotificationStore from './NotificationStore'
export const homeStore = new HomeStore()
export const userStore = new UserStore()
export const diaLogStore = new DiaLogStore()
export const appStore = new AppStore()
export const profileStore = new ProfileStore()
export const chatStore = new ChatStore()
export const notiStore = new NotificationStore()
//Add Persist Store here
const persistStores = [homeStore, userStore, appStore, chatStore, notiStore]

export const rehydrateStore = async () =>
  await Promise.all(
    persistStores.map(async store => await store?.hydrateStore?.()),
  )

export * from './Common'
