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
    // Get all rows from table and then return readable JSON object array to frontend client
    @GetMapping(path = "/form_one/{tableName}")
    public @ResponseBody JSONArray formOne(@PathVariable String tableName) {
        
        String queryString = "SELECT * FROM " + tableName + ";";
        return connector.getMySQLData(queryString);
    }
}
