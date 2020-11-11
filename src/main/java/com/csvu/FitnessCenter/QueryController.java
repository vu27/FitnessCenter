package com.csvu.FitnessCenter;

import java.sql.*;
import java.util.HashMap;
import java.util.Properties;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/api/query")
public class QueryController {



    // Update MySQL User and Password below.
    final String MYSQL_URL = "jdbc:mysql://localhost:3306/vu_db";
    final String MYSQL_USER = "root";
    final String MYSQL_PASSWORD = "ics311";





    @GetMapping()
    public @ResponseBody HashMap<String, String> getAllEmployees() {
        try {
            Properties connectionProps = new Properties();
            connectionProps.put("user", MYSQL_USER);
            connectionProps.put("password", MYSQL_PASSWORD);

            Connection conn = DriverManager.getConnection(MYSQL_URL, connectionProps);

            Statement stmt = conn.createStatement();
            ResultSet resultSet;

            resultSet = stmt.executeQuery("SELECT * FROM member;");

            
            System.out.println(resultSet);


            while (resultSet.next()) {
                String lastName = resultSet.getString("mem_fname");
                System.out.println(lastName);
            }

            conn.close();


        } catch (Exception e) {
            System.err.println("Got an exception! ");
            System.err.println(e.getMessage());
        }

        HashMap<String, String> responseJSON = new HashMap<>();
        responseJSON.put("message", "Successfully created new employee.");
        return responseJSON;
    }

    // @PostMapping()
    // public @ResponseBody
    // HashMap<String, String> createEmployee(@RequestBody Employee newEmployee) {
    // employeeRepository.save(newEmployee);

    // HashMap<String, String> responseJSON = new HashMap<>();
    // responseJSON.put("message", "Successfully created new employee.");
    // return responseJSON;
    // }

    // @PutMapping("/{id}")
    // public @ResponseBody
    // HashMap<String, String> updateEmployee(@RequestBody Employee updatedEmployee,
    // @PathVariable int id) {
    // HashMap<String, String> responseJSON = new HashMap<>();
    // Optional<Employee> employeeOptional = employeeRepository.findById(id);

    // if (!employeeOptional.isPresent()) {
    // responseJSON.put("message", "ERROR: Employee does not exist.");
    // }

    // updatedEmployee.setEmp_id(id);
    // employeeRepository.save(updatedEmployee);
    // responseJSON.put("message", "Successfully updated employee.");
    // return responseJSON;
    // }

    // @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
    // @DeleteMapping("/{id}")
    // public @ResponseBody
    // HashMap<String, String> deleteEmployee(@PathVariable int id) {
    // HashMap<String, String> responseJSON = new HashMap<>();
    // employeeRepository.deleteById(id);
    // responseJSON.put("message", "Successfully deleted employee.");
    // return responseJSON;
    // }
}
