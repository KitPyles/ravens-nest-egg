package com.kitpyles.ravensnestegg.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.validation.annotation.Validated;

import lombok.Getter;
import lombok.Setter;

@Configuration
@EnableConfigurationProperties(JwtProperties.class)
@ConfigurationProperties(prefix = "app.jwt")
@Getter
@Setter
@Validated
public class JwtProperties {
    private String secret;
    private long expiration = 86400000; // Default 24 hours
}
