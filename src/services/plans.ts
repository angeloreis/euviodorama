import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore/lite"
import { db } from "utils/firebase"
import { IPlan } from "utils/plans";

export async function getPlans() {
  try {
    const plansRef = doc(db, "plans")
    const plansSnapshot = await getDoc(plansRef);
    if (!plansSnapshot.exists()) {
      return {
        status: "error",
        error: {
          message: "Plans not found on database"
        }
      }
    }
    const plansList = plansSnapshot.data()
    return plansList
  } catch (error) {
    return {
      status: "error",
      error
    }
  }
}

export async function getPlanRecommend(): Promise<IPlan|undefined> {
  try {
    const planRef = collection(db, "plans")
    const q = query(planRef, where('recommend', '==', true))

    const planSnapshot = await getDocs(q);

    if (!planSnapshot.empty) {
      let planList: IPlan = {} as IPlan

      planSnapshot.forEach((doc) => {
        const name = doc.data().name
        const description = doc.data().description
        const price = doc.data().price
        const active = doc.data().active
        const recommend = doc.data().recommend
        planList = { name, description, price, active, recommend}
      })

      return planList
    }
  } catch (error) {
    return {} as IPlan
  }
}
