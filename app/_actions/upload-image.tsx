import { nanoid } from "nanoid"
import supabase from "../_lib/supabase"

interface UploadImageProps {
  selectedFile: File
}

const uploadImage = async ({ selectedFile }: UploadImageProps) => {
  const filename = nanoid()

  const { data, error } = await supabase.storage
    .from("bonfire-bucket")
    .upload(`${filename}.${selectedFile.name.split(".").pop()}`, selectedFile)

  if (error) {
    console.error("Error uploading file:", error.message)
  } else {
    const { data: file } = await supabase.storage
      .from("bonfire-bucket")
      .getPublicUrl(data?.path)
    return file?.publicUrl
  }
}

export default uploadImage
