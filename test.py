# Github

import requests
import json

def fetch_github_repos(username, output_file='github_projects.json'):
    repo_data = []

    try:
        response = requests.get(f'https://api.github.com/users/{username}/repos?per_page=100')
        response.raise_for_status()
        repos = response.json()
    except requests.RequestException as e:
        print(f"Error fetching repositories: {e}")
        repos = []

    for repo in repos:
        try:
            contributors_resp = requests.get(repo['contributors_url'])
            contributors_resp.raise_for_status()
            contributors = contributors_resp.json()
            commit_count = next((c['contributions'] for c in contributors if c['login'] == username), 0)
        except requests.RequestException as e:
            print(f"Error fetching contributors for {repo['name']}: {e}")
            commit_count = 0

        repo_data.append({
            'name': repo.get('name', ''),
            'url': repo.get('html_url', ''),
            'commits': commit_count,
            'stars': repo.get('stargazers_count', 0)
        })

    # Sort by commits, then stars
    repo_data.sort(key=lambda r: (-r['commits'], -r['stars']))

    # Save as JSON
    try:
        with open(output_file, 'w') as f:
            json.dump(repo_data, f, indent=2)
    except IOError as e:
        print(f"Error writing to file: {e}")

    return repo_data