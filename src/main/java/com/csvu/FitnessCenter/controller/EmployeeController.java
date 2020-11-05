package com.csvu.FitnessCenter.controller;

import java.util.HashMap;
import java.util.Optional;

import com.csvu.FitnessCenter.model.Employee;
import com.csvu.FitnessCenter.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@RequestMapping(path = "/api/employee")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping()
    public @ResponseBody
    Iterable<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping()
    public @ResponseBody
    HashMap<String, String> createEmployee(@RequestBody Employee newEmployee) {
        employeeRepository.save(newEmployee);

        HashMap<String, String> responseJSON = new HashMap<>();
        responseJSON.put("message", "Successfully created new employee.");
        return responseJSON;
    }

    @PutMapping("/{id}")
    public @ResponseBody
    HashMap<String, String> updateEmployee(@RequestBody Employee updatedEmployee,
                                           @PathVariable int id) {
        HashMap<String, String> responseJSON = new HashMap<>();
        Optional<Employee> employeeOptional = employeeRepository.findById(id);

        if (!employeeOptional.isPresent()) {
            responseJSON.put("message", "ERROR: Employee does not exist.");
        }

        updatedEmployee.setEmp_id(id);
        employeeRepository.save(updatedEmployee);
        responseJSON.put("message", "Successfully updated employee.");
        return responseJSON;
    }

    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
    @DeleteMapping("/{id}")
    public @ResponseBody
    HashMap<String, String> deleteEmployee(@PathVariable int id) {
        HashMap<String, String> responseJSON = new HashMap<>();
        employeeRepository.deleteById(id);
        responseJSON.put("message", "Successfully deleted employee.");
        return responseJSON;
    }
}
