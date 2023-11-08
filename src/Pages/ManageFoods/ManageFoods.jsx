import { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { useTable } from "react-table";
import { AuthContex } from "../../firebase/AuthProvider";


const ManageFoods = () => {
    const { user } = useContext(AuthContex);
    const manageFoods = useLoaderData();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous data fetch here. Replace with your actual data fetching code.
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the delay as needed
    }, []);

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
            Cell: ({ id }) => (
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
        actions: food.id,
    }));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // Define your update, delete, and manage handlers here
    const handleUpdate = (row) => {
        // Handle the update action for the selected row
        console.log("Update clicked for row:", row);
    };

    const handleDelete = () => {
        // Handle the delete action for the selected row
        console.log("Delete clicked for row:",);
    };

    const handleManage = (row) => {
        // Handle the manage action for the selected row
        console.log("Manage clicked for row:", row);
    };

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
                                        <div>
                                            <button onClick={() => handleUpdate(row)}>Update</button>
                                            <button onClick={() => handleDelete(row)}>Delete</button>
                                            <button onClick={() => handleManage(row)}>Manage</button>
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
