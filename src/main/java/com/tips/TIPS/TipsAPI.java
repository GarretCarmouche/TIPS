package com.tips.TIPS;

import java.sql.*;

public class TipsAPI {
    static String ip = "104.154.135.177";
    static int port = 3306;
    static String db = "Tips_dev";
    static String user = "test";
    static String pass = "1234";

    /**
     * This method adds a bartender to the database.
     * 
     * @param cardID The ID of the card associated with the bartender.
     * @param customerID The ID of the customer associated with the bartender.
     * @param bartenderID The ID of the bartender.
     * @param bartenderName The name of the bartender.
     * @param bartenderPhone The phone number of the bartender.
     * @param bartenderEmail The email address of the bartender.
     * @param bartenderPass The password of the bartender.
     * @param bartenderPin The PIN of the bartender.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean barAdd(String cardID, String customerID, String bartenderID, String bartenderName, String bartenderPhone, String bartenderEmail, String bartenderPass, String bartenderPin){
        int tra = 0;
        String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO bartender (cardID, customerID, bartenderID, bartenderName, bartenderPhone, bartenderEmail, bartenderPass, bartenderPin) VALUE (?, ?, ?, ?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, cardID);
                st.setString(2, customerID);
                st.setString(3, bartenderID);
                st.setString(4, bartenderName);
                st.setString(5, bartenderPhone);
                st.setString(6, bartenderEmail);
                st.setString(7, bartenderPass);
                st.setString(8, bartenderPin);
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
     * This method adds a customer to the database.
     * 
     * @param cardID The ID of the card associated with the customer.
     * @param customerName The name of the customer.
     * @param customerPhone The phone number of the customer.
     * @param custEmail The email address of the customer.
     * @param custPass The password of the customer.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean customerAdd(String cardID, String customerName, String customerPhone, String custEmail, String custPass){
        int tra = 0;
        String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO customer (cardID, customerName, customerPhone, custEmail, custPass) VALUE (?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, cardID);
                st.setString(2, customerName);
                st.setString(3, customerPhone);
                st.setString(4, custEmail);
                st.setString(5, custPass);
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
     * This method adds a keycard to the database to be associated with a customer for that night or until the customer leaves.
     * 
     * @param cardID The ID of the card.
     * @param customerID The ID of the customer associated with the card.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean keyAdd(String cardID, String customerID){
        int tra = 0;
        String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;
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
     * This method adds an order to the database.
     * 
     * @param cardID The ID of the card associated with the order.
     * @param customerID The ID of the customer associated with the order.
     * @param orderID The ID of the order.
     * @param drinkName The name of the drink ordered.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean orderAdd(String cardID, String customerID, String orderID, String drinkName){
        int tra = 0;
        String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO orders (cardID, customerID, orderID, drinkName) VALUE (?, ?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, cardID);
                st.setString(2, customerID);
                st.setString(3, orderID);
                st.setString(4, drinkName);
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
     * This method adds a payment to the database.
     * 
     * @param cardID The ID of the card associated with the payment.
     * @param customerID The ID of the customer associated with the payment.
     * @param bartenderID The ID of the bartender associated with the payment.
     * @param paymentID The ID of the payment.
     * @param orderID The ID of the order associated with the payment.
     * @param total The total amount of the payment.
     * @param paymentDate The date of the payment.
     * @param cardInfo The information of the card used for the payment.
     * @return true if the insertion was successful, false otherwise.
     */
    public static boolean paymentAdd(String cardID, String customerID, String bartenderID, String paymentID, String orderID, String total, String paymentDate, String cardInfo){
        int tra = 0;
        String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO payments (cardID, customerID, bartenderID, paymentID, orderID, total, paymentDate, cardInfo) VALUE (?, ?, ?, ?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, cardID);
                st.setString(2, customerID);
                st.setString(3, bartenderID);
                st.setString(4, paymentID);
                st.setString(5, orderID);
                st.setString(6, total);
                st.setString(7, paymentDate);
                st.setString(8, cardInfo);
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
