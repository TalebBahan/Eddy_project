import React from 'react'
import CardAcheivement from './CardAcheivement';
import Card from "components/card";
import { useGetAcheivementsQuery } from './api';
import Loading from 'components/Loading';
import Navbar from 'components/navbar';
export default function Acheivements() {
  const { data, isLoading } = useGetAcheivementsQuery();
  if (isLoading) return <Loading />
  return (
    <div>
      {/* <Upload /> */}
      <Navbar /> <br /><br />
      <Card extra={"w-full h-full p-3"}>
        <div className="relative mb-3 flex items-center justify-between pt-1">
          <h4 className="text-3xl font-bold text-navy-700 dark:text-white">
            Achievements
          </h4>

        </div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {data?.map(item =>
            <CardAcheivement item={item} />
          )
          }
        </div>
      </Card>
    </div>
  )
}
