import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google"
import { collection, getDocs, query, addDoc, where } from 'firebase/firestore/lite'
import { db } from 'utils/firebase'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
    })
  ],
  callbacks: {
    async session({ session }) {
      try {
        const userRef = collection(db, 'users')
        const q = query(userRef, where('email', '==', session.user?.email))
        const userLogged = await getDocs(q)

        const userOfSub = userLogged.docs.map(user => { return { id: user.id, ...user.data() } })

        const { id } = userOfSub[0]

        const subscriptionRef = collection(db, 'subscriptions')
        const querySubs = query(subscriptionRef, where('userId', '==', id))
        const subscriptionSnapshot = await getDocs(querySubs)

        const subsOfUser = subscriptionSnapshot.docs.map(dataSub => {
          return { id: dataSub.id, ...dataSub.data() }
        })

        return {
          ...session,
          activeSubscription: subsOfUser[0]
        }
      } catch {
        return {
          ...session,
          activeSubscription: null
        }
      }
    },
    async signIn({ user }) {
      const { email, name } = user
      const userRef = collection(db, 'users')

      try {
        const q = query(userRef, where('email', '==', email))
        const userLogin = await getDocs(q)
        if (userLogin.empty) {
          const data = {
            email,
            active: true,
            created_at: new Date(),
            username: name
          }
          await addDoc(userRef, data)
        }
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    },
  }
})
