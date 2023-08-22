import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './secondpage.scss';
import DepartmentListComponent from '../../component/departmentlist/DepartmentListComponent';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const departmentsData = [
    {
        "department": "customer_service",
        "sub_departments": ["support", "customer_success"]
    },
    {
        "department": "design",
        "sub_departments": ["graphic_design", "product_design", "web_design"]
    }
];

const SecondPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 500 },
    ];

    return (
        <div className="data-grid-container">
            <h2>Posts</h2>
            <div className="data-grid">
                <DataGrid rows={posts} columns={columns} />
            </div>
            <div className="department-section">
                <h2>Departments and Sub-departments</h2>
                <DepartmentListComponent departments={departmentsData} />
            </div>
        </div>
    );
};

export default SecondPage;
