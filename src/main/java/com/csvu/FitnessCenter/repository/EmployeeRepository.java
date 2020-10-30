package com.csvu.FitnessCenter.repository;

import org.springframework.data.repository.CrudRepository;
import com.csvu.FitnessCenter.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Integer> {

}
