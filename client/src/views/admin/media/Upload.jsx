import { MdFileUpload } from "react-icons/md";
import Card from "components/card";
import React from "react";

const Upload = (props) => {
  const handleChange = (e) => {
    props.setselectedFiles(e.target.files[0]);
  };
  return (
    <Card>
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
        <label>
          <input class="text-sm cursor-pointer w-36 hidden" type="file" onChange={handleChange} multiple name="file" />
          {props.selectedFiles || props.image ? (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
              <img src={props.selectedFiles === null ? `${process.env.REACT_APP_API}/images/${props.image}` : URL.createObjectURL(props.selectedFiles)} alt="Selected File" className="h-32 w-32 object-contain" />
              <p className="mt-2 text-sm font-medium text-gray-600"></p>
            </div>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
              <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
              <div className="text-xl font-bold text-brand-500 dark:text-white">
                Upload Files
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">
                PNG, JPG and GIF files are allowed (753 × 579 px)
              </p>
            </div>
          )}
        </label>
      </div>
    </Card>
  );

};

export default Upload;
