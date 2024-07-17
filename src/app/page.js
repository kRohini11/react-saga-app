"use client"
import { appStore } from "@/store/appStore";

export default function App() {
  const fnGetPhotos = () => {
    appStore.dispatch({
      type: "PHOTOS",

    })
  }
  const fnGetPosts = () => {
    appStore.dispatch({
      type: "POSTS",
    })
  }
  const fnGetUsers = () => {
    appStore.dispatch({
      type: "USERS",
    })
  }
  return (
    <div>
      <button onClick={fnGetPhotos}>Get Photos</button>
      <button onClick={fnGetUsers}>Get Users</button>
      <button onClick={fnGetPosts}>Get Posts</button>
    </div>
  );
}
