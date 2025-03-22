function openModal(projectId) {
  const modal = document.getElementById("modal");
  const modalDetails = document.getElementById("modal-details");

  // 프로젝트 정보
  const projectDetails = {
    vitaMine: `
      <div class="modal-content">
        <div class="modal-header">
          <h2>VitaMine</h2>
          <p>2024.04 ~ 2024.05 (2인 1팀)</p>
        </div>
        <div class="modal-body">
          <div class="modal-left">
            <h3>프로젝트 개요</h3>
            <ul>
              <li><strong>목표:</strong> 개인 맞춤형 건강보조식품 추천 플랫폼 개발</li>
              <li><strong>주요 기능:</strong> 영양성분 데이터 기반 영양제 추천, 관리자 페이지 CRUD 기능</li>
            </ul>
          </div>
          <div class="modal-right">
            <img src="./assets/img/vitamine_main.png" alt="VitaMine 주요 화면" class="modal-image" />
            <p class="caption">VitaMine: 영양제 조합 분석 플랫폼</p>
          </div>
        </div>
        <div class="modal-footer">
          <section>
            <h3>사용 기술</h3>
            <p><strong>Front-end:</strong> Vue.js, Pinia</p>
            <p><strong>Back-end:</strong> Java, Spring Boot, MySQL</p>
            <p><strong>ETL:</strong> Selenium</p>
          </section>
          <section>
            <h3>담당 역할</h3>
            <p><strong>DB 설계 및 생성, 프론트엔드 메인</strong></p>
            <p><strong>데이터 크롤링</strong></p>
          </section>
          <section>
            <h3>구현 사항</h3>
            <p><strong>프론트-백엔드 연동:</strong> 데이터 기반 추천 시스템을 위한 API 개발 및 테스트</p>
            <p><strong>프론트엔드 주요 기능 개발:</strong> sessionStorage 활용한 유저 상태 유지, 동적 헤더 UI, 데이터 페이지네이션 구현</p>
            <p><strong>데이터 수집 및 처리:</strong> 데이터를 크롤링 및 가공해 단위 변환 및 SQL문 생성 자동화 코드 구현</p>
            <img src="./assets/img/vitamine_comb.gif" alt="영양제 조합 분석" class="modal-image"/>
          </section>
          <section>
            <h3>문제 해결 사례</h3>
            <p><strong>문제: 운영체제 간 환경 차이 및 사이트 크롤링 차단</strong> <br/> Selenium을 사용하여 데이터 수집을 진행하는 과정에서, Windows와 macOS 간 파일 경로 문제 및 Chromedriver 버전 차이로 인해 크롤링 코드 실행에 오류가 발생했습니다. 또한, 크롤링 대상 사이트에서 자동화 탐지 및 차단(로봇 검사)으로 인해 일부 데이터를 수집할 수 없었습니다. </p>
            <p><strong>해결: 운영체제 호환성 확보</strong> <br/> 크롬 드라이버 경로 및 권한 문제를 해결하기 위해 각 OS에 맞는 드라이버 설치 및 설정을 수행하였고, macOS에서의 보안 경고를 해제하기 위해 xattr -d com.apple.quarantine 명령을 사용했습니다. 이를 통해 동일한 코드를 두 환경에서 모두 실행 가능하도록 했습니다.</p>
          </section>
        </div>
      </div>
    `,
    posemate: `
      <div class="modal-content">
        <div class="modal-header">
          <h2>POSEMATE</h2>
          <p>2024.07 ~ 2024.08 (6인 1팀)</p>
        </div>
        <div class="modal-body">
          <div class="modal-left">
            <h3>프로젝트 개요</h3>
            <ul>
              <li><strong>목표:</strong> 자율주행 차량 기반 AI 달리기 자세 분석 플랫폼 개발</li>
              <li><strong>배경:</strong> MZ 세대의 건강한 놀이 문화인 러닝의 적극적인 지원</li>
              <li><strong>주요 기능:</strong> 객체 인식을 통한 로봇카 자율주행, 영상 분석, 자세 분류, 실시간 피드백 제공</li>
            </ul>
          </div>
          <div class="modal-right">
            <img src="./assets/img/posemate_main.png" alt="POSEMATE 주요 화면" class="modal-image" />
            <p class="caption">POSEMATE: 메인 화면 및 자세 분석 UI</p>
          </div>
        </div>
        <div class="modal-footer">
          <section>
            <h3>사용 기술</h3>
            <p><strong>Mobile:</strong> React-Native-cli: 2.0.1, React-Native 0.74.3, NodeJS v8.20.4 LTS, Android Studio Koala.</p>
            <p><strong>Back-end:</strong> Oracle Java 17.0.12, Spring boot 3.3.1, SpringSecurity 6.3.1, JPA, Swagger 2.9.2, MariaDB 10.3.23</p>
            <p><strong>AI:</strong> python 3.10.14, FAST-API 0.111.1, TensorFlow 2.12.0</p>
            <p><strong>AIoT:</strong> Jetson Orin Nano Dev-Kit, Python3.8.10, YOLOv8n-pose, YOLOv8s, OpenCV</p>
          </section>
          <section>
            <h3>담당 역할</h3>
            <p><strong>AI 모델 선정: </strong>달리기 자세를 평가하기 위한 AI 모델 선정</p>
            <p><strong>AI 모델 전개: </strong>FastAPI를 통한 AI 모델 서빙 API 코드 작성</p>
            <p><strong>데이터 시각화 및 협업: </strong>협업을 위한 데이터 시각화 결과를 GIF로 제작하여 공유</p>
          </section>
          <section>
            <h3>구현 사항</h3>
            <p><strong>실시간 AI 분석:</strong> 영상 데이터를 실시간으로 분석하여 사용자의 자세 피드백 제공, YOLO 모델을 활용해 관절 포인트를 추출하고, LSTM으로 자세를 분석 및 분류, GPU 환경(CUDA, CuDNN) 구축 및 데이터 학습 시간 단축</p>
            <p><strong>데이터 증강 및 전처리:</strong> 좌우 반전, 회전, 잡음 추가를 통해 데이터 다양성 확보, JSON 데이터를 기반으로 LSTM 입력 형식의 시퀀스 데이터 생성</p>
            <p><strong>데이터 시각화 및 공유:</strong> 올바른 자세와 잘못된 자세를 시각적으로 비교 가능한 GIF 제작, 분석 데이터를 시각적으로 표현하여 협업 간 이해도 향상</p>
            <img src="./assets/img/posemate.gif" alt="POSEMATE 데이터 시각화" class="modal-image" width=250px/>
          </section>
          <section>
            <h3>프로젝트 성과 및 결과</h3>
            <p>LSTM 모델을 통해 4가지 자세 클래스로 분류, 약 98%의 정확도 달성, 사용자별 팔, 다리, 상체 점수와 종합 점수를 실시간 피드백으로 제공</p>
            <p>공통 프로젝트 우수상 (9팀 중 2위) 수상 및 본선 발표회 진출</p>
          </section>
          <section>
            <h3>문제 해결 사례</h3>
            <p><strong>문제:</strong> Jetson Orin Nano 메모리 제한으로 OpenPose 실행 불가</p>
            <p><strong>해결:</strong> YOLOv8으로 모델 변경 및 경량화 진행, CUDA와 CuDNN으로 학습 시간 30% 단축</p>
          </section>
        </div>
      </div>
    `,
    honeyMorning: `
      <div class="modal-content">
        <div class="modal-header">
          <h2>Honey Morning</h2>
          <p>2024.08 ~ 2024.10 (6인 1팀)</p>
        </div>
        <div class="modal-body">
          <div class="modal-left">
            <h3>프로젝트 개요</h3>
            <ul>
              <li><strong>목표:</strong> AI 기반 맞춤형 뉴스 브리핑 및 퀴즈 제공</li>
              <li><strong>배경:</strong> 바쁜 아침 시간을 효율적으로 사용하고 싶은 현대인들을 위한 서비스, 지식 습득의 일상화를 위한 다수의 기능을 포함한 서비스</li>
              <li><strong>주요 기능:</strong> 알람 설정, 브리핑 제공, 퀴즈 생성</li>
            </ul>
          </div>
          <div class="modal-right">
            <img src="./assets/img/honeymorning_main.png" alt="Honey Morning 주요 화면" class="modal-image" />
            <p class="caption">Honey Morning: 맞춤형 뉴스 및 퀴즈 UI</p>
          </div>
        </div>
        <div class="modal-footer">
          <section>
            <h3>사용 기술</h3>
            <p><strong>Front-end:</strong> React, typescript, styled-component, React Query, three.js, PWA</p>
            <p><strong>Back-end:</strong> Java(17), JDK(17.0.10), Spring Boot(3.3.3), JPA, MySQL(8.038), Redis</p>
            <p><strong>AI:</strong> FastAPI, Hugging Face, Jupyter Notebook</p>
            <p><strong>Infra:</strong> AWS EC2, Ubuntu 22.04 (LTS), Docker, Nginx, Jenkins</p>
          </section>
          <section>
            <h3>담당 역할</h3>
            <p><strong>AI 개발: </strong>LDA를 통한 토픽 모델링, AI 모델을 활용한 뉴스 요약</p>
            <p><strong>프론트엔드 개발: </strong>모바일 기능 구현 위한 PWA 설정, 외부 라이브러리를 활용한 페이지 구현으로 UX 향상</p>
          </section>
          <section>
            <h3>구현 사항</h3>
            <p>React를 활용한 UI 설계 및 PWA 설정, Wake Lock API로 모바일 UX 개선, 모바일 환경에서 알람 및 브리핑 서비스를 원활히 제공</p>
            <p>네이버 뉴스 기사 페이지에서 정치, 경제, 사회, 생활/문화, IT/기술, 세계의 6개 카테고리에 대해 BS4를 이용한 정적 크롤링을 진행</p>
            <p>Kobart 모델을 통한 AI 요약 데이터를 바탕으로 사용자의 관심사를 반영한 브리핑 생성</p>
            <img src="./assets/img/honeymorning_lda.png" alt="Honey Morning LDA" class="modal-image"/>
            <p class="caption">pyLDAvis로 시각화한 LDA 토픽 모델링 HTML</p>
          </section>
          <section>
            <h3>문제 해결 사례</h3>
            <p><strong>문제:</strong> 수집된 뉴스 기사가 카테고리당 최대 160개 (알람 시간 이전 8시간, 1시간당 최대 20개의 뉴스 기사 크롤링)이기 때문에, 해당 뉴스를 모두 요약하는 것은 자원의 낭비가 심했습니다.</p>
            <p><strong>해결:</strong> 한 카테고리 당 대표 기사 3개를 뽑아 요약 모델의 input으로 사용, 데이터 자체를 클러스터의 중심으로 출력해주는 KMedoids 알고리즘을 이용해 대표 기사를 선택</p>
          </section>
        </div>
      </div>
    `,
    trai: `
    <div class="modal-content">
      <div class="modal-header">
        <h2>TRAI</h2>
        <p>2024.10 ~ 2024.11 (6인 1팀)</p>
      </div>

      <!-- 본문 -->
      <div class="modal-body">
        <div class="modal-left">
          <h3>프로젝트 개요</h3>
          <ul>
            <li><strong>목표:</strong> 생성형 AI와 멀티 에이전트를 활용한 비트코인 자동매매 플랫폼 개발</li>
            <li><strong>배경:</strong> 금융 투자업에서의 대형 언어 모델(LLM)의 활용 가능성 및 복잡한 프로세스의 자동화</li>
            <li><strong>주요 기능:</strong> AI 에이전트 6개를 활용한 비트코인 자동매매, 개인 투자 성향 설정, 상세 AI 전략 열람</li>
          </ul>
        </div>
        <div class="modal-right">
          <img src="./assets/img/trai_main.jpg" alt="TRAI 메인 화면" class="modal-image" />
          <p class="caption">TRAI 메인 화면</p>
        </div>
      </div>

      <!-- 추가 정보 -->
      <div class="modal-footer">
        <section>
          <h3>사용 기술</h3>
            <p><strong>Front-end:</strong></p>
            <img src="https://img.shields.io/badge/Node.js-18.20.4-339933?logo=node.js&logoColor=white">
            <img src="https://img.shields.io/badge/Axios-1.5.2-5A29E4?logo=axios&logoColor=white">
            <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white">
            <img src="https://img.shields.io/badge/Redux_Toolkit-2.3.0-764ABC?logo=redux&logoColor=white">
            <img src="https://img.shields.io/badge/React_Query-4.29.5-FF4154?logo=react-query&logoColor=white">
            <img src="https://img.shields.io/badge/React_Router-6.15.0-CA4245?logo=react-router&logoColor=white">
            <img src="https://img.shields.io/badge/TailwindCSS-3.4.14-06B6D4?logo=tailwindcss&logoColor=white">
            <img src="https://img.shields.io/badge/Styled_Components-6.0.8-DB7093?logo=styled-components&logoColor=white">
            <img src="https://img.shields.io/badge/three.js-0.170.0-000000?logo=three.js&logoColor=white">
            <img src="https://img.shields.io/badge/WebSocket-Standard-010101?logo=websocket&logoColor=white">

            <p><strong>Back-end:</strong></p>
            <img src="https://img.shields.io/badge/Java-17.0.2-007396?logo=java&logoColor=white">
            <img src="https://img.shields.io/badge/Spring_Boot-3.3.4-6DB33F?logo=spring-boot&logoColor=white">
            <img src="https://img.shields.io/badge/MySQL-8.2.0-4479A1?logo=mysql&logoColor=white">
            <img src="https://img.shields.io/badge/JWT-4.4.0-000000?logo=json-web-tokens&logoColor=white">

            <p><strong>AI:</strong></p>
            <img src="https://img.shields.io/badge/LangChain-0.3.7-000000">
            <img src="https://img.shields.io/badge/FastAPI-0.115.4-009688?logo=fastapi&logoColor=white">
            <img src="https://img.shields.io/badge/Selenium-4.26.1-43B02A?logo=selenium&logoColor=white">

            <p><strong>Infra:</strong></p>
            <img src="https://img.shields.io/badge/AWS_EC2-t2.xlarge-FF9900?logo=amazon-aws&logoColor=white">
            <img src="https://img.shields.io/badge/AWS_EC2-c6g.2xlarge-FF9900?logo=amazon-aws&logoColor=white">
            <img src="https://img.shields.io/badge/Ubuntu-20.04.6_LTS-E95420?logo=ubuntu&logoColor=white">
            <img src="https://img.shields.io/badge/Docker-27.3.1-2496ED?logo=docker&logoColor=white">
            <img src="https://img.shields.io/badge/Jenkins-2.462.3-D24939?logo=jenkins&logoColor=white">
            <img src="https://img.shields.io/badge/Nginx-1.18.0-009639?logo=nginx&logoColor=white">

        </section>
        <section>
          <h3>담당 역할</h3>
          <p><strong>AI 개발</strong>: LangChain을 활용한 차트 패턴 분석, 뉴스 검색, 의사결정 3개의 AI 에이전트 개발 담당</p>
          <p><strong>프론트엔드 AI 연동</strong>: 차트 패턴 분석 결과 연동 및 거래 및 상세 전략 페이지 모달 창 구현</p>
        </section>
        <section>
          <h3>구현 사항</h3>
          <p><strong>RAG 및 개인화 에이전트 구현</strong>: FAISS 벡터 저장소를 활용한 투자 성향 문서 임베딩, 사용자가 입력한 투자 성향 문장과 가장 유사한 투자 성향 문서를 찾아 해당 성향을 투자에 적용하는 개인화 에이전트 구현</p>
          <p><strong>멀티모달 AI 활용</strong>: 차트 패턴 분석을 위해 GPT-4 Vision을 활용, ARM Linux 서버 환경에서의 차트 캡쳐 자동화를 위한 Selenium 실행 코드 및 환경 구축</p>
          <img src="./assets/img/trai_agent.png" alt="TRAI 에이전트" class="modal-image" />
        </section>
        <section>
          <h3>문제 해결 사례</h3>
          <p><strong>문제:</strong> 오픈소스 LLM의 비용과 프롬프트 최적화 및 기술적 분석 AI 에이전트의 환각 현상 발생</p>
          <p><strong>해결:</strong> LangSmith를 활용한 지연 시간 및 사용 토큰량 추적, 기술적신호(SMA, MACD, RSI 등) 계산 함수로 전처리 후 프롬프트에 동적으로 삽입</p>
        </section>
        <section>
          <h3>프로젝트 성과 및 결과</h3>
          <p>4개의 공통 에이전트와 2개의 개인화 에이전트를 통한 비트코인 자동매매 구현 및 누적 투자 수익률 최대 5% 기록</p>
          <p>LangSmith 모니터링 결과, 회당 최대 응답 시간 25초 미만, 8,300토큰(약 50원 미만)으로 프롬프트 성능 최적화</p>
        </section>
      </div>
    </div>
    `,
  };

  modalDetails.innerHTML = projectDetails[projectId];
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// DOMContentLoaded 이벤트 내에 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", function () {
  // 닫기 버튼에 이벤트 리스너 추가
  const modalClose = document.getElementById("modalClose");
  modalClose.addEventListener("click", closeModal);

  // 화면 밖 클릭 시 모달 닫기
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
      closeModal();
    }
  });
});