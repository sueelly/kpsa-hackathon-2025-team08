FROM openjdk:21-jdk-slim AS builder
WORKDIR /buildMyApp

# Gradle Wrapper 복사
COPY gradlew settings.gradle ./
COPY gradle gradle
RUN chmod +x gradlew

# 의존성 파일 복사 및 다운로드
COPY build.gradle .

# 의존성 다운로드
RUN ./gradlew dependencies

# 소스코드 복사 및 빌드
COPY src ./src
RUN ./gradlew clean build

# 실행 스테이지
FROM openjdk:21-jdk-slim
WORKDIR /memoryGarden
COPY --from=builder /buildMyApp/build/libs/*.jar memoryGardenExcute.jar

ENTRYPOINT ["java", "-Duser.timezone=Asia/Seoul", "-jar", "memoryGardenExcute.jar"]
EXPOSE 8080