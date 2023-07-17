import Card from "components/card";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import React from "react";
import AddEditModal from "./AddEditModal";
import { useMemo } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDeleteSubscriberMutation, useDeleteManyMutation } from "./subscriberApi";
// import Send from "./Send";
import Checkbox from "components/checkbox";
const Table = (props) => {
    const { columnsData, tableData } = props;
    const columns = useMemo(() => columnsData, [columnsData]);
    const data = useMemo(() => tableData, [tableData]);
    const [deleteSubscriber] = useDeleteSubscriberMutation()
    const [deletemany] = useDeleteManyMutation()
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(!open);
    const [eopen, setEopen] = React.useState(false)
    const handleEopen = () => setEopen(!eopen);
    const [editData, setEditData] = React.useState('')
    // const [sendModel,setSendModel] = React.useState(false)
    const [checkedIds, setCheckedIds] = React.useState([]);

    const handleChange = (event, id) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckedIds([...checkedIds, id]);
        } else {
            setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
        }
    };
    function handleEdit(data) {
        setEditData(() => data);
        setEopen(true)
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
    const deleteMany = (ids)=>{
        if(window.confirm('are you sure you want to delete all of those ? ')) deletemany(ids)
        setCheckedIds([])
    }

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
            <AddEditModal open={open} handleOpen={handleOpen} />
            {/* <Send open={sendModel} handleOpen={()=>setSendModel(!sendModel)} emails={checkedIds} /> */}
            <AddEditModal open={eopen} handleOpen={handleEopen} isEdit={true} {...editData} />
            <div class="relative flex items-center justify-between">
                <div class="text-xl font-bold text-navy-700 dark:text-white">

                    All Subscribers
                </div>
                <button
                    onClick={ checkedIds.length > 1 ? ()=>deleteMany(checkedIds) : ()=>handleOpen() }
                    className={`flex items-center text-xl hover:cursor-pointer 
              bg-lightPrimary p-2 text-red-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
                >
                    {checkedIds.length > 1 ? 'Delete' : <AiOutlinePlus className="h-6 w-6" />}
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
                                            if (cell.column.Header === "Email") {
                                                data = (
                                                    <div className="flex items-center gap-2">
                                                        <Checkbox checked={checkedIds.includes(row.original._id)}
                                                            onChange={(event) => handleChange(event, row.original._id)} />

                                                        <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                            {cell.value}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                            else if (['First Name', 'Last Name', 'Age'].includes(cell.column.Header)) {

                                                data = (
                                                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                        {cell.value}
                                                    </p>
                                                );
                                            } else if (cell.column.Header === "Interests") {
                                                data = (
                                                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                                                        {cell.value?.join(',')}
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
                                                    onClick={() => handleEdit(row.original)}
                                                    className="text-sm font-bold text-yellow-500 dark:text-white"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => window.confirm("are you sure you want to delete this subscriber ?") ? deleteSubscriber(row.original._id) : null}
                                                    className="text-sm font-bold text-red-500 dark:text-white"
                                                >
                                                    delete
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
