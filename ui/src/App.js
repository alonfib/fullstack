import { useEffect, useState } from 'react';
import EmployeeList from './components/EmployeeList'
import EmployeePage from './components/EmployeePage';
import { fetchData, createTask,createReport } from './apiRequests';
import 'reactjs-popup/dist/index.css';
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedEmployee, setSetlectedEmployee] = useState(null);

 
useEffect(() => {
 fetchData().then(data =>setData(data.Employees));
},[])

const createNewTask = (subId, task, date) => {
    createTask(subId, task, date).then(data => {
      setData(data.Employees)
    }
  )
}

 const createNewReport = (selected, reportText, date) => {
  createReport(selected.managerId, reportText,date).then(data => {setData(data.Employees)})
 }

const actions = {
  createTask: createNewTask,
  createReport: createNewReport
}

  return (
    <div className="App">
      {Boolean(data) ?
      !selectedEmployee ?
        <EmployeeList data={data} setSetlectedEmployee={setSetlectedEmployee} /> :
        <EmployeePage 
          data={data} 
          selected={selectedEmployee} 
          goBack={() => setSetlectedEmployee(null)}
          manager={data.find(emp => emp.id === selectedEmployee.managerId ) }
          subordinates={data.filter(emp => selectedEmployee?.subordinatesIds.includes(emp.id))}
          actions={actions}
          />
          :
          null
      }
    </div>
  );
}

export default App;
