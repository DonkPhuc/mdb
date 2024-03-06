export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth()
  console.log('🚀 ~ defineNuxtRouteMiddleware ~ user:', user.value)
  setTimeout(() => {
    console.log('🚀 ~ defineNuxtRouteMiddleware ~ user:', user.value)
  }, 3000)
  // if (!$userStore.uid && to.path !== '/login') {
  //   return navigateTo('/login')
  // }

  // if ($userStore.uid && to.path === '/login') {
  //   return navigateTo('/')
  // }
})
