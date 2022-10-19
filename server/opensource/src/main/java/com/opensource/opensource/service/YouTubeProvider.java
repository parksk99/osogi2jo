package com.opensource.opensource.service;

import com.opensource.opensource.dto.VideoInfoDto;

import java.util.ArrayList;

public interface YouTubeProvider {
    ArrayList<VideoInfoDto> search(String keyword);
}
