package com.opensource.opensource.controller;

import com.opensource.opensource.dto.VideoInfoDto;
import com.opensource.opensource.service.RequestTextAnalaysis;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ApiController {

    private final RequestTextAnalaysis requestTextAnalaysis;

    @CrossOrigin(origins="*")
    @SneakyThrows
    @GetMapping("/novel")
    public ArrayList<VideoInfoDto> requestResult(@RequestParam String novelUrl, @RequestParam String genre){
        System.out.println(novelUrl);
        return requestTextAnalaysis.useResTemplate(novelUrl, genre);
    }
}
