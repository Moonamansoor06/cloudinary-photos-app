"use client"

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

type UploadResult={
info?:{
  public_id:string
},
event?:"success"
}
export default function Home() {
  //const [uploadResult,setUploadResult]=useState<UploadResult>({info:{public_id:''},event:"success"})
  const [imageId,setImageId]=useState<string>("sxiyxl8uspftb6pvz6jj")
  return (
    <main className="flex min-h-screen   p-8">
    
   
 <div className="flex flex-col   items-center  ">
  <div className='m-4 p-2 bg-gray-600 rounded-md text-white '>
 <CldUploadButton 
 uploadPreset="m8su8bts"
 onUpload={( result:any) => {
  console.log("first",result?.info.public_id)
  setImageId(result?.info.public_id)
}}
  />
  </div>
  {imageId &&(<CldImage
  width="400"
  height="300"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>)}
 </div>
    </main>
  )
}
