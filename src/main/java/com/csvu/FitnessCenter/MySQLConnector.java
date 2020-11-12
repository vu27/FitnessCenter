package com.csvu.FitnessCenter;

import java.sql.*;
import java.util.Properties;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

// Class used to make raw SQL queries to local MySQL database
public class MySQLConnector {

    // Update MySQL User and Password below.
    final String MYSQL_USER = "root";
    final String MYSQL_PASSWORD = "ics311";

    // MySQL connection URL
    final String MYSQL_URL = "jdbc:mysql://localhost:3306/vu_db";

    @SuppressWarnings("unchecked")
    public JSONArray getMySQLData(String queryString) {
        JSONArray jsonData = new JSONArray();

        try {
            // Initialize and open MySQL connection
            Properties connectionProps = new Properties();
            connectionProps.put("user", MYSQL_USER);
            connectionProps.put("password", MYSQL_PASSWORD);
            Connection conn = DriverManager.getConnection(MYSQL_URL, connectionProps);

            // Statement used to make raw SQL query
            Statement statement = conn.createStatement();

            // ResultSet used to store returned SQL data from query
            ResultSet resultSet;
            resultSet = statement.executeQuery(queryString);

            // Get metadata from resultSet so that it can be converted into JSON object
            // array
            ResultSetMetaData rsMetaData = resultSet.getMetaData();

            // For each sql data, convert and store into JSON object array
            while (resultSet.next()) {
                int columns = rsMetaData.getColumnCount();
                JSONObject object = new JSONObject();
                for (int i = 1; i <= columns; i++) {
                    String sqlColumn = rsMetaData.getColumnName(i);
                    object.put(sqlColumn, resultSet.getObject(sqlColumn));
                }
                jsonData.add(object);
            }

            // Close MySQL connection
            conn.close();

        } catch (Exception e) {
            System.err.println(e.getMessage());
        }

        return jsonData;
    }
}