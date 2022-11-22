package com.opensource.opensource.controller;

import com.opensource.opensource.dto.VideoInfoDto;
import com.opensource.opensource.utils.RequestTextAnalaysis;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
public class ApiController {

    private final RequestTextAnalaysis requestTextAnalaysis;

    @SneakyThrows
    @GetMapping("/novel")
    public ArrayList<VideoInfoDto> requestResult(@RequestParam String novelUrl){
        System.out.println(novelUrl);
        return requestTextAnalaysis.useResTemplate(novelUrl);
    }
}
