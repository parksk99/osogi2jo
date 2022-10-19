package com.opensource.opensource.service;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Component
public class CrawlingService {
    private static final String url = "https://www.tocsoda.co.kr/product/view?brcd=76M2101153332&epsdBrcd=76S2101527508";
    String text = "";
    private WebDriver driver;

    public String process() {
//        System.setProperty("webdriver.chrome.driver", "C:\\Users\\ojyse\\Downloads\\chromedriver_win32\\chromedriver.exe");
        System.setProperty("webdriver.chrome.driver", "/usr/bin/chromedriver.exe");
        //크롬 드라이버 셋팅 (드라이버 설치한 경로 입력)

//        driver = new ChromeDriver();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-popup-blocking");       //팝업안띄움
        options.addArguments("headless");                       //브라우저 안띄움
        options.addArguments("--disable-gpu");			//gpu 비활성화
        options.addArguments("--blink-settings=imagesEnabled=false"); //이미지 다운 안받음
//        options.setPageLoadStrategy(PageLoadStrategy.EAGER);
        driver = new ChromeDriver(options);

        try {
            getDataList();                    
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.close();	//탭 닫기
        driver.quit();	//브라우저 닫기
        return text;
    }


    /**
     * data가져오기
     */
    private List<String> getDataList() throws InterruptedException {
        List<String> list = new ArrayList<>();

        WebDriverWait webDriverWait = new WebDriverWait(driver, Duration.ofSeconds(10));	//⭐⭐⭐
        //드라이버가 실행된 뒤 최대 10초 기다리겠다.

        driver.get(url);    //브라우저에서 url로 이동한다.
//        Thread.sleep(1000); //브라우저 로딩될때까지 잠시 기다린다.

        List<WebElement> elements = driver.findElements(By.ByTagName.tagName("p"));
        for (WebElement element : elements) {
//            System.out.println("----------------------------");
            text = text + element.getText() + '\n';
//            System.out.println(element.getText());	//⭐
        }

        return list;
    }

}
