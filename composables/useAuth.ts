import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from 'firebase/auth'

export type User = {
  email: string
  password: string
}

export default function useAuth() {
  const user = useState('userStore', () => ({}))
  const errorBag = ref({
    email: '',
    password: '',
  })
  useFirebase()

  const auth = getAuth()

  async function login({ email, password }: User) {
    resetErrors()
    try {
      await setPersistence(auth, browserLocalPersistence)
      const userDetails = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      )
      user.value = userDetails.user
      const token = await userDetails.user.getIdToken()
      await serverAuth(token)
    } catch (error) {
      errorBag.value = {
        email: 'Invalid email',
        password: 'Invalid password',
      }
    }
  }

  async function logout() {
    try {
      await auth.signOut()
      navigateTo('/login')
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    try {
      const userDetails = await signInWithPopup(auth, provider)
      user.value = userDetails.user
      const token = await userDetails.user.getIdToken()
      await serverAuth(token)
    } catch (error) {
      console.error('Error during Google sign in:', error)
    }
  }

  async function signInWithGithub() {
    const provider = new GithubAuthProvider()
    try {
      const userDetails = await signInWithPopup(auth, provider)
      user.value = userDetails.user
      const token = await userDetails.user.getIdToken()
      await serverAuth(token)
    } catch (error) {
      console.error('Error during Github sign in:', error)
    }
  }

  function signUp({ email, password }: User) {
    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userDetails) => {
          user.value = userDetails.user
          userDetails.user.getIdToken().then((token) => {
            serverAuth(token)
          })
        },
      )
    })
  }

  function resetErrors() {
    errorBag.value = {
      email: '',
      password: '',
    }
  }

  async function serverAuth(token: string) {
    try {
      const response = await $fetch('api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ token }),
      })

      // @ts-ignore
      if (response.statusCode === 200) {
        navigateTo('/')
      } else {
        throw new Error('Unexpected response from server')
      }
    } catch (error) {
      console.error(error)
    }
  }

  onAuthStateChanged(auth, (userDetails) => {
    if (userDetails) {
      user.value = userDetails
    }
  })

  return {
    user,
    login,
    signUp,
    signInWithGoogle,
    signInWithGithub,
    logout,
    errorBag,
  }
}
