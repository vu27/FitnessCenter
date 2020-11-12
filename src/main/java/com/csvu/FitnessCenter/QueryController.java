package com.csvu.FitnessCenter;

import org.json.simple.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class QueryController {

    MySQLConnector connector = new MySQLConnector();

    // Controller method for FORM 1 which is used for all tables.
    // Get all rows from table and then return readable JSON object array to frontend client
    @GetMapping(path = "/form_one")
    public @ResponseBody JSONArray formOne() {
        
        String queryString = "SELECT * FROM member;";

        return connector.getMySQLData(queryString);
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
