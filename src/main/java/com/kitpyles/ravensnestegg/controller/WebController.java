package com.kitpyles.ravensnestegg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping(value = {"/", "/dashboard", "/home"})
    public String index() {
        return "index";}
}
