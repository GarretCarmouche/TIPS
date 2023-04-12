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
    boolean barAdd(String cardID, String customerID, String bartenderID, String bartenderName, String bartenderPhone, String bartenderEmail, String bartenderPass, String bartenderPin){
        return TipsAPI.barAdd(cardID, customerID, bartenderID, bartenderName, bartenderPhone, bartenderEmail, bartenderPass, bartenderPin);
    }

    @GetMapping("/customerAdd")
    boolean customerAdd(String cardID, String customerName, String customerPhone, String custEmail, String custPass){
        return TipsAPI.customerAdd(cardID, customerName, customerPhone, custEmail, custPass);
    }

    @GetMapping("/keyAdd")
    boolean keyAdd(String cardID, String customerID){
        return TipsAPI.keyAdd(cardID, customerID);
    }

    @GetMapping("/orderAdd")
    boolean orderAdd(String cardID, String customerID, String orderID, String drinkName){
        return TipsAPI.orderAdd(cardID, customerID, orderID, drinkName);
    }

    @GetMapping("/paymentAdd")
    boolean paymentAdd(String cardID, String customerId, String bartenderID, String paymentID, String orderID, String total, String paymentDate, String cardInfo){
        return TipsAPI.paymentAdd(cardID, customerId, bartenderID, paymentID, orderID, total, paymentDate, cardInfo);
    }
}
