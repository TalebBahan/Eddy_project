import Card from "components/card";
import React, { useState } from "react";
import { useEditHeroLinksMutation } from "./apiContent";
const HeroLinks = ({ data }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [linkValues, setLinkValues] = useState(data.map((link) => link.link));
  const [edit] = useEditHeroLinksMutation()
  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleLinkChange = (e, index) => {
    const newLinkValues = [...linkValues];
    newLinkValues[index] = e.target.value;
    setLinkValues(newLinkValues);
  };

  const handleSaveClick = (id) => {
    edit({id:id ,link:linkValues[editingIndex]});
    setEditingIndex(null);
  };

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Hero Slides Links
        </div>
      </div>

      <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                <p className="text-xs tracking-wide text-gray-600"></p>
              </th>
              <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                <p className="text-xs tracking-wide text-gray-600">Link</p>
              </th>
              <th className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700">
                <p className="text-xs tracking-wide text-gray-600">Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {linkValues.map((link, index) => (
              <tr key={index}>
                <td className="pt-[14px] pb-[18px] sm:text-[14px]"> <p className="text-sm font-bold text-navy-700 dark:text-white">{`Slide${index + 1}`}</p></td>
                <td className="pt-[14px] pb-[18px] sm:text-[14px]">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={link}
                      onChange={(e) => handleLinkChange(e, index)}
                    />
                  ) : (
                    <a target='_blank'href={link}> <p className="text-sm font-bold text-navy-700 dark:text-white">{link}</p></a>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    {editingIndex === index ? (
                      <button
                        className="text-sm font-bold text-green-500 dark:text-white"
                        onClick={() => handleSaveClick(data[index]._id)}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="text-sm font-bold text-yellow-500 dark:text-white"
                        onClick={() => handleEditClick(index)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default HeroLinks;
