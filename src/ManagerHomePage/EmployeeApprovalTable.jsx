import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ratingCss from "../css/ratings.css"


const handleClick = (event, cellValues) => {
  console.log(cellValues.row.empId);
  localStorage.setItem("ApprovalEmpId", cellValues.row.empId);
  localStorage.setItem("ApprovalTeamId", cellValues.row.teamId);
};

const RmId = localStorage.getItem("EmpId");
const datagridSx = {
  "& .MuiDataGrid-columnHeaders": {
    fontSize: 17,
    backgroundColor: '#273143',
    color: "white"
  }
}

const columns = [
  {
    field: "empId",
    headerName: "Emp ID",
    sortable: true,
    filter: true,
    width: 80,
    headerClassName:'rowClass'
  },
  {
    field: "employeeCode",
    headerName: "Employee Code",
    sortable: true,
    filter: true,
    width: 150,
  },
  {
    field: "name",
    headerName: "Employee Name",
    sortable: true,
    filter: true,
    width: 150,
  },
  {
    field: "reportingManager",
    headerName: "Reporting Manager",
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
            style={{textTransform :'capitalize'}}
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
        `https://localhost:7074/api/Approvals/GetApprovalsByManagerId?managerId=${RmId}`
      )
      .then((res) => {
        console.log(res.data);

        setRows(res.data);
      });
  }, []);
  return (
    <div style={{ height: 1000, width: "100%" }}>
      <DataGrid
        rows={rows}
        rowHeight={120}
        columns={columns}
        getRowId={(row) => row.empId}
        style={{
          fontSize:"17px"
        }}
        sx={datagridSx}
      />
    </div>
  );
}
