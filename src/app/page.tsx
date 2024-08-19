import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Welcome to Next.js</h1>
        <User/>
    </main>
  );
}


const User  = ()=>{
  return(
    <div>
      <h1>User Profile</h1>
      <p>User Name: John Doe</p>
      <p>User Email: johndoe@example.com</p>
    </div>
  )
}
