package com.smart.chatroom.controller;

import com.smart.chatroom.util.RequestUtil;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
public class MainController {
    @RequestMapping("/main")
    public String main(Model model, HttpServletRequest request){
        String ipAddr = RequestUtil.getIpAddr(request);
        model.addAttribute("ipAddr",ipAddr);
        return "/main";
    }

}
