import React from 'react'
import CardCarasoul from './CardCarasoul';
import Card from "components/card";
import { useGetHerosQuery } from './api';
import Loading from 'components/Loading';
export default function Carousel() {
  const { data, isLoading } = useGetHerosQuery();
  if (isLoading) return <Loading/>
  return (
    <div>
      {/* <Upload /> */}
      <Card extra={"w-full h-full p-3"}>
        <div className="relative mb-3 flex items-center justify-between pt-1">
          <h4 className="text-3xl font-bold text-navy-700 dark:text-white">
            Carousel Layout
          </h4>

        </div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {data.map(item =>
            <CardCarasoul  h_text={item.h_text} s_text={item.s_text} reward={item.reward} id={item._id} key={item._id} />
          )
          }
        </div>
      </Card>
    </div>
  )
}
