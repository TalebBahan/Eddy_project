import Card from "components/card";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import React from "react";
import AddEditNewsletter from "./AddEditNewsLetter";
import { useMemo } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDeletenewsletterMutation } from "./newsletterApi";
import Articles from "./Articles";
import AddArticle from "./AddArticle";
import CountdownTimer from "./CountdownTimer";
const Table = (props) => {
    const { columnsData, tableData } = props;
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
    const [deleteSubscriber] = useDeletenewsletterMutation()

    const [newsId,setNewsId]=React.useState('')
    const [news,setNews]=React.useState('')
    const [Ar,setAr]=React.useState('')
    const [open, setOpen] = React.useState(false)
    const [Articleopen, setArticleOpen] = React.useState(false)
    
    function handleAddArticle(id){
        setNewsId(()=>id);
        setArticleOpen(true)
    }
    function handleAr(data){
        setNews(()=>data);
        setAr(true)
    }

    const tableInstance = useTable(
        {
            columns,
            data,
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        initialState,
    } = tableInstance;
    initialState.pageSize = 1000;

    return (
        <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
            <AddEditNewsletter open={open} handleOpen={() => setOpen(!open)} />
            <AddArticle open={Articleopen} handleOpen={() => setArticleOpen(!Articleopen)} id={newsId} />
            <Articles open={Ar} handleOpen={() => setAr(!Ar)} news={news} />
            <div class="relative flex items-center justify-between">
                <div class="text-xl font-bold text-navy-700 dark:text-white">
                    All NewsLetters
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className={`flex items-center text-xl hover:cursor-pointer 
              bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
                >
                    <AiOutlinePlus className="h-6 w-6" />
                </button>
            </div>

            <div class="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
                <table {...getTableProps()} className="w-full">
                    <thead>
                        {headerGroups.map((headerGroup, index) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                {headerGroup.headers.map((column, index) => (

                                    <th
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        key={index}
                                        className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                                    >
                                        <p className="text-xs tracking-wide text-gray-600">
                                            {column.render("Header")}
                                        </p>
                                    </th>

                                ))}
                                <th
                                    key={index + 30}
                                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                                >
                                    <p className="text-xs tracking-wide text-gray-600">
                                        Action
                                    </p>
                                </th>
                            </tr>
                        ))}

                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map((row, index) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()} key={index}>
                                        {row.cells.map((cell, index) => {
                                            let data = "";
                                            if (cell.column.Header === "Title") {
                                                data = (
                                                    <div className="flex items-center gap-2">
                                                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                            {cell.value}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                            else if (cell.column.Header === "scheduledTime") {
                                                data = (
                                                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                        <CountdownTimer targetDate={cell.value} />
                                                    </p>
                                                );
                                            }
                                            return (

                                                <td
                                                    className="pt-[14px] pb-[18px] sm:text-[14px]"
                                                    {...cell.getCellProps()}
                                                    key={index}
                                                >
                                                    {data}
                                                </td>
                                            );
                                        })}
                                        <td>
                                            <div className='flex items-center gap-2'>
                                                <button
                                                    onClick={() => window.confirm("are you sure you want to delete this subscriber ?") ? deleteSubscriber(row.original._id) : null}
                                                    className="text-sm font-bold text-red-500 dark:text-white"
                                                >
                                                    delete
                                                </button>
                                                <button
                                                    onClick={() => handleAddArticle(row.original._id)}
                                                    className="text-sm font-bold text-yellow-500 dark:text-white"
                                                >
                                                    Add Article
                                                </button>
                                                <button
                                                    onClick={() => handleAr(row.original)}
                                                    className="text-sm font-bold text-gray-500 dark:text-white"
                                                >
                                                    Articles
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};

export default Table;
