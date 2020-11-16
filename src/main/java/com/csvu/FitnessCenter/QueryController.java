package com.csvu.FitnessCenter;

import org.json.simple.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class QueryController {

    MySQLConnector connector = new MySQLConnector();

    // Controller method for FORM 1 which is used for all tables.
    // params: String tableName
    // return: JSON object array
    @GetMapping(path = "/form_one/{tableName}")
    public @ResponseBody JSONArray formOne(@PathVariable String tableName) {

        String queryString = "SELECT * FROM " + tableName + ";";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Employee table FORM 2.
    // Underlying query includes INNERJOIN.
    // params: none
    // return: JSON object array
    @GetMapping(path = "/form_two/employee")
    public @ResponseBody JSONArray formTwoEmployee() {

        String queryString = "SELECT emp_lname, emp_fname, fac_name FROM employee INNER JOIN facility ON employee.fac_id = facility.fac_id;";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Employee table FORM 3.
    // Searches for an employee by Id.
    // params: int employeeId
    // return: JSON object array
    @GetMapping(path = "/form_three/employee/{employeeId}")
    public @ResponseBody JSONArray formOne(@PathVariable int employeeId) {

        String queryString = "SELECT emp_id, emp_fname, emp_lname, emp_phone, fac_id FROM vu_db.employee WHERE emp_id = "
                + employeeId + ";";
        return connector.getMySQLData(queryString);
    }
}
