import firebase from 'firebase/app'
import { auth } from 'firebase'

export const signUpUser = async ({ email, password }) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      firebase.auth().currentUser.updateProfile({
      })
      return { user }
    } catch (error) {
      return {
        error: error.message,
      }
    }
  }

  export const loginUser = async ({ email, password }) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      return { user }
    } catch (error) {
      return {
        error: error.message,
      }
    }
  }
  
  export const logoutUser = () => {
    firebase.auth().signOut()
    console.log("Logged out")
  }

  export const sendEmailWithPassword = async (email) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      return {}
    } catch (error) {
      return {
        error: error.message,
      }
    }
  }