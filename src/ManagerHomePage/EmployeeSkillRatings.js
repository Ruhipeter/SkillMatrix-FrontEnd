import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap';

function EmployeeSkillRatings(props) {
    const [subSkillWithRatings, setSubSkillsWithRatings] = useState([]);
    useEffect(() => {
        
            axios.get(`https://localhost:7074/api/SubSkillsRatings/GetSubSkillRatingBySkillIdAndEmpId?skillId=${props.SkillId}&empId=${props.empId}`).then((res) => {
                setSubSkillsWithRatings(res.data)
                
                console.log(res.data)
            }).catch((err) => {
                console.log(err);
            })
        }, [])
 
        return (
            <div>
            <Table hover>
                <tbody>
                    {subSkillWithRatings.map((data,i)=>{
                        return(
                        <tr>
                        <td>{data.subSkillName}</td>
                        <td>{data.ratings}</td>
                        <td>
                            <Form.Select
                                defaultValue="Select Reporting Managers"
                            >
                                <option>Pending</option>
                                <option>Approved</option>
                                <option>Declined</option>


                            </Form.Select>
                        </td>
                    </tr>)
                    })}
                    </tbody>
            </Table></div>
        );
    }

    export default EmployeeSkillRatings