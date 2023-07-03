import React from 'react'
import LinkedInCard from './LinkedinCard';
import Card from "components/card";
import { AiOutlinePlus } from 'react-icons/ai'
import AddEditMedia from './AddEditMedia';
import { useGetPostsQuery } from './linkdubApi';
import Loading from 'components/Loading';
import Unauthorized from 'components/Unauthorized';
import Navbar from "components/navbar";
import search from 'features/serch'
const COLUMNS = [
  {
    Header: "Text",
    accessor: "title",
  },
  {
    Header: "Tags",
    accessor: "tags",
  },
]
export default function LinkedIn() {
  const { data, isLoading, isError } = useGetPostsQuery()
  const [open, setOpen] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleOpen = () => setOpen(!open);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Unauthorized />;
  }
  const filteredData = search(data, COLUMNS, searchTerm);
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="mt-3 grid h-full grid-cols-1 gap-10 divide-y divide-solid ">
    <div>
      <br></br>
      <Navbar
        searchTerm={searchTerm} handleSearch={handleSearch}
      />
      {/* <Upload /> */}
      {/* <Upload /> */}
      <Card extra={"w-full h-full p-3"}>
        <AddEditMedia open={open} handleOpen={handleOpen} isAdd={true} />
        <div className="relative mb-3 flex items-center justify-between pt-1">
          <h4 className="text-3xl font-bold text-navy-900 dark:text-white">
            Media Coverage and Articles
          </h4>
          <button
            onClick={handleOpen}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiOutlinePlus />
          </button>

        </div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {filteredData.map(item =>
          <div><LinkedInCard image={item.postImage} tags={item.tags} id={item._id} text={item.title} link={item.link} key={item._id} /></div>
            
          )
          }
        </div>
      </Card>
    </div>
    </div>
  )
}
