package com.opensource.opensource.controller;

import com.opensource.opensource.dto.RequestDto;
import com.opensource.opensource.utils.RequestTextAnalaysis;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ApiController {

    private final RequestTextAnalaysis requestTextAnalaysis;

    @SneakyThrows
    @PostMapping("/django")
    public Object requestResult(@RequestBody RequestDto novel){
        System.out.println(novel.getNovel());
        return requestTextAnalaysis.useResTemplate(novel.getNovel());
    }
}
