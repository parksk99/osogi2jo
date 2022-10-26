package com.opensource.opensource.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VideoInfoDto {
    private String emotion; // 감정
    private String title; // 동영상 제목
    private String thumbnailPath; //동영상 썸네일 경로
    private String videoUrl; // 동영상 식별 Url

    @Builder(toBuilder = true)
    public VideoInfoDto(String emotion, String title, String thumbnailPath, String videoUrl) {
        this.emotion = "행복";
        this.title = title;
        this.thumbnailPath = thumbnailPath;
        this.videoUrl = videoUrl;
    }
}
