import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import React from "react";
import { useAddAboutImageMutation } from "../apiContent";

const Upload = (props) => {
  const [add] = useAddAboutImageMutation();
  const [selectedFile, setselectedFile] = React.useState("");

  const handleChange = (e) => {
    setselectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", selectedFile);
    if (selectedFile) {
      add(form);
    } else {
      window.alert("Select an image first.");
    }
    setselectedFile("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} key={selectedFile} className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <label>
          <input
            class="text-sm my-4 cursor-pointer w-36 hidden"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected file"
                className="h-32 w-32 object-contain"
              />
            ) : (
              <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
            )}
            <div className="text-xl font-bold text-brand-500 dark:text-white">
              Upload Files
            </div>
            <p className="mt-2 text-sm font-medium text-gray-600">
              {selectedFile
                ? selectedFile.name
                : "PNG, JPG and GIF files are allowed (1233 × 502 px)"}
            </p>
            <button
              className="items-center justify-center rounded-full bg-none text-brand-500 dark:text-white"
            >
              Submit
            </button>
          </div>
        </label>
      </form>
    </Card>
  );
};

export default Upload;
