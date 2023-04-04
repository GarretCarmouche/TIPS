package com.tips.TIPS;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.sql.*;
@SpringBootApplication
public class main {
    String ip = "104.154.135.177";
    int port = 3306;
    int port = 3306;
    String db = "Tips_dev";
    String user = "test";
    String pass = "1234";
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
    public static boolean cusAdd(String cardID, String customerID, String customerName, String customerPhone, String custEmail, String custPass){
        int tra = 0;
        String url = "jdbc:mysql://" + ip + ":" + port + "/" + db;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            try(Connection con = DriverManager.getConnection(url, user, pass)){
                String query = "INSERT INTO customer (cardID, customerID, customerName, customerPhone, custEmail, custPass) VALUE (?, ?, ?, ?, ?, ?)";
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, cardID);
                st.setString(2, customerID);
                st.setString(3, customerName);
                st.setString(4, customerPhone);
                st.setString(5, custEmail);
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
        e.printStackTrace();
    }
    if(tra == 1){
        return true;
    }
    else{
        return false;
    }
    }
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
    public boolean ordAdd(String cardID, String customerID, String orderID, String drinkName){
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
    public static boolean payAdd(String cardID, String customerID, String bartenderID, String paymentID, String orderID, String total, String paymentDate, String cardInfo){
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
            if(tra == 1){
                return true;
            }
            else{
                return false;
            }
    }
    catch (ClassNotFoundException e) {
        e.printStackTrace();
    }
    }
    public static void main(String[] args){
        System.out.println("main");
    }
}