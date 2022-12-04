package com.opensource.opensource.controller;

import com.opensource.opensource.dto.NovelDto;
import com.opensource.opensource.dto.VideoInfoDto;
import com.opensource.opensource.service.RequestNovelAnalaysis;
import com.opensource.opensource.service.RequestTextAnalaysis;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ApiController {

    private final RequestNovelAnalaysis requestNovelAnalaysis;
    private final RequestTextAnalaysis requestTextAnalaysis;

    @CrossOrigin(origins="*")
    @SneakyThrows
    @GetMapping("/novel")
    public ArrayList<VideoInfoDto> requestResult(@RequestParam String novelUrl, @RequestParam String genre){
        System.out.println(novelUrl);
        return requestNovelAnalaysis.useResTemplate(novelUrl, genre);
    }

    @CrossOrigin(origins="*")
    @SneakyThrows
    @PostMapping("/novel")
    public ArrayList<VideoInfoDto> requestResults(@RequestBody NovelDto novel, @RequestParam String genre){
        return requestTextAnalaysis.useResTemplate(novel.getNovel(), genre);
    }
}
