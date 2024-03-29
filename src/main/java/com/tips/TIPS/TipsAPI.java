package com.tips.TIPS;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

public class TipsAPI {
    static String ip = "104.154.135.177";
    static int port = 3306;
    static String db = "Tips_dev";
    static String user = "test";
    static String pass = "1234";
    static String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;


    /**
     * Retrieves a list of drink names from a database.
     *
     * @return An ArrayList of Strings containing the names of drinks from the database.
     */
    public static ArrayList<String> getDrinkNames(){
        ArrayList<String> drinks = new ArrayList<String>();
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from drinks";
                PreparedStatement st = con.prepareStatement(query);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return null;
                }
                while(rs.next()){
                    drinks.add(rs.getString("drinkName"));
                }
                return drinks;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return null;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Retrieves the price of a drink from the database.
     *
     * @param drinkName The name of the drink to retrieve the price for.
     * @return The price of the drink as a double. Returns -1 if no data is found,
     *         and 0 if an exception occurs.
     */
    public static double getDrinkPrice (String drinkName){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from drinks WHERE drinkName = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+drinkName);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return -1;
                }
                if(rs.next()){
                    return rs.getDouble("drinkPrice");
                }
                return -1;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return 0;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * Adds a drink to the database.
     *
     * @param drinkName  the name of the drink to be added
     * @param drinkPrice the price of the drink to be added
     * @return true if the drink was successfully added, false otherwise
     */
    public static boolean addDrink(String drinkName, double drinkPrice){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO drinks (drinkName, drinkPrice) VALUE (?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+drinkName);
                st.setString(2, ""+drinkPrice);
                int insRows = st.executeUpdate();
                return insRows > 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return false;
            }
        }
        catch (ClassNotFoundException e) {
            System.out.println("ClassNotFound");
            e.printStackTrace();
            return false;
        }
    }


    /**
     * Sets the price of a drink in the database.
     *
     * @param drinkName The name of the drink to update.
     * @param drinkPrice The new price of the drink.
     * @return true if the update was successful, false otherwise.
     */
    public static boolean setDrinkPrice (String drinkName, double drinkPrice){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "UPDATE drinks SET drinkPrice = ? WHERE drinkName = ?";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+drinkPrice);
                st.setString(2, ""+drinkName);
                int insRows = st.executeUpdate();
                return insRows > 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return false;
            }
        }
        catch (ClassNotFoundException e) {
            System.out.println("ClassNotFound");
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Retrieves the primary payment method for a customer from a database.
     *
     * @param customerID The ID of the customer whose primary payment method is to be retrieved.
     * @return The primary payment method of the customer if found, -1 if no data is found, and 0 if an exception occurs.
     */
    public static int getCustomerPrimaryPayment (int customerID){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from customer WHERE customerID = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+customerID);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return -1;
                }
                if(rs.next()){
                    int primaryPayment = rs.getInt("primaryPayment");
                    if(primaryPayment == 0){
                        return -1;
                    }
                    return primaryPayment;
                }
                return 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return 0;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * Retrieves payment information for a specific customer and payment ID from the database.
     * @param customerID The ID of the customer whose payment information is being retrieved.
     * @param paymentID The ID of the payment whose information is being retrieved.
     * @return A HashMap containing the payment information if found, otherwise null.
     */
    public static boolean setCustomerPrimaryPayment (int customerID, int paymentID){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "UPDATE customer SET primaryPayment = ? WHERE customerID = ?";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+paymentID);
                st.setString(2, ""+customerID);
                int insRows = st.executeUpdate();
                return insRows > 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return false;
            }
        }
        catch (ClassNotFoundException e) {
            System.out.println("ClassNotFound");
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Retrieves payment information for a specific customer and payment ID from the database.
     * @param customerID The ID of the customer whose payment information is being retrieved.
     * @param paymentID The ID of the payment whose information is being retrieved.
     * @return A HashMap containing the payment information if found, otherwise null.
     */
    public static HashMap<String,String> getPaymentInfo(int customerID, int paymentID){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from payments WHERE customerID = ? AND paymentID = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+customerID);
                st.setString(2, ""+paymentID);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return null;
                }
                if(rs.next()){
                    HashMap<String, String> payment = new HashMap<String, String>();
                    payment.put("CardName",rs.getString("cardName"));
                    payment.put("CardExpiration",rs.getString("cardExpiration"));
                    payment.put("CardNumber",rs.getString("cardNumber"));
                    payment.put("CVV",rs.getString("CVV"));
                    return payment;
                }
                return null;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return null;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Retrieves a given customer's payment information from the database.
     *
     * @param customerID The ID of the customer whose payment information is to be retrieved.
     * @return An ArrayList of HashMaps containing the payment information of the customer. 
     * Each HashMap represents a payment and contains keys for PaymentID, CardName, CardExpiration, and CardNumber. 
     * Returns null if no data is found or an exception occurs.
     */
    public static ArrayList<HashMap<String,String>> getCustomerPayments(int customerID){
        ArrayList<HashMap<String,String>> payments = new ArrayList<HashMap<String,String>>();
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from payments WHERE customerID = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+customerID);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return null;
                }
                while(rs.next()){
                    HashMap<String,String> payment = new HashMap<String,String>();
                    payment.put("PaymentID",rs.getString("paymentID"));
                    payment.put("CardName",rs.getString("cardName"));
                    payment.put("CardExpiration",rs.getString("cardExpiration"));
                    payment.put("CardNumber",rs.getString("cardNumber"));
                    payment.put("CVV",rs.getString("CVV"));
                    payments.add(payment);
                }
                return payments;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return null;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Retrieves customer information from a database using a customer ID.
     * 
     * @param customerID The ID of the customer whose information is to be retrieved.
     * @return A HashMap containing the customer's name, phone number and email address. Returns null if no data is found or an exception occurs.
     */
    public static HashMap<String,String> getCustomerInfo(int customerID){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from customer WHERE customerID = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+customerID);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return null;
                }
                if(rs.next()){
                    HashMap<String, String> customer = new HashMap<String, String>();
                    customer.put("CustomerName",rs.getString("customerName"));
                    customer.put("CustomerPhone",rs.getString("customerPhone"));
                    customer.put("CustomerEmail",rs.getString("custEmail"));
                    return customer;
                }
                return null;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return null;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * Updates a customer's information in the database.
     *
     * @param customerID The ID of the customer to update.
     * @param customerName The new name of the customer.
     * @param customerPhone The new phone number of the customer.
     * @param custEmail The new email address of the customer.
     * @param custPass The new password of the customer.
     * @return true if the update was successful, false otherwise.
     */
    public static boolean updateCustomer(int customerID, String customerName, String customerPhone, String custEmail, String custPass){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "UPDATE customer SET custPass = ?, custEmail = ?, customerPhone = ?, customerName = ? WHERE customerID = ?";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, custPass);
                st.setString(2, custEmail);
                st.setString(3, customerPhone);
                st.setString(4, customerName);
                st.setString(5, ""+customerID);
                int insRows = st.executeUpdate();
                return insRows > 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return false;
            }
        }
        catch (ClassNotFoundException e) {
            System.out.println("ClassNotFound");
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Retrieves the order history of a customer from the database.
     *
     * @param customerID The ID of the customer whose order history is to be retrieved.
     * @return An ArrayList of HashMaps containing the order history of the customer. 
     * Each HashMap represents an order and contains the OrderID and DrinkName as key-value pairs. 
     * Returns null if no data is found or an exception occurs.
     */
    public static ArrayList<HashMap<String, String>> getCustomerOrderHistory(int customerID){
        ArrayList<HashMap<String, String>> orders = new ArrayList<HashMap<String, String>>();
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from orders WHERE customerID = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+customerID);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return null;
                }
                while(rs.next()){
                    HashMap<String, String> order = new HashMap<String, String>();
                    order.put("OrderID",rs.getString("OrderID"));
                    order.put("DrinkName",rs.getString("drinkName"));
                    order.put("DrinkPrice",rs.getString("drinkPrice"));
                    orders.add(order);
                }
                return orders;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return null;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * This method clears all cards from the keyCard table in the database.
     * @return true if the operation was successful and at least one row was affected, false otherwise
     */
    public static boolean clearAllCards(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "DELETE from keyCard";
                PreparedStatement st = con.prepareStatement(query);
                int insRows = st.executeUpdate();
                return insRows > 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return false;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Unlinks a card from its customer in the database.
     *
     * @param cardID The ID of the card to be removed.
     * @return true if the card was successfully removed, false otherwise.
     */
    public static boolean unlinkCardFromCustomer(int cardID){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "DELETE from keyCard WHERE cardID = ?";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+cardID);
                int insRows = st.executeUpdate();
                return insRows > 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return false;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return false;
        }
    }

    /**
     * Retrieves the customer ID associated with a given card ID from the database.
     *
     * @param cardID The card ID to search for in the database.
     * @return The customer ID associated with the given card ID, or -1 if no data is found,
     *         or 0 if an exception occurs.
     */
    public static int getCustomerFromCardID(int cardID){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from keyCard WHERE cardID = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+cardID);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return -1;
                }
                if(rs.next()){
                    return rs.getInt("customerID");
                }
                return 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return 0;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * Retrieves the customer ID from the database using the customer's email and password.
     *
     * @param customerEmail The email of the customer.
     * @param customerPassword The password of the customer.
     * @return The customer ID if found, -1 if no data is found, and 0 if an exception occurs.
     */
    public static int getCustomerFromLogin(String customerEmail, String customerPassword){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from customer WHERE custEmail = ? AND custPass = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, customerEmail);
                st.setString(2, customerPassword);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return -1;
                }
                if(rs.next()){
                    return rs.getInt("customerID");
                }
                return 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return 0;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * Retrieves the employee ID from the database using the employee's email and password.
     *
     * @param employeeEmail The email of the employee.
     * @param employeePassword The password of the employee.
     * @return The employee ID if found, -1 if no data is found, and 0 if an exception occurs.
     */
    public static int getEmployeeFromLogin(String employeeEmail, String employeePassword){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "select * from employee WHERE employeeEmail = ? AND employeePassword = ?";

                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, employeeEmail);
                st.setString(2, employeePassword);
                ResultSet rs = st.executeQuery();
                if (!rs.isBeforeFirst()) {
                    System.out.println("No data found");
                    return -1;
                }
                if(rs.next()){
                    return rs.getInt("employeeID");
                }
                return 0;
            }
            catch(SQLException ex) {
                ex.printStackTrace();
                return 0;
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
            return 0;
        }
    }

    /**
     * Adds a bartender to the database.
     * 
     * @param employeeName The name of the bartender.
     * @param employeePhone The phone number of the bartender.
     * @param employeeEmail The email address of the bartender.
     * @param employeePassword The password of the bartender.
     * @param employeePin The PIN of the bartender.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean barAdd(String employeeName, String employeePhone, String employeeEmail, String employeePassword, String employeePin){
        int tra = 0;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO employee (employeeName, employeePhone, employeeEmail, employeePassword, employeePin) VALUE (?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, employeeName);
                st.setString(2, employeePhone);
                st.setString(3, employeeEmail);
                st.setString(4, employeePassword);
                st.setString(5, employeePin);
                int insRows = st.executeUpdate();
                if(insRows > 0){
                    tra = 1;
                }
            }
            catch(SQLException ex) {
                ex.printStackTrace();
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if(tra == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Adds a customer to the database.
     * 
     * @param customerName The name of the customer.
     * @param customerPhone The phone number of the customer.
     * @param custEmail The email address of the customer.
     * @param custPass The password of the customer.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean customerAdd(String customerName, String customerPhone, String custEmail, String custPass){
        int tra = 0;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO customer (customerName, customerPhone, custEmail, custPass) VALUE (?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, customerName);
                st.setString(2, customerPhone);
                st.setString(3, custEmail);
                st.setString(4, custPass);
                int insRows = st.executeUpdate();
                if(insRows > 0){
                    tra = 1;
                }
            }
            catch(SQLException ex) {
                ex.printStackTrace();
            }
        }
        catch (ClassNotFoundException e) {
            System.out.println("ClassNotFound");
            e.printStackTrace();
        }
        if(tra == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Adds a keycard to the database to be associated with a customer for that night or until the customer leaves.
     * 
     * @param cardID The ID of the card.
     * @param customerID The ID of the customer associated with the card.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean keyAdd(String cardID, String customerID){
        System.out.println(""+cardID + ""+customerID);
        int tra = 0;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO keyCard (cardID, customerID) VALUE (?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, cardID);
                st.setString(2, customerID);
                int insRows = st.executeUpdate();
                if(insRows > 0){
                    tra = 1;
                }
            }
            catch(SQLException ex) {
                ex.printStackTrace();
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if(tra == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Adds an order to the database.
     * 
     * @param customerID The ID of the customer associated with the order.
     * @param drinkName The name of the drink ordered.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean orderAdd(String customerID, String drinkName, double drinkPrice){
        int tra = 0;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO orders (customerID, drinkName, drinkPrice) VALUE (?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, customerID);
                st.setString(2, drinkName);
                st.setDouble(2, drinkPrice);
                int insRows = st.executeUpdate();
                if(insRows > 0){
                    System.out.println(insRows + "Updated Succesfully");
                }
            }
            catch(SQLException ex) {
                ex.printStackTrace();
            }
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        if(tra == 1){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Adds a payment record to the database.
     *
     * @param customerID The ID of the customer associated with the payment
     * @param cardNumber The credit card number
     * @param cardName The name on the credit card
     * @param cardExpiration The expiration date of the credit card
     * @param CVV The CVV code of the credit card
     * @return Returns true if the payment record was successfully added to the database, otherwise returns false
     */
    public static boolean paymentAdd(int customerID, String cardNumber, String cardName, String cardExpiration, int CVV){
        int tra = 0;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO payments (customerID, cardNumber, cardName, cardExpiration, CVV) VALUE (?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, ""+customerID);
                st.setString(2, cardNumber);
                st.setString(3, cardName);
                st.setString(4, cardExpiration);
                st.setString(5, ""+CVV);
                int insRows = st.executeUpdate();
                if(insRows > 0){
                    tra = 1;
                }
            }
            catch(SQLException ex) {
                ex.printStackTrace();
            }
            
        }
        catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

        if(tra == 1){
            return true;
        }
        else{
            return false;
        }
    }
}
