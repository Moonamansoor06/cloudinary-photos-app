"use client";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

const GallleryPage = () => {
  const [imageId, setImageId] = useState<string>("sxiyxl8uspftb6pvz6jj");
  return (
    <div className="px-4 py-4 flex justify-between min-h-screen">
      <div>
        <h1 className="m-4 p-2 font-extrabold text-2xl">Gallery</h1>
      </div>
      <div>
      <div className="m-4 p-2 bg-gray-600 rounded-md text-white w-30 flex ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"
          />
        </svg>

        <CldUploadButton
          uploadPreset="m8su8bts"
          onUpload={(result: any) => {
            console.log("first", result?.info.public_id);
            setImageId(result?.info.public_id);
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default GallleryPage;
