package com.opensource.opensource.service;

import com.opensource.opensource.dto.VideoInfoDto;

public interface YouTubeProvider {
    VideoInfoDto search(String keyword, Double ratio, String genre);
}
