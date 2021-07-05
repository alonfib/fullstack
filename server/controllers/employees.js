import exp from 'constants';
import fs from 'fs';
const file = './mockData.json';

export const getData = async (req, res) => {
    try{
        fs.readFile(file, 'utf8', (err, content) => {
            res.status(200).json(JSON.parse(content))
        })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const createTask = async (req, res) => {
    try{
        fs.readFile(file, 'utf8', (err, content) => {
            const data =  JSON.parse(content);
            const employee = data.Employees.find(emp => {
                return emp.id == req.body.params.subId })
            employee.tasks.push({text: req.body.params.task, date: req.body.params.date});
            fs.writeFileSync(file, JSON.stringify(data));
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const createReport = async (req, res) => {
    try{
        fs.readFile(file, 'utf8', (err, content) => {
            const data =  JSON.parse(content);
            const manager = data.Employees.find(emp =>  emp.id == req.body.params.managerId )
            manager.reports.push({text: req.body.params.reportText, date: req.body.params.date});
            fs.writeFileSync(file, JSON.stringify(data));
            res.status(200).json(data)
        })
    }
    catch {
        res.status(404).json({message: error.message})
    }
}
