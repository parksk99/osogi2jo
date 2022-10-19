package com.opensource.opensource.controller;

import com.opensource.opensource.service.CrawlingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class CrawlingController {

    private final CrawlingService crawlingService;

    @GetMapping("crawl")
    public String crawl(){
        return crawlingService.process();
    }
}
