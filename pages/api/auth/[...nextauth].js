import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn(user, account, profile) {
      // Handle sign-in logic and errors if needed
      try {
        // Your sign-in logic here
        return true; // Return true if sign-in is successful
      } catch (error) {
        // Handle sign-in errors
        console.error('Sign-in error:', error.message);
        return false; // Return false if sign-in fails
      }
    },

    async session(session, user) {
      // Handle session logic and errors if needed
      try {
        // Your session logic here
        return session; // Return the updated session object
      } catch (error) {
        // Handle session errors
        console.error('Session error:', error.message);
        return session; // Return the unmodified session object
      }
    },

    async jwt(token, user, account, profile, isNewUser) {
      // Handle JSON Web Token (jwt) logic and errors if needed
      try {
        // Your jwt logic here
        return token; // Return the updated token
      } catch (error) {
        // Handle jwt errors
        console.error('JWT error:', error.message);
        return token; // Return the unmodified token
      }
    },

    async redirect(url, baseUrl) {
      // Handle redirect logic and errors if needed
      try {
        // Your redirect logic here
        return url; // Return the redirect URL
      } catch (error) {
        // Handle redirect errors
        console.error('Redirect error:', error.message);
        return baseUrl; // Return the original baseUrl
      }
    },
  },
});
