# Running k6

k6 run load-test.js

#Analyze the Results:
K6 provides detailed output in the terminal, including summary statistics and any failed checks. You can also integrate K6 with external monitoring and visualization tools like Grafana for more advanced analysis.

# Run using docker
This command builds the Docker image based on the Dockerfile and tags it as k6-tests. The -t option is used to tag the Docker image with a name (load-k6-test in this example). The . at the end indicates that the Dockerfile is in the current directory.

docker build -t load-k6-test .

# Run the script inside docker

docker run my-k6-test
