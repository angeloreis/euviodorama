import { collection, getDocs, query, where} from "firebase/firestore/lite";
import { db } from "utils/firebase";

export async function getPosts() {
  const postRef = collection(db,"posts")
  const q = query(postRef, where('isVisible','==',true))
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const posts = querySnapshot.docs.map((doc) => {
      return {...doc.data()}
    })

    return posts;
  }

  return []
}
