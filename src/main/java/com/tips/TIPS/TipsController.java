package com.tips.TIPS;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/TIPSController")
@CrossOrigin(origins = "http://localhost:9090")

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
    boolean orderAdd(String customerID, String orderID, String drinkName){
        return TipsAPI.orderAdd(customerID, orderID, drinkName);
    }

    @GetMapping("/paymentAdd")
    boolean paymentAdd(String customerID, String paymentID, String cardInfo){
        return TipsAPI.paymentAdd(customerID, paymentID, cardInfo);
    }

    @GetMapping("/getCustomerLogin")
    int getCustomerFromLogin(String customerEmail, String customerPassword){
        return TipsAPI.getCustomerFromLogin(customerEmail, customerPassword);
    }
}
