package com.first.portfolio.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Map;

@RestController
public class GithubController {

    private final String GITHUB_API_URL = "https://api.github.com/users/Nirjal22/repos";

    @GetMapping("/api/github-repos")
    public List<Map<String, Object>> getGithubRepos() {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<List> response = restTemplate.getForEntity(
            GITHUB_API_URL, List.class, "Nirjal22"
        );
        return response.getBody();
    }
}
