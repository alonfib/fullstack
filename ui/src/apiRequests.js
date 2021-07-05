import axios from 'axios'

export const fetchData = async () => {
    const res = await axios.get("http://localhost:5000/employees");
    return res.data;
}

export const createTask = async (id, task, date) => {
    const res = await axios.post("http://localhost:5000/employees/createTask", {
        params: {
            subId:id, 
            task:task, 
            date:date
    }});
    return res.data
}

export const createReport = async (id, text, date) => {
    const res = await axios.post("http://localhost:5000/employees/createReport", {
        params: {
            managerId:id, 
            reportText:text, 
            date:date
    }});
    return res.data
}