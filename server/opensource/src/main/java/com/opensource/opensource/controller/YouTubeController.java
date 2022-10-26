package com.opensource.opensource.controller;

import com.opensource.opensource.dto.VideoInfoDto;
import com.opensource.opensource.service.YouTubeProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class YouTubeController {

    private YouTubeProvider youTubeProvider;

    @Autowired
    public YouTubeController(
            final YouTubeProvider youTubeProvider
    ) {
        this.youTubeProvider = youTubeProvider;
    }

    @GetMapping("youtube")
    public ArrayList<VideoInfoDto> Search() {
        return youTubeProvider.search("사랑");
    }

}