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
    private Double ratio; // 비율
    private String title; // 동영상 제목
    private String thumbnailPath; //동영상 썸네일 경로
    private String videoUrl; // 동영상 식별 Url

    @Builder(toBuilder = true)
    public VideoInfoDto(String emotion, Double ratio, String title, String thumbnailPath, String videoUrl) {
        this.emotion = emotion;
        this.ratio = ratio;
        this.title = title;
        this.thumbnailPath = thumbnailPath;
        this.videoUrl = videoUrl;
    }
}
