"use client";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Home() {
  const createDocument = useMutation(api.document.createDocuments);
  // const documents = useQuery(api.document.getDocuments);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />

        {/* {documents?.map((doc) => (
          <div key={doc._id}>
            <h2>{doc.title}</h2>
          </div>
        ))} */}

        <button onClick={() => createDocument({ title: "Hello convex" })}>
          Create Document
        </button>
      </Authenticated>
    </main>
  );
}
