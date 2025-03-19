package org.example.frontendlearningproject.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping
    public String showMainPage(){
        System.out.println("fssfbghg");
        return "index";
    }
}
