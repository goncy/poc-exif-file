import {load} from "exifreader"

export const runtime = 'edge'

export async function POST(request) {
  const formData = await request.formData();
  const exif = await load(formData.get("image"));

  return Response.json(exif)
}