"use client"
import React from 'react'

export default function OrdersPage() {
  const tableItems = [
    {
        name: "1111333453445",
        email: "10/07/2023",
        position: "Pizza and Carrot",
        salary: "$10.80",
        status: "delivered"
    },
    {
        name: "1111333453445",
        email: "10/07/2023",
        position: "Pizza and Carrot",
        salary: "$90.00",
        status: "delivered"
    },
    {
        name: "1111333453445",
        email: "10/07/2023",
        position: "Pizza and Carrot",
        salary: "$8.00",
        status: "delivered"
    },
    {
        name: "1111333453445",
        email: "10/07/2023",
        position: "Pizza and Carrot",
        salary: "$12.00",
        status: "delivered"
    },
    {
        name: "1111333453445",
        email: "10/07/2023",
        position: "Pizza and Carrot",
        salary: "$75.96",
        status: "delivered"
    },
]

return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto m-10">
            <table className="w-full table-auto text-sm text-left">
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        <th className="py-3 px-6">Order ID</th>
                        <th className="py-3 px-6">Date</th>
                        <th className="py-3 px-6">Product</th>
                        <th className="py-3 px-6">Price</th>
                        <th className="py-3 px-6">Status</th>
                        <th className="py-3 px-6 ">Edit/Delete</th>

                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {
                        tableItems.map((item, idx) => (
                            <tr key={idx}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                                <td className="text-right px-6 whitespace-nowrap">
                                    <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Edit
                                    </a>
                                    <a href="javascript:void()" className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
)
}
