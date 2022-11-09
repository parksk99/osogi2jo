package com.opensource.opensource.utils;

import com.opensource.opensource.dto.RequestDto;
import com.opensource.opensource.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Service
@RequiredArgsConstructor
public class RequestTextAnalaysis{
    private final RestTemplate restTemplate;
    public ResponseDto useResTemplate(String novel) throws JSONException {
        URI uri = UriComponentsBuilder
//                .fromUriString("http://localhost:8000")
                .fromUriString("http://3.36.166.73")
                .path("/textAnalysis/result").encode().build().toUri();

        RequestDto req = new RequestDto();
        req.setNovel(novel);
        RequestEntity<RequestDto> requestEntity = RequestEntity
                .post(uri).contentType(MediaType.APPLICATION_JSON)
                .body(req);
        ResponseEntity<ResponseDto> response = restTemplate.exchange(requestEntity, ResponseDto.class);
        // RequestEntity객체와 반환 type을 적어서 출력
        return response.getBody();

    }

}
