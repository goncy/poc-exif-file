"use client"

export default function Home() {
  async function submit(formData) {
    const exif = await fetch('/route-handler/extract', {
      method: 'POST',
      body: formData,
    }).then(res => res.json())

    console.log(exif);
  }

  return (
    <form action={submit}>
      <input type="file" name="image" accept="image/*" />
      <button type="submit">Submit (see console)</button>
    </form>
  );
}
