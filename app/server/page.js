import {load} from "exifreader"

export default function Home() {
  async function submit(formData) {
    "use server";

    const exif = await load(formData.get("image"));

    console.log(exif);
  }

  return (
    <form action={submit}>
      <input type="file" name="image" accept="image/*" />
      <button type="submit">Submit (see console)</button>
    </form>
  );
}
