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

    // Controller method for Member table FORM 2.
    // Underlying query includes INNERJOIN.
    // params: none
    // return: JSON object array
    @GetMapping(path = "/form_two/member")
    public @ResponseBody JSONArray formTwoMember() {

        String queryString = "SELECT mem_fname, mem_lname, tier_name FROM member INNER JOIN membership_tier ON member.tier_code = membership_tier.tier_code;";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Equipment table FORM 2.
    // Underlying query includes INNERJOIN.
    // params: none
    // return: JSON object array
    @GetMapping(path = "/form_two/equipment")
    public @ResponseBody JSONArray formTwoEquipment() {

        String queryString = "SELECT equip_name, fac_name FROM equipment INNER JOIN facility ON equipment.fac_id = facility.fac_id;";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Jobs table FORM 2.
    // Underlying query includes INNERJOIN.
    // params: none
    // return: JSON object array
    @GetMapping(path = "/form_two/job")
    public @ResponseBody JSONArray formTwoJob() {

        String queryString = "SELECT job_code, job_dec, emp_lname FROM job INNER JOIN employee ON employee.emp_id = job.emp_id;";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Employee table FORM 3.
    // Searches for an employee by Id.
    // params: int employeeId
    // return: JSON object array
    @GetMapping(path = "/form_three/employee/{employeeId}")
    public @ResponseBody JSONArray formThreeEmployee(@PathVariable int employeeId) {

        String queryString = "SELECT emp_id, emp_fname, emp_lname, emp_phone, fac_id FROM vu_db.employee WHERE emp_id = "
                + employeeId + ";";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Member table FORM 3.
    // Searches for a member by Id.
    // params: int employeeId
    // return: JSON object array
    @GetMapping(path = "/form_three/member/{memberId}")
    public @ResponseBody JSONArray formThreeMember(@PathVariable int memberId) {

        String queryString = "SELECT mem_id, mem_fname, mem_lname, mem_email, mem_is_active, mem_total_paid, tier_code FROM vu_db.member WHERE mem_id = "
                + memberId + ";";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Member table FORM 3.
    // Searches for membership tier by tier code.
    // params: int tierCode
    // return: JSON object array
    @GetMapping(path = "/form_three/tier/{tierCode}")
    public @ResponseBody JSONArray formThreeTier(@PathVariable int tierCode) {

        String queryString = "SELECT tier_code, tier_name, tier_price FROM vu_db.membership_tier WHERE tier_code = "
                + tierCode + ";";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Facility table FORM 3.
    // Searches for facilty by id.
    // params: int facilityId
    // return: JSON object array
    @GetMapping(path = "/form_three/facility/{facilityId}")
    public @ResponseBody JSONArray formThreeFacility(@PathVariable int facilityId) {

        String queryString = "SELECT fac_id, fac_name FROM vu_db.facility WHERE fac_id = " + facilityId + ";";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Equipment table FORM 3.
    // Searches for Equipment by id.
    // params: int equipId
    // return: JSON object array
    @GetMapping(path = "/form_three/equipment/{equipId}")
    public @ResponseBody JSONArray formThreeEquipment(@PathVariable int equipId) {

        String queryString = "SELECT equip_id, equip_name, equip_quantity, fac_id FROM vu_db.equipment WHERE equip_id = "
                + equipId + ";";
        return connector.getMySQLData(queryString);
    }

    // Controller method for Job table FORM 3.
    // Searches for Job by codeId.
    // params: int codeId
    // return: JSON object array
    @GetMapping(path = "/form_three/job/{codeId}")
    public @ResponseBody JSONArray formThreeJob(@PathVariable int codeId) {

        String queryString = "SELECT job_code, job_dec, job_salary, emp_id FROM job WHERE job_code = " + codeId + ";";
        return connector.getMySQLData(queryString);
    }
}
