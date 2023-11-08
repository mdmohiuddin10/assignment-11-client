import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { useTable } from "react-table";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";


const ManageFoods = () => {
    const { user } = useContext(AuthContex);
    const manageFoods = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);


    setTimeout(() => {
        setIsLoading(false);
    }, 1000);

    const filterFoods = manageFoods.filter((newFoods) => newFoods.email === user.email);

    // Define the table columns and data
    const columns = [
        {
            Header: "Food Name",
            accessor: "foodName",
        },
        {
            Header: "Donor Name",
            accessor: "name",
        },
        {
            Header: "Expire Date",
            accessor: "date",
        },
        {
            Header: "Actions",
            accessor: "actions",
            Cell: ({ row }) => (
                <div>
                    <button onClick={() => handleUpdate(id)} className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-md">
                        Update
                    </button>
                    <NavLink to={'/'}>
                        <button onClick={() => handleDelete(row.original)}>Delete</button>
                    </NavLink>
                    <button onClick={() => handleManage(row.original)}>Manage</button>
                </div>

            )

        },
    ];

    // Create a data array for the table
    const data = filterFoods.map((food) => ({
        foodName: food.foodName,
        name: food.name,
        date: food.date,
        actions: food._id,
    }));

    if (isLoading) {
        return <div>Loading...</div>;
    }

   
    const handleDelete = (actions) => {
        fetch(`http://localhost:5000/allfoods/${actions}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        // const remaining = request.filter(book=> book._id !== id);
                        // setRequest(remaining)
                    }
                });
            })

    }

   

    return (
        <div>
            <h2>Hello {filterFoods.length}</h2>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.accessor}>{column.Header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column.accessor}>
                                    {column.accessor === "actions" ? (
                                        <div className="">
                                            <NavLink to={`/updatedata/${row.actions}`}>
                                                <button className="btn mr-2 btn-primary">Update</button>
                                            </NavLink>
                                            <button className="btn mr-2 btn-primary" onClick={() => handleDelete(row.actions)}>Delete</button>
                                            <NavLink to={`/manageSingleFood/${row.actions}`}>
                                                <button className="btn mr-2 btn-primary">Manage</button>
                                            </NavLink>
                                        </div>
                                    ) : (
                                        row[column.accessor]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageFoods;
