import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const handleClick = (event, cellValues) => {
  console.log(cellValues.row.empId);
  localStorage.setItem("ApprovalEmpId", cellValues.row.empId);
};

const RmId = localStorage.getItem("EmpId");

const columns = [
  {
    field: "empId",
    headerName: "Emp_ID",
    sortable: true,
    filter: true,
    width: 80,
  },
  {
    field: "employeeCode",
    headerName: "Employee_Code",
    sortable: true,
    filter: true,
    width: 150,
  },
  {
    field: "name",
    headerName: "Employee_Name",
    sortable: true,
    filter: true,
    width: 150,
  },
  {
    field: "reportingManager",
    headerName: "Reporting_Manager",
    sortable: true,
    filter: true,
    width: 170,
  },
  {
    field: "team",
    headerName: "Team",
    sortable: true,
    filter: true,
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    sortable: true,
    filter: true,
    width: 150,
  },
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: true,
    width: 350,
  },
  {
    field: "View Details",
    width: 250,
    renderCell: (cellValues) => {
      return (
        <NavLink to="/EmployeeRating">
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            View Employee Details
          </Button>
        </NavLink>
      );
    },
  },
];

export default function ApprovalDataTable() {
  // const navigate = useNavigate()
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://localhost:7074/api/Employee/GetEmployeeByResourceManagerId?resourceManagerId=${RmId}`
      )
      .then((res) => {
        console.log(res.data);

        setRows(res.data);
      });
  }, []);
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        rowHeight={120}
        columns={columns}
        getRowId={(row) => row.empId}
        style={{
          fontSize:"17px"
        }}
      />
    </div>
  );
}
