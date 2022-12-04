package com.opensource.opensource.service;

import com.opensource.opensource.dto.RequestDto;
import com.opensource.opensource.dto.VideoInfoDto;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class RequestTextAnalaysis {
    private final RestTemplate restTemplate;
    private final YouTubeSearchService youTubeSearchService;


    public ArrayList<VideoInfoDto> useResTemplate(String novel, String genre) throws ParseException {
        ArrayList<VideoInfoDto> resp = new ArrayList<>();
        JSONParser jsonParser = new JSONParser();
        restTemplate.getMessageConverters()
                .add(0, new StringHttpMessageConverter(StandardCharsets.UTF_8));

        URI uri = UriComponentsBuilder
//                .fromUriString("http://localhost:8000")
                .fromUriString("http://3.36.166.73")
                .path("/textAnalysis/text/result").encode().build().toUri();
        RequestDto req = new RequestDto();
        req.setNovel(novel);
        RequestEntity<RequestDto> requestEntity = RequestEntity
                .post(uri).contentType(MediaType.APPLICATION_JSON)
                .body(req);

        ResponseEntity response = restTemplate.exchange(requestEntity, String.class);

        JSONArray resultArray = (JSONArray) jsonParser.parse(response.getBody().toString());

        for(int i=0 ; i<resultArray.size(); i++){
            JSONObject object = (JSONObject) jsonParser.parse(resultArray.get(i).toString());
            String keyword = (String) object.get("keyword");
            Double ratio = (Double) object.get("ratio");
            resp.add(youTubeSearchService.search(keyword, ratio, genre));
        }
        return resp;
    }

}
