## 항해 플러스 프론트엔드 9주차 과제

## 프론트엔드 배포 파이프라인

## 개요
1. Checkout 액션을 사용해 코드 내려받기
2. `npm ci` 명령어로 프로젝트 의존성 설치
3. `npm run build` 명령어로 Next.js 프로젝트 빌드
4. AWS 자격 증명 구성
5. 빌드된 파일을 S3 버킷에 동기화
6. CloudFront 캐시 무효화

## 주요 링크
- S3 버킷 웹사이트 엔드포인트 : http://front-5th-chapter4-1-singyukang.s3-website.ap-northeast-2.amazonaws.com/
- CloudFrount 배포 도메인 이름 : https://donf7c57g46t3.cloudfront.net/

## 배포 프로세스 구조
![ci_cd drawio](https://github.com/user-attachments/assets/fa79e4f6-ad40-424b-a1f4-b490d435ebb4)





## 주요 개념
- GitHub Actions과 CI/CD 도구: 
- S3와 스토리지: 
- CloudFront와 CDN: 
- 캐시 무효화(Cache Invalidation): 
- Repository secret과 환경변수:


## CDN과 성능최적화

| **Time to First Byte** | **Start Render** | **First Contentful Paint** | [**Speed Index**](https://docs.webpagetest.org/metrics/speedindex/) | [**Largest Contentful Paint**](https://www.webpagetest.org/vitals.php?test=250527_BiDcM6_44X&run=2&cached=0#lcp) | [**Cumulative Layout Shift**](https://www.webpagetest.org/vitals.php?test=250527_BiDcM6_44X&run=2&cached=0#cls) | [**Total Blocking Time**](https://www.webpagetest.org/vitals.php?test=250527_BiDcM6_44X&run=2&cached=0#tbt) | **Page Weight** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **3.385**S | **5.700**S | **6.499**S | **7.256**S | **10.302**S | **.582** | **5.379**S | **3,959**KB |
| *When did the content start downloading?* | *When did pixels first start to appear?* | *How soon did text and images start to appear?* | *How soon did the page look usable?* | *When did the largest visible content finish loading?* | *How much did the design shift while loading?* | *Was the main thread blocked?* | *How many bytes downloaded?* |

| **Time to First Byte** | **Start Render** | **First Contentful Paint** | [**Speed Index**](https://docs.webpagetest.org/metrics/speedindex/) | [**Largest Contentful Paint**](https://www.webpagetest.org/vitals.php?test=250527_BiDcQR_44Z&run=2&cached=0#lcp) | [**Cumulative Layout Shift**](https://www.webpagetest.org/vitals.php?test=250527_BiDcQR_44Z&run=2&cached=0#cls) | [**Total Blocking Time**](https://www.webpagetest.org/vitals.php?test=250527_BiDcQR_44Z&run=2&cached=0#tbt) | **Page Weight** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **.733**S | **2.600**S | **2.605**S | **3.920**S | **7.006**S | **.582** | **4.793**S | **3,047**KB |
| *When did the content start downloading?* | *When did pixels first start to appear?* | *How soon did text and images start to appear?* | *How soon did the page look usable?* | *When did the largest visible content finish loading?* | *How much did the design shift while loading?* | *Was the main thread blocked?* | *How many bytes downloaded?* |



![74](https://github.com/user-attachments/assets/5f6bb083-236b-4e89-a805-970d100ed3df)
![스크린샷 2025-05-27 오후 1 51 34](https://github.com/user-attachments/assets/a1a036b2-e59c-45fc-a4fd-702c343558dc)

<img width="965" alt="스크린샷 2025-05-28 오후 7 34 12" src="https://github.com/user-attachments/assets/e1e757e4-4fd2-49d8-9924-516fce1e003b" />

<img width="924" alt="스크린샷 2025-05-28 오후 7 34 27" src="https://github.com/user-attachments/assets/6535310f-04f3-4ada-a6fd-783623591003" />
