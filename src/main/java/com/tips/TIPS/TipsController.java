package com.tips.TIPS;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.ArrayList;
import java.util.HashMap;

@RestController
@RequestMapping("/TIPSController")
@CrossOrigin(origins = "http://localhost:3000")

public class TipsController {

    @GetMapping("/barAdd")
    boolean barAdd(String bartenderID, String bartenderName, String bartenderPhone, String bartenderEmail, String bartenderPass, String bartenderPin){
        return TipsAPI.barAdd(bartenderID, bartenderName, bartenderPhone, bartenderEmail, bartenderPass, bartenderPin);
    }

    @GetMapping("/customerAdd")
    boolean customerAdd(String customerName, String customerPhone, String custEmail, String custPass){
        return TipsAPI.customerAdd(customerName, customerPhone, custEmail, custPass);
    }

    @GetMapping("/keyAdd")
    boolean keyAdd(String cardID, String customerID){
        return TipsAPI.keyAdd(cardID, customerID);
    }

    @GetMapping("/orderAdd")
    boolean orderAdd(String customerID, String drinkName){
        return TipsAPI.orderAdd(customerID, drinkName);
    }

    @GetMapping("/paymentAdd")
    boolean paymentAdd(int customerID, String cardNumber, String cardName, String cardExpiration, int CVV){
        return TipsAPI.paymentAdd(customerID, cardNumber, cardName, cardExpiration, CVV);
    }

    @GetMapping("/getCustomerLogin")
    int getCustomerFromLogin(String customerEmail, String customerPassword){
        return TipsAPI.getCustomerFromLogin(customerEmail, customerPassword);
    }

    @GetMapping("/getEmployeeLogin")
    int getEmployeeFromLogin(String employeeEmail, String employeePassword){
        return TipsAPI.getEmployeeFromLogin(employeeEmail, employeePassword);
    }

    @GetMapping("/getCustomerFromCardID")
    int getCustomerFromCardID(int cardID){
        return TipsAPI.getCustomerFromCardID(cardID);
    }

    @GetMapping("/unlinkCardFromCustomer")
    boolean unlinkCardFromCustomer(int cardID){
        return TipsAPI.unlinkCardFromCustomer(cardID);
    }

    @GetMapping("/clearAllCards")
    boolean clearAllCards(){
        return TipsAPI.clearAllCards();
    }

    @GetMapping("/getCustomerOrderHistory")
    ArrayList<HashMap<String, String>> getCustomerOrderHistory(int customerID){
        return TipsAPI.getCustomerOrderHistory(customerID);
    }

    @GetMapping("/updateCustomer")
    boolean updateCustomer(int customerID, String customerName, String customerPhone, String custEmail, String custPass){
        return TipsAPI.updateCustomer(customerID, customerName, customerPhone, custEmail, custPass);
    }

    @GetMapping("/getCustomerInfo")
    HashMap<String,String> getCustomerInfo(int customerID){
        return TipsAPI.getCustomerInfo(customerID);
    }

    @GetMapping("/getCustomerPayments")
    ArrayList<HashMap<String, String>> getCustomerPayments(int customerID){
        return TipsAPI.getCustomerPayments(customerID);
    }

    @GetMapping("/getPaymentInfo")
    HashMap<String, String> getPaymentInfo(int customerID, int paymentID){
        return TipsAPI.getPaymentInfo(customerID, paymentID);
    }

    @GetMapping("/setCustomerPrimaryPayment")
    boolean setCustomerPrimaryPayment(int customerID, int paymentID){
        return TipsAPI.setCustomerPrimaryPayment(customerID, paymentID);
    }

    @GetMapping("/getCustomerPrimaryPayment")
    int getCustomerPrimaryPayment(int customerID){
        return TipsAPI.getCustomerPrimaryPayment(customerID);
    }

    @GetMapping("/setDrinkPrice")
    boolean setDrinkPrice(String drinkName, double drinkPrice){
        return TipsAPI.setDrinkPrice(drinkName, drinkPrice);
    }

    @GetMapping("/addDrink")
    boolean addDrink(String drinkName, double drinkPrice){
        return TipsAPI.addDrink(drinkName, drinkPrice);
    }

    @GetMapping("/getDrinkPrice")
    double getDrinkPrice(String drinkName){
        return TipsAPI.getDrinkPrice(drinkName);
    }
}
