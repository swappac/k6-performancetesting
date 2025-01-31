FROM grafana/k6

COPY load-test.js /load-test.js

CMD ["run", "/load-test.js"]
