"use client"

import {useActionState} from "react"

import {pipe} from "./actions"

export default function Home() {
  const [data, formAction] = useActionState(async (_previousState, formData) => {
    const pipedData = await pipe(formData);

    console.log(pipedData)

    return pipedData;
  })

  console.log('data:', data);

  return (
    <form action={formAction}>
      <input type="file" name="image" accept="image/*" />
      <button type="submit">Submit (see console)</button>
    </form>
  );
}
